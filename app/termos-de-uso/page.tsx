import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termos de Uso | Said & Said Advogados Associados",
  description:
    "Termos e Condições de Uso do sítio eletrônico institucional do Said & Said Advogados Associados em Campinas/SP.",
  alternates: {
    canonical: "/termos-de-uso",
  },
  openGraph: {
    title: "Termos de Uso | Said & Said Advogados Associados",
    description:
      "Condições gerais de navegação institucional do portal Said & Said Advogados Associados.",
    url: `${SITE_CONFIG.baseUrl}/termos-de-uso`,
    type: "website",
  },
};

export default function TermosUsoPage() {
  const breadcrumbItems = [
    { name: "Início", url: "/" },
    { name: "Termos de Uso", url: "/termos-de-uso" },
  ];

  return (
    <div className="space-y-0">
      <section className="bg-[#330505] text-[#FFFFFF] pt-16 pb-20 border-b border-[#330505]/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Breadcrumb items={breadcrumbItems} />

          <h1 className="font-serif text-3xl sm:text-5xl text-[#FFFFFF] font-normal max-w-4xl leading-tight text-balance">
            Termos de Uso do Portal Institucional
          </h1>

          <p className="text-sm md:text-base text-[#DDD9D6] mt-4 max-w-2xl leading-relaxed">
            Condições gerais aplicáveis à navegação e utilização dos conteúdos informativos deste sítio eletrônico.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#BAAFA6] text-[#330505]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 bg-[#B4A99F] border border-[#DDD9D6] p-8 md:p-16 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-1">
              Condições Legais
            </span>
            <p className="text-xs text-[#330505]/60 font-mono">
              Vigência a partir de Janeiro de 2025
            </p>
          </div>

          <div className="space-y-6 text-sm md:text-base leading-relaxed text-[#330505]/90 pt-4 border-t border-[#DDD9D6]">
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-[#330505]">
                1. Caráter Exclusivamente Informativo
              </h2>
              <p>
                Os textos, artigos, resumos e informações disponibilizados neste sítio eletrônico possuem finalidade estritamente institucional, pedagógica e informativa. O material veiculado não constitui parecer jurídico, consultoria formal ou aconselhamento legal vinculante para casos concretos.
              </p>
              <p>
                A contratação de serviços advocatícios e o estabelecimento formal de mandato dependem de celebração prévia de contrato de prestação de serviços e outorga de procuração expressa, após análise pormenorizada dos fatos e da documentação pelas partes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-[#330505]">
                2. Ausência de Promessa de Resultado
              </h2>
              <p>
                Em observância rigorosa às normas da Ordem dos Advogados do Brasil (OAB) e ao Código de Ética e Disciplina, o Said & Said Advogados Associados não faz promessas de êxito processual, garantias de vitória judicial ou compromissos sobre o teor de futuras decisões judiciais. A advocacia constitui atividade de meio, não de resultado.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-[#330505]">
                3. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo deste portal, incluindo marcas, logotipos, identidade visual, textos, estruturas de dados e organização editorial, é de propriedade exclusiva do Said & Said Advogados Associados ou de licenciantes autorizados. É proibida a reprodução, cópia, distribuição ou exploração comercial desautorizada de qualquer elemento sem expressa citação da fonte e autorização prévia por escrito.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-[#330505]">
                4. Limitação de Responsabilidade
              </h2>
              <p>
                Embora o escritório empenhe contínuos esforços para assegurar a precisão e a atualidade dos textos aqui contidos, as leis, decretos e entendimentos jurisprudenciais sofrem frequentes alterações. O escritório não se responsabiliza por eventuais atos praticados por leitores baseados unicamente em informações preliminares contidas neste sítio sem a prévia orientação jurídica formal.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-[#330505]">
                5. Legislação Aplicável e Foro
              </h2>
              <p>
                Os presentes Termos de Uso são regidos pelas leis vigentes na República Federativa do Brasil. Para a resolução de quaisquer controvérsias decorrentes da utilização deste portal, fica eleito o Foro da Comarca de Campinas, Estado de São Paulo, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
