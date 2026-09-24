import React from "react";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato e Localização | Said & Said Advogados Associados em Campinas",
  description:
    "Entre em contato com o Said & Said Advogados Associados. Edifício Mesbla, Av. Campos Sales, 715, Centro, Campinas/SP. Telefone e WhatsApp: (19) 98424-0366.",
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato e Localização | Said & Said Advogados Associados",
    description:
      "Canais de atendimento do Said & Said Advogados Associados em Campinas. Agende uma consulta institucional.",
    url: `${SITE_CONFIG.baseUrl}/contato`,
    type: "website",
  },
};

export default function ContatoPage() {
  const breadcrumbItems = [
    { name: "Início", url: "/" },
    { name: "Contato", url: "/contato" },
  ];

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-[#330505] text-[#FFFFFF] pt-16 pb-20 border-b border-[#330505]/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Breadcrumb items={breadcrumbItems} />

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] font-normal max-w-4xl leading-tight text-balance">
            Entre em contato com o Said & Said Advogados Associados
          </h1>

          <p className="text-base sm:text-lg text-[#DDD9D6] mt-6 max-w-3xl leading-relaxed font-normal">
            Atendimento presencial em nossa sede em Campinas ou por videoconferência com nossos sócios responsáveis.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 bg-[#BAAFA6] border-b border-[#DDD9D6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#B4A99F] border border-[#DDD9D6] p-8 md:p-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-2">
                Atendimento por Mensagem
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-[#330505] font-normal mb-2">
                Envie sua Consulta Preliminar
              </h2>
              <p className="text-xs text-[#330505]/70 mb-8 leading-relaxed">
                As informações enviadas são tratadas com sigilo profissional estrito nos termos do Código de Ética e Disciplina da OAB.
              </p>

              <ContactForm />
            </div>

            {/* Direct Details & Office Location */}
            <div className="lg:col-span-5 space-y-8 text-[#330505]">
              <div className="bg-[#B4A99F] border border-[#DDD9D6] p-8 space-y-6">
                <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block">
                  Sede Central
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#330505]">
                  Said & Said Advogados Associados
                </h3>

                <div className="space-y-4 text-sm text-[#330505]/90">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#330505] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#330505]">Endereço Físico:</strong>
                      <p className="mt-0.5">
                        {SITE_CONFIG.address.building}
                        <br />
                        {SITE_CONFIG.address.street}
                        <br />
                        {SITE_CONFIG.address.neighborhood}
                        <br />
                        {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                        <br />
                        CEP {SITE_CONFIG.address.postalCode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-2 border-t border-[#DDD9D6]/60">
                    <Phone className="w-5 h-5 text-[#330505] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#330505]">Telefone / WhatsApp:</strong>
                      <p className="mt-0.5">{SITE_CONFIG.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-2 border-t border-[#DDD9D6]/60">
                    <Mail className="w-5 h-5 text-[#330505] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#330505]">Correspondência Eletrônica:</strong>
                      <p className="mt-0.5">{SITE_CONFIG.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-2 border-t border-[#DDD9D6]/60">
                    <Clock className="w-5 h-5 text-[#330505] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#330505]">Expediente Forense:</strong>
                      <p className="mt-0.5">{SITE_CONFIG.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box de Atendimento WhatsApp */}
              <div className="bg-[#330505] text-[#FFFFFF] p-8 border border-[#330505] space-y-4">
                <h4 className="font-serif text-2xl font-normal text-[#FFFFFF]">
                  Atendimento Imediato
                </h4>
                <p className="text-xs text-[#DDD9D6] leading-relaxed">
                  Para orientações urgentes ou agendamento de consultas diretas, fale com nossa equipe pelo aplicativo de mensagens.
                </p>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider py-3.5 px-6 hover:bg-[#20bd5a] transition-colors text-center inline-block"
                >
                  Falar pelo WhatsApp
                </a>
              </div>

              {/* Localização Sob Demanda */}
              <div className="border border-[#DDD9D6] p-6 bg-[#B4A99F]">
                <span className="text-xs uppercase tracking-wider font-bold text-[#330505] block mb-2">
                  Ponto de Referência
                </span>
                <p className="text-xs text-[#330505]/80 leading-relaxed">
                  Localizado no histórico Edifício Mesbla, na Avenida Campos Sales, próximo ao fórum e ao centro administrativo da cidade de Campinas, com fácil acesso aos principais eixos viários da região.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
