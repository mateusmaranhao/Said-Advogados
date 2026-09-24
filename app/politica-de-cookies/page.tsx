import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Cookies | Said & Said Advogados Associados",
  description:
    "Transparência e diretrizes de uso de cookies no portal do Said & Said Advogados Associados em Campinas/SP.",
  alternates: {
    canonical: "/politica-de-cookies",
  },
  openGraph: {
    title: "Política de Cookies | Said & Said Advogados Associados",
    description:
      "Saiba como utilizamos cookies estritamente necessários para aprimorar sua experiência de navegação.",
    url: `${SITE_CONFIG.baseUrl}/politica-de-cookies`,
    type: "website",
  },
};

export default function PoliticaCookiesPage() {
  const breadcrumbItems = [
    { name: "Início", url: "/" },
    { name: "Política de Cookies", url: "/politica-de-cookies" },
  ];

  return (
    <div className="space-y-0">
      <section className="bg-[#330505] text-[#FFFFFF] pt-16 pb-20 border-b border-[#330505]/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Breadcrumb items={breadcrumbItems} />

          <h1 className="font-serif text-3xl sm:text-5xl text-[#FFFFFF] font-normal max-w-4xl leading-tight text-balance">
            Política de Cookies
          </h1>

          <p className="text-sm md:text-base text-[#DDD9D6] mt-4 max-w-2xl leading-relaxed">
            Transparência sobre o armazenamento de preferências e o funcionamento técnico deste sítio eletrônico.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#BAAFA6] text-[#330505]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 bg-[#B4A99F] border border-[#DDD9D6] p-8 md:p-16 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-1">
              Diretrizes Técnicas
            </span>
            <p className="text-xs text-[#330505]/60 font-mono">
              Vigência contínua
            </p>
          </div>

          <div className="space-y-6 text-sm md:text-base leading-relaxed text-[#330505]/90 pt-4 border-t border-[#DDD9D6]">
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-[#330505]">
                1. O que são Cookies?
              </h2>
              <p>
                Cookies são pequenos arquivos de texto armazenados no navegador do seu computador ou dispositivo móvel quando você visita determinadas páginas na internet. Eles servem para permitir a operação estável da plataforma, memorizar preferências básicas e assegurar uma navegação eficiente e segura.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-[#330505]">
                2. Categorias de Cookies Utilizadas
              </h2>
              <p>
                O portal do Said & Said Advogados Associados opera com rigoroso princípio de minimização de dados, utilizando primariamente:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  <strong>Cookies Estritamente Necessários:</strong> Fundamentais para carregar elementos estruturais, garantir a segurança contra requisições maliciosas e armazenar o registro do próprio consentimento de privacidade concedido pelo usuário.
                </li>
                <li>
                  <strong>Cookies de Preferências:</strong> Permitem que a aplicação lembre escolhas feitas pelo usuário (como fechamento do aviso de consentimento) para não importuná-lo repetidamente em visitas futuras.
                </li>
              </ul>
              <p className="text-sm text-[#330505]/80">
                Não utilizamos cookies invasivos de rastreamento comercial cruzado ou tecnologias destinadas a traçar perfis publicitários com terceiros.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-[#330505]">
                3. Gerenciamento e Desativação no Navegador
              </h2>
              <p>
                O usuário possui total liberdade para gerenciar, bloquear ou excluir cookies diretamente nas configurações de seu navegador de internet (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, entre outros).
              </p>
              <p>
                Alertamos que a desativação integral de cookies estritamente necessários pode prejudicar a correta renderização de determinadas páginas ou fazer com que o banner de aviso de privacidade volte a ser exibido a cada nova visita.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-[#330505]">
                4. Informações Adicionais
              </h2>
              <p>
                Caso deseje esclarecimentos sobre o tratamento de informações durante a navegação, consulte nossa{" "}
                <a
                  href="/politica-de-privacidade"
                  className="text-[#330505] underline font-medium hover:text-[#330505]/70"
                >
                  Política de Privacidade
                </a>{" "}
                ou entre em contato pelo e-mail {SITE_CONFIG.email}.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
