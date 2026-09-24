"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SERVICES_LIST } from "@/lib/constants";

export function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const serviceId = useId();
  const messageId = useId();
  const consentId = useId();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    areaInteresse: "Direito Penal",
    mensagem: "",
    concordaLGPD: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.concordaLGPD) {
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#BAAFA6] border border-[#330505] p-8 md:p-12 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-[#330505] mx-auto" />
        <h3 className="font-serif text-2xl md:text-3xl text-[#330505]">
          Mensagem Recebida com Sucesso
        </h3>
        <p className="text-sm text-[#330505]/90 max-w-md mx-auto leading-relaxed">
          Agradecemos o contato. A equipe do Said & Said Advogados Associados analisará seus dados sob estrito sigilo profissional e retornará com a brevidade devida.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor={nameId}
          className="block text-xs uppercase tracking-wider font-semibold text-[#330505] mb-2"
        >
          Nome Completo
        </label>
        <input
          id={nameId}
          type="text"
          required
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          className="w-full bg-[#FFFFFF] border border-[#DDD9D6] px-4 py-3 text-sm text-[#330505] placeholder-[#330505]/40 focus:outline-none focus:border-[#330505]"
          placeholder="Exemplo: Carlos Eduardo de Souza"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor={emailId}
            className="block text-xs uppercase tracking-wider font-semibold text-[#330505] mb-2"
          >
            E-mail
          </label>
          <input
            id={emailId}
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#FFFFFF] border border-[#DDD9D6] px-4 py-3 text-sm text-[#330505] placeholder-[#330505]/40 focus:outline-none focus:border-[#330505]"
            placeholder="nome@empresa.com.br"
          />
        </div>

        <div>
          <label
            htmlFor={phoneId}
            className="block text-xs uppercase tracking-wider font-semibold text-[#330505] mb-2"
          >
            Telefone com DDD
          </label>
          <input
            id={phoneId}
            type="tel"
            required
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            className="w-full bg-[#FFFFFF] border border-[#DDD9D6] px-4 py-3 text-sm text-[#330505] placeholder-[#330505]/40 focus:outline-none focus:border-[#330505]"
            placeholder="(19) 98000-0000"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor={serviceId}
          className="block text-xs uppercase tracking-wider font-semibold text-[#330505] mb-2"
        >
          Área de Interesse
        </label>
        <select
          id={serviceId}
          value={formData.areaInteresse}
          onChange={(e) => setFormData({ ...formData, areaInteresse: e.target.value })}
          className="w-full bg-[#FFFFFF] border border-[#DDD9D6] px-4 py-3 text-sm text-[#330505] focus:outline-none focus:border-[#330505]"
        >
          {SERVICES_LIST.map((srv) => (
            <option key={srv.slug} value={srv.title}>
              {srv.title}
            </option>
          ))}
          <option value="Outra Demanda">Outra Demanda</option>
        </select>
      </div>

      <div>
        <label
          htmlFor={messageId}
          className="block text-xs uppercase tracking-wider font-semibold text-[#330505] mb-2"
        >
          Resumo da Demanda
        </label>
        <textarea
          id={messageId}
          rows={4}
          required
          value={formData.mensagem}
          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
          className="w-full bg-[#FFFFFF] border border-[#DDD9D6] px-4 py-3 text-sm text-[#330505] placeholder-[#330505]/40 focus:outline-none focus:border-[#330505]"
          placeholder="Descreva brevemente o objeto de sua consulta..."
        />
      </div>

      {/* Mandatory LGPD checkbox */}
      <div className="flex items-start space-x-3 pt-1">
        <input
          id={consentId}
          type="checkbox"
          required
          checked={formData.concordaLGPD}
          onChange={(e) => setFormData({ ...formData, concordaLGPD: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-[#DDD9D6] text-[#330505] focus:ring-[#330505]"
        />
        <label htmlFor={consentId} className="text-xs text-[#330505]/80 leading-normal">
          Li e concordo com a{" "}
          <Link
            href="/politica-de-privacidade"
            className="text-[#330505] underline font-medium hover:text-[#330505]/70"
          >
            Política de Privacidade
          </Link>
          . Estou ciente de que as informações enviadas serão tratadas com sigilo profissional.
        </label>
      </div>

      <button
        type="submit"
        disabled={!formData.concordaLGPD}
        className="w-full bg-[#330505] text-[#FFFFFF] text-xs font-semibold uppercase tracking-widest py-4 hover:bg-[#330505]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Fale Conosco
      </button>
    </form>
  );
}
