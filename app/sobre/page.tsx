import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "O Escritório | Said & Said Advogados Associados em Campinas",
  description:
    "Há mais de 50 anos, o Said & Said Advogados Associados atua na advocacia em Campinas com tradição, responsabilidade e compromisso com seus clientes.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: "O Escritório | Said & Said Advogados Associados",
    description:
      "Conheça a história, trajetória, princípios e liderança do escritório Said & Said Advogados Associados em Campinas/SP.",
    url: `${SITE_CONFIG.baseUrl}/sobre`,
    type: "website",
  },
};

export default function SobrePage() {
  const breadcrumbItems = [
    { name: "Início", url: "/" },
    { name: "O Escritório", url: "/sobre" },
  ];

  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="bg-[#330505] text-[#FFFFFF] pt-16 pb-20 border-b border-[#330505]/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Breadcrumb items={breadcrumbItems} />

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] font-normal max-w-4xl leading-tight text-balance">
            Said & Said Advogados Associados em Campinas
          </h1>

          <p className="text-base sm:text-lg text-[#DDD9D6] mt-6 max-w-3xl leading-relaxed font-normal">
            Há mais de 50 anos, o Said & Said Advogados Associados atua na advocacia com tradição, responsabilidade e compromisso com seus clientes.
          </p>
        </div>
      </section>

      {/* 1. História e Fundação */}
      <section className="py-20 bg-[#BAAFA6] border-b border-[#DDD9D6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-3">
                Origem Forense
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal leading-tight">
                História e Fundação em 1974
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#330505] text-base md:text-lg leading-relaxed font-normal">
              <p>
                A história do escritório Said & Said Advogados Associados iniciou-se em 1974 no centro de Campinas, em um período de expansão econômica e transformações profundas na sociedade paulista. Desde o início de suas atividades, o escritório estabeleceu como pilar primordial o estudo rigoroso e metódico da ordem jurídica, recusando a massificação processual e priorizando o atendimento pessoal.
              </p>
              <p>
                Ao longo de mais de meio século de atuação contínua, a banca participou ativamente de julgamentos de relevante repercussão no Estado de São Paulo e nos tribunais superiores em Brasília, mantendo-se firme na preservação dos direitos fundamentais e na segurança das relações patrimoniais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trajetória de Cinco Décadas */}
      <section className="py-20 bg-[#B4A99F] border-b border-[#DDD9D6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-3">
                Continuidade e Solidez
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal leading-tight">
                Trajetória Institucional
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#330505] text-base md:text-lg leading-relaxed font-normal">
              <p>
                A longevidade do Said & Said Advogados Associados reflete a capacidade de aliar a experiência adquirida ao longo de gerações às transformações tecnológicas e legislativas do Direito contemporâneo.
              </p>
              <p>
                A atuação do escritório foi forjada no contato diário com a comunidade de Campinas e região metropolitana, atendendo famílias, empresários e profissionais liberais que buscam respaldo técnico confiável em momentos determinantes de suas vidas e atividades profissionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Atuação Jurídica e Método */}
      <section className="py-20 bg-[#BAAFA6] border-b border-[#DDD9D6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-3">
                Metodologia Técnica
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal leading-tight">
                Atuação e Filosofia de Trabalho
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#330505] text-base md:text-lg leading-relaxed font-normal">
              <p>
                Nossa atuação fundamenta-se na convicção de que cada demanda exige uma abordagem estratégica própria. Não empregamos teses padronizadas ou modelos genéricos. Cada consulta passa por uma análise fática detalhada, levantamento probatório criterioso e exame da jurisprudência mais recente dos tribunais estaduais e federais.
              </p>
              <p>
                Tanto no contencioso judicial quanto na consultoria preventiva, nosso objetivo central é proporcionar previsibilidade, mitigação de riscos e segurança nas tomadas de decisão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Princípios da Banca */}
      <section className="py-20 bg-[#B4A99F] border-b border-[#DDD9D6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-2">
              Bases Éticas
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal">
              Princípios que Orientam Nossa Conduta
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#BAAFA6] border border-[#DDD9D6] p-8">
              <h3 className="font-serif text-xl text-[#330505] font-semibold mb-3">
                Ética e Transparência
              </h3>
              <p className="text-sm text-[#330505]/80 leading-relaxed">
                Clareza irrestrita na comunicação com o cliente sobre as reais possibilidades e riscos envolvidos em cada procedimento.
              </p>
            </div>

            <div className="bg-[#BAAFA6] border border-[#DDD9D6] p-8">
              <h3 className="font-serif text-xl text-[#330505] font-semibold mb-3">
                Discrição e Sigilo
              </h3>
              <p className="text-sm text-[#330505]/80 leading-relaxed">
                Preservação absoluta do segredo profissional e da intimidade dos envolvidos em todas as esferas de atendimento.
              </p>
            </div>

            <div className="bg-[#BAAFA6] border border-[#DDD9D6] p-8">
              <h3 className="font-serif text-xl text-[#330505] font-semibold mb-3">
                Excelência Dogmática
              </h3>
              <p className="text-sm text-[#330505]/80 leading-relaxed">
                Constante aprimoramento técnico e estudo aprofundado dos precedentes vinculantes e da melhor doutrina jurídica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Liderança: Dr. José Pedro Said Junior */}
      <section className="py-20 bg-[#BAAFA6] border-b border-[#DDD9D6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              {/* [INSERIR FOTO PROFISSIONAL REAL DO DR. JOSÉ PEDRO SAID JUNIOR EM WEBP] */}
              <div className="border border-[#DDD9D6] p-4 bg-[#B4A99F]">
                <div className="w-full h-[420px] bg-[#BAAFA6] border border-[#DDD9D6] flex flex-col justify-end p-6">
                  <div className="font-serif text-2xl text-[#330505]">
                    {SITE_CONFIG.leadPartner}
                  </div>
                  <div className="text-xs text-[#330505]/80 uppercase tracking-wider mt-1">
                    Liderança e Coordenação Jurídica
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block">
                Liderança da Banca
              </span>

              <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal leading-tight text-balance">
                Dr. José Pedro Said Junior
              </h2>

              <p className="text-base md:text-lg text-[#330505]/90 leading-relaxed font-normal">
                Sob a coordenação e liderança do Dr. José Pedro Said Junior, o escritório consolidou uma reputação sólida e respeitada perante as autoridades policiais, o Ministério Público e o Poder Judiciário.
              </p>

              <p className="text-base md:text-lg text-[#330505]/90 leading-relaxed font-normal">
                Com vocação destacada para a advocacia criminal estratégica, o Dr. José Pedro Said Junior atua pessoalmente na condução de investigações complexas, audiências instrutórias e sustentações perante os tribunais paulistas e as cortes em Brasília, garantindo aos clientes da banca uma representação firme, sóbria e tecnicamente impecável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Compromisso com o Cliente */}
      <section className="py-20 bg-[#B4A99F] border-b border-[#DDD9D6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block">
              Relação de Confiança
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal leading-tight">
              Compromisso com o Cliente
            </h2>

            <p className="text-base md:text-lg text-[#330505]/90 leading-relaxed font-normal">
              Entendemos que por trás de cada processo judicial ou consulta jurídica existem decisões vitais que afetam a liberdade, a honra, a estabilidade patrimonial ou a continuidade de um empreendimento.
            </p>

            <p className="text-base md:text-lg text-[#330505]/90 leading-relaxed font-normal">
              Por essa razão, nosso compromisso primordial consiste em manter um canal de diálogo direto, acessível e transparente, informando com clareza o andamento de cada ato processual e oferecendo orientações ponderadas e realistas.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CTA Final */}
      <section className="py-20 bg-[#330505] text-[#FFFFFF]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-[#FFFFFF] font-normal leading-snug">
              Conheça nosso atendimento institucional em Campinas.
            </h2>
            <p className="text-sm md:text-base text-[#DDD9D6] leading-relaxed">
              Agende uma conversa preliminar com nossos advogados para submeter sua demanda a uma avaliação jurídica responsável.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contato"
                className="bg-[#FFFFFF] text-[#330505] text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#DDD9D6] transition-colors text-center inline-block"
              >
                Fale Conosco
              </Link>
              <Link
                href="/servicos"
                className="border border-[#DDD9D6]/40 text-[#FFFFFF] text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#FFFFFF]/10 transition-colors text-center inline-block"
              >
                Ver Áreas de Atuação
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
