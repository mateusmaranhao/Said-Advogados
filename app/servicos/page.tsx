import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SERVICES_LIST, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Áreas de Atuação Jurídica em Campinas | Said & Said Advogados Associados",
  description:
    "O Said & Said Advogados Associados atua em diferentes áreas do Direito em Campinas: Direito Penal, Trabalhista, Contencioso Civil, Família, Tributário e Administrativo.",
  alternates: {
    canonical: "/servicos",
  },
  openGraph: {
    title: "Áreas de Atuação Jurídica em Campinas | Said & Said Advogados Associados",
    description:
      "Conheça as áreas de atuação do Said & Said Advogados Associados em Campinas e região com mais de 50 anos de experiência jurídica.",
    url: `${SITE_CONFIG.baseUrl}/servicos`,
    type: "website",
  },
};

export default function ServicosPage() {
  const breadcrumbItems = [
    { name: "Início", url: "/" },
    { name: "Serviços", url: "/servicos" },
  ];

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-[#330505] text-[#FFFFFF] pt-16 pb-20 border-b border-[#330505]/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Breadcrumb items={breadcrumbItems} />

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] font-normal max-w-4xl leading-tight text-balance">
            Áreas de atuação jurídica em Campinas
          </h1>

          <p className="text-base sm:text-lg text-[#DDD9D6] mt-6 max-w-3xl leading-relaxed font-normal">
            O Said & Said Advogados Associados atua em diferentes áreas do Direito, oferecendo acompanhamento jurídico de acordo com as características e necessidades de cada demanda.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-[#BAAFA6] border-b border-[#DDD9D6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="space-y-10">
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.slug}
                className="bg-[#B4A99F] border border-[#DDD9D6] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-[#330505]/30 transition-colors"
              >
                <div className="lg:col-span-8 space-y-4">
                  <span className="font-mono text-xs text-[#330505]/60 block uppercase tracking-wider">
                    0{index + 1} · Área de Atuação
                  </span>

                  <h2 className="font-serif text-2xl md:text-3xl text-[#330505] font-normal">
                    {service.title}
                  </h2>

                  <p className="text-sm md:text-base text-[#330505]/90 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#330505] block mb-2">
                      Frentes de Atuação:
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#330505]/80">
                      {service.situations.slice(0, 4).map((sit, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#330505] inline-block flex-shrink-0" />
                          <span>{sit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <Link
                    href={service.path}
                    className="w-full lg:w-auto bg-[#330505] text-[#FFFFFF] text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#330505]/90 transition-colors text-center inline-block"
                  >
                    Conheça {service.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#330505] text-[#FFFFFF]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-[#FFFFFF] font-normal leading-snug">
              Precisa de orientação jurídica especializada?
            </h2>
            <p className="text-sm md:text-base text-[#DDD9D6] leading-relaxed">
              Consulte nossos advogados em Campinas para esclarecer dúvidas e avaliar as medidas cabíveis.
            </p>
            <div className="pt-4">
              <Link
                href="/contato"
                className="bg-[#FFFFFF] text-[#330505] text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#DDD9D6] transition-colors inline-block"
              >
                Fale com o escritório
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
