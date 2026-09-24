import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { SERVICES_LIST, SITE_CONFIG, ServiceData } from "@/lib/constants";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQAccordion } from "@/components/FAQAccordion";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_LIST.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Serviço Não Encontrado",
    };
  }

  return {
    title: `${service.seoH1} | Said & Said Advogados`,
    description: service.shortDesc,
    alternates: {
      canonical: `/servicos/${service.slug}`,
    },
    openGraph: {
      title: `${service.seoH1} | Said & Said Advogados Associados`,
      description: service.shortDesc,
      url: `${SITE_CONFIG.baseUrl}/servicos/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_LIST.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Início", url: "/" },
    { name: "Serviços", url: "/servicos" },
    { name: service.title, url: `/servicos/${service.slug}` },
  ];

  const otherServices = SERVICES_LIST.filter((s) => s.slug !== service.slug);

  return (
    <div className="space-y-0">
      {/* 1. Hero do Serviço */}
      <section className="bg-[#330505] text-[#FFFFFF] pt-16 pb-20 border-b border-[#330505]/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Breadcrumb items={breadcrumbItems} />

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] font-normal max-w-4xl leading-tight text-balance">
            {service.seoH1}
          </h1>

          <p className="text-base sm:text-lg text-[#DDD9D6] mt-6 max-w-3xl leading-relaxed font-normal">
            {service.subheadline}
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFFFFF] text-[#330505] text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#DDD9D6] transition-colors text-center inline-block"
            >
              Fale com o escritório
            </a>
            <Link
              href="/contato"
              className="border border-[#DDD9D6]/40 text-[#FFFFFF] text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#FFFFFF]/10 transition-colors text-center inline-block"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Introdução e 3. Como o Escritório Atua */}
      <section className="py-20 bg-[#BAAFA6] border-b border-[#DDD9D6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8 space-y-8 text-[#330505]">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-2">
                  Visão Geral
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-[#330505] font-normal mb-4">
                  O que é e como se aplica {service.title}
                </h2>
                <p className="text-base md:text-lg text-[#330505]/90 leading-relaxed font-normal">
                  {service.fullDesc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#330505]/20">
                <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-2">
                  Conduta Forense
                </span>
                <h3 className="font-serif text-2xl text-[#330505] font-normal mb-4">
                  Como o escritório atua nesta matéria
                </h3>
                <p className="text-base text-[#330505]/90 leading-relaxed font-normal">
                  {service.howWeAct}
                </p>
              </div>
            </div>

            {/* Coluna Lateral de Atendimento Imediato */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#330505] text-[#FFFFFF] p-8 border border-[#330505]">
                <h3 className="font-serif text-2xl font-normal text-[#FFFFFF] mb-3">
                  Atendimento em Campinas
                </h3>
                <p className="text-xs text-[#DDD9D6] leading-relaxed mb-6">
                  Nossa banca está disponível para analisar sua demanda de forma confidencial e responsável.
                </p>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FFFFFF] text-[#330505] text-xs font-semibold uppercase tracking-widest py-3.5 hover:bg-[#DDD9D6] transition-colors text-center block"
                >
                  Falar pelo WhatsApp
                </a>
              </div>

              <div className="bg-[#B4A99F] border border-[#DDD9D6] p-6">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#330505] mb-4">
                  Outras Áreas de Atuação
                </h4>
                <div className="space-y-2">
                  {otherServices.map((other) => (
                    <Link
                      key={other.slug}
                      href={other.path}
                      className="block text-xs uppercase tracking-wider text-[#330505]/80 hover:text-[#330505] hover:font-bold py-1.5 transition-colors"
                    >
                      {other.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Situações em que a Atuação pode ser Necessária */}
      <section className="py-20 bg-[#B4A99F] border-b border-[#DDD9D6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-2">
              Demandas Frequentes
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal">
              Situações em que a atuação jurídica é necessária
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.situations.map((situation, idx) => (
              <div
                key={idx}
                className="bg-[#BAAFA6] border border-[#DDD9D6] p-6 flex items-start space-x-4"
              >
                <CheckCircle2 className="w-5 h-5 text-[#330505] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#330505] leading-relaxed">
                  {situation}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Como Funciona o Atendimento (4 Etapas) */}
      <section className="py-20 md:py-24 bg-[#BAAFA6] border-b border-[#DDD9D6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-2">
              Processo de Trabalho
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal">
              Como funciona o atendimento
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.processSteps.map((step) => (
              <div key={step.step} className="bg-[#B4A99F] border border-[#DDD9D6] p-8">
                <span className="font-mono text-xs text-[#330505]/60 mb-2 block font-semibold">
                  {step.step}
                </span>
                <h3 className="font-serif text-xl text-[#330505] font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#330505]/80 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Diferenciais da Área */}
      <section className="py-20 bg-[#B4A99F] border-b border-[#DDD9D6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-2">
              Compromisso
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal">
              Diferenciais em {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.differentials.map((diff, index) => (
              <div key={index} className="bg-[#BAAFA6] border border-[#DDD9D6] p-6">
                <span className="text-xs font-mono text-[#330505]/60 block mb-2">
                  Diferencial 0{index + 1}
                </span>
                <p className="text-sm font-medium text-[#330505] leading-relaxed">
                  {diff}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Específico da Área */}
      <section className="py-20 md:py-28 bg-[#BAAFA6] border-b border-[#DDD9D6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-2">
              Perguntas e Respostas
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal">
              Dúvidas frequentes em {service.title}
            </h2>
          </div>

          <div className="max-w-4xl">
            <FAQAccordion items={service.faq} enableSchema={true} />
          </div>
        </div>
      </section>

      {/* 8. CTA Final do Serviço */}
      <section className="py-20 md:py-28 bg-[#330505] text-[#FFFFFF]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-[#FFFFFF] font-normal leading-snug">
              Precisa de orientação jurídica?
            </h2>
            <p className="text-sm md:text-base text-[#DDD9D6] leading-relaxed font-normal">
              Apresente sua situação aos advogados do Said & Said Advogados Associados para uma consulta personalizada.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFFFFF] text-[#330505] text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#DDD9D6] transition-colors inline-block text-center"
              >
                Fale com o escritório
              </a>
              <Link
                href="/contato"
                className="border border-[#DDD9D6]/40 text-[#FFFFFF] text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#FFFFFF]/10 transition-colors text-center inline-block"
              >
                Formulário de Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
