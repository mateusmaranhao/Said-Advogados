import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade | Said & Said Advogados Associados",
  description:
    "Política de Privacidade e Proteção de Dados do escritório Said & Said Advogados Associados, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
  openGraph: {
    title: "Política de Privacidade | Said & Said Advogados Associados",
    description:
      "Diretrizes de proteção e privacidade de dados pessoais do Said & Said Advogados Associados.",
    url: `${SITE_CONFIG.baseUrl}/politica-de-privacidade`,
    type: "website",
  },
};

export default function PoliticaPrivacidadePage() {
  const breadcrumbItems = [
    { name: "Início", url: "/" },
    { name: "Política de Privacidade", url: "/politica-de-privacidade" },
  ];

  return (
    <div className="space-y-0">
      <section className="bg-[#330505] text-[#FFFFFF] pt-16 pb-20 border-b border-[#330505]/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Breadcrumb items={breadcrumbItems} />

          <h1 className="font-serif text-3xl sm:text-5xl text-[#FFFFFF] font-normal max-w-4xl leading-tight text-balance">
            Política de Privacidade e Proteção de Dados
          </h1>

          <p className="text-sm md:text-base text-[#DDD9D6] mt-4 max-w-2xl leading-relaxed">
            Em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei Federal nº 13.709/2018, LGPD) e com as normas do Código de Ética e Disciplina da OAB.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#BAAFA6] text-[#330505]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 bg-[#B4A99F] border border-[#DDD9D6] p-8 md:p-16 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-1">
              Documento Institucional
            </span>
            <p className="text-xs text-[#330505]/60 font-mono">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          <div className="space-y-6 text-sm md:text-base leading-relaxed text-[#330505]/90 pt-4 border-t border-[#DDD9D6]">
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-[#330505]">
                1. Compromisso com a Privacidade
              </h2>
              <p>
                O escritório Said & Said Advogados Associados valoriza a confidencialidade e a segurança das informações de todos os seus clientes, parceiros, colaboradores e visitantes. Este documento explica com clareza como tratamos e protegemos os dados pessoais coletados neste sítio eletrônico e em nossos canais de atendimento.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-[#330505]">
                2. Dados Coletados e Finalidade do Tratamento
              </h2>
              <p>
                Coletamos apenas os dados estritamente necessários para viabilizar o atendimento institucional inicial ou para a execução de serviços jurídicos contratados:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>
                  <strong>Dados fornecidos no formulário de contato:</strong> nome completo, endereço eletrônico (e-mail), telefone com código de área e resumo da matéria de interesse.
                </li>
                <li>
                  <strong>Finalidade:</strong> retorno ao contato solicitado pelo usuário, avaliação prévia de conflito de interesses ético-profissionais e encaminhamento ao advogado responsável pela matéria.
                </li>
                <li>
                  <strong>Dados de navegação mínima:</strong> registros técnicos estritamente essenciais para manter a integridade, segurança e funcionamento das páginas web.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-[#330505]">
                3. Sigilo Profissional e Compartilhamento
              </h2>
              <p>
                Todas as informações confiadas ao escritório são resguardadas pelo sigilo profissional da advocacia, assegurado pelo Estatuto da Advocacia e da Ordem dos Advogados do Brasil (Lei nº 8.906/1994).
              </p>
              <p>
                Não comercializamos, alugamos ou compartilhamos dados pessoais com terceiros para quaisquer finalidades publicitárias ou de comercialização. O compartilhamento ocorre exclusivamente nos limites estritos da prestação de serviços advocatícios (como a juntada necessária de peças em processos judiciais perante órgãos do Poder Judiciário) ou por ordem judicial expressa.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-[#330505]">
                4. Armazenamento e Segurança da Informação
              </h2>
              <p>
                Adotamos medidas técnicas, administrativas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, perdas acidentais, destruição ou alterações indevidas. Os dados são mantidos pelo período necessário para atender à finalidade para a qual foram recolhidos ou pelo prazo prescricional e regulatório exigido pela legislação brasileira.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-[#330505]">
                5. Direitos do Titular dos Dados Pessoais
              </h2>
              <p>
                Nos termos do artigo 18 da Lei Federal nº 13.709/2018 (LGPD), você tem o direito de solicitar a qualquer momento:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Confirmação da existência de tratamento de dados;</li>
                <li>Acesso facilitado aos dados mantidos;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
                <li>Revogação do consentimento, ressalvadas as hipóteses de guarda obrigatória por dever legal da advocacia.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-[#330505]">
                6. Canal de Contato sobre Privacidade
              </h2>
              <p>
                Para exercer seus direitos ou sanar dúvidas relativas ao tratamento de seus dados pessoais, entre em contato diretamente com o escritório através de nosso endereço de correspondência eletrônica: <strong>{SITE_CONFIG.email}</strong> ou pelo endereço físico no {SITE_CONFIG.address.formatted}.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
