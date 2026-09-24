import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, Star } from "lucide-react";
import { SITE_CONFIG, SERVICES_LIST, HOME_FAQ } from "@/lib/constants";
import { FAQAccordion } from "@/components/FAQAccordion";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION SPLIT - DESIGN BASEADO NA REFERÊNCIA DO USUÁRIO */}
      {/* [INSERIR IMAGEM HERO EM WEBP — FOTOGRAFIA INSTITUCIONAL DO ESCRITÓRIO OU EQUIPE JURÍDICA] */}
      <section className="border-b border-[#330505]/15 bg-[#BAAFA6]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-5rem)]">
          {/* Coluna Esquerda: Conteúdo, Títulos e Indicadores */}
          <div className="lg:col-span-7 px-6 sm:px-10 md:px-14 lg:px-16 py-12 lg:py-20 flex flex-col justify-between">
            <div className="space-y-6">
              {/* TAG / H1 SEO: Menor visualmente que o título principal */}
              <h1 className="text-xs font-sans uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block">
                ADVOCACIA EM CAMPINAS : SP
              </h1>

              {/* H2 PRINCIPAL: Headline institucional de alto impacto */}
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4.1rem] text-[#330505] font-normal leading-[1.08] tracking-tight text-balance">
                Tradição na advocacia. Estratégia para decisões que exigem segurança.
              </h2>

              {/* SUBTEXTO */}
              <p className="text-base sm:text-lg text-[#330505]/85 leading-relaxed max-w-xl font-normal">
                Há mais de 50 anos, o Said & Said Advogados Associados atua em Campinas e região com advocacia estratégica, técnica e responsável em diferentes áreas do Direito.
              </p>

              {/* BOTÕES DE AÇÃO */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#330505] text-[#FFFFFF] text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#330505]/90 transition-colors text-center inline-block"
                >
                  Fale com nosso escritório
                </a>
                <Link
                  href="/servicos"
                  className="border border-[#330505]/40 text-[#330505] text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#330505]/10 transition-colors text-center inline-block"
                >
                  Conheça nossas áreas de atuação
                </Link>
              </div>
            </div>

            {/* STRIP DE PROVA / INDICADORES NO RODAPÉ DO HERO */}
            <div className="pt-10 lg:pt-14 mt-8 border-t border-[#330505]/15 flex items-center flex-wrap gap-6 sm:gap-8">
              {/* Indicador de Anos */}
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#330505] tabular-nums leading-none">
                  +50
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#330505]/70 font-medium mt-1">
                  Anos de experiência
                </div>
              </div>

              {/* Divisor Vertical Fino */}
              <div className="hidden sm:block border-l border-[#330505]/20 h-10 mx-2" />

              {/* Indicador de Avaliações Google */}
              <div>
                <div className="flex text-[#330505] gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#330505]" />
                  ))}
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#330505]/70 font-medium">
                  {SITE_CONFIG.reviews.count} avaliações Google (Nota {SITE_CONFIG.reviews.rating})
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Fotografia com Card Flutuante "Compromisso Legal" */}
          <div className="lg:col-span-5 relative min-h-[440px] lg:min-h-full w-full bg-[#DDD9D6] border-t lg:border-t-0 lg:border-l border-[#330505]/15 overflow-hidden">
            {/* Imagem Fotográfica da Equipe */}
            <Image
              src="/assets/hero_legal_team.jpg"
              alt="Corpo jurídico do escritório Said & Said Advogados Associados em Campinas"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              referrerPolicy="no-referrer"
            />

            {/* Overlay sutil para transição estética */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Card Flutuante no Canto Inferior da Imagem */}
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 bg-[#1a0404]/85 backdrop-blur-md border border-[#DDD9D6]/20 p-6 sm:p-7 text-[#FFFFFF] shadow-2xl">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FFFFFF] mb-2">
                Compromisso Legal
              </h3>
              <p className="text-xs sm:text-sm text-[#DDD9D6] leading-relaxed font-normal">
                Atendimento pautado pela análise cuidadosa de cada situação, buscando compreender o contexto para orientar decisões de forma clara e responsável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE AUTORIDADE / PRIMEIRO IMPACTO */}
      <section className="py-16 md:py-20 bg-[#B4A99F] border-b border-[#DDD9D6]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal leading-tight">
                Experiência que atravessa gerações.
              </h2>
              <p className="text-base text-[#330505]/90 leading-relaxed max-w-2xl font-normal">
                O Said & Said Advogados Associados construiu sua trajetória ao longo de mais de cinco décadas de atuação jurídica, mantendo como princípios a responsabilidade, a competência técnica e a relação de confiança com seus clientes.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-3 gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 border-[#330505]/20">
              <div className="border-l-2 border-[#330505] pl-4">
                <div className="font-serif text-3xl md:text-4xl text-[#330505] font-semibold tabular-nums">
                  50+
                </div>
                <div className="text-xs text-[#330505]/80 uppercase tracking-wider mt-1 font-medium">
                  Anos de atuação
                </div>
              </div>

              <div className="border-l-2 border-[#330505] pl-4">
                <div className="font-serif text-2xl md:text-3xl text-[#330505] font-semibold">
                  Campinas
                </div>
                <div className="text-xs text-[#330505]/80 uppercase tracking-wider mt-1 font-medium">
                  Atuação local
                </div>
              </div>

              <div className="border-l-2 border-[#330505] pl-4">
                <div className="font-serif text-3xl md:text-4xl text-[#330505] font-semibold tabular-nums">
                  6
                </div>
                <div className="text-xs text-[#330505]/80 uppercase tracking-wider mt-1 font-medium">
                  Áreas principais de atuação
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO SOBRE O ESCRITÓRIO */}
      <section className="py-20 md:py-28 bg-[#BAAFA6] border-b border-[#DDD9D6]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block">
                O ESCRITÓRIO
              </span>

              <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal leading-tight text-balance">
                Uma advocacia construída sobre experiência, responsabilidade e confiança.
              </h2>

              <p className="text-base md:text-lg text-[#330505]/90 leading-relaxed font-normal">
                O Said & Said Advogados Associados é um tradicional escritório de advocacia em Campinas, com mais de 50 anos de atuação na área jurídica. Ao longo dessa trajetória, o escritório consolidou uma atuação pautada pela seriedade, responsabilidade e busca por soluções jurídicas adequadas às necessidades de cada cliente.
              </p>

              <p className="text-base md:text-lg text-[#330505]/90 leading-relaxed font-normal">
                Sob a liderança do Dr. José Pedro Said Junior, o escritório mantém uma atuação próxima e estratégica, especialmente na área criminal, acompanhando demandas desde fases iniciais de investigação até processos e recursos perante diferentes instâncias.
              </p>

              <div className="pt-2">
                <Link
                  href="/sobre"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#330505] border-b border-[#330505] pb-1 hover:text-[#330505]/70 transition-colors"
                >
                  <span>Conheça o escritório</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              {/* [INSERIR IMAGEM EM WEBP — FOTOGRAFIA REAL DO ESCRITÓRIO / ADVOGADO / AMBIENTE PROFISSIONAL] */}
              <div className="border border-[#DDD9D6] p-4 bg-[#B4A99F] shadow-sm">
                <div className="w-full h-[380px] bg-[#BAAFA6] border border-[#DDD9D6] flex flex-col justify-end p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#330505]/80 via-transparent to-transparent" />
                  <div className="relative z-10 text-[#FFFFFF]">
                    <span className="font-serif text-lg block">Said & Said Advogados</span>
                    <span className="text-xs text-[#DDD9D6]">
                      Advocacia consultiva e contenciosa especializada
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE DIFERENCIAIS */}
      <section className="py-20 md:py-24 bg-[#B4A99F] border-b border-[#DDD9D6]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal leading-tight text-balance">
              Uma atuação jurídica baseada em princípios que permanecem.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#BAAFA6] border border-[#DDD9D6] p-8">
              <span className="font-serif text-2xl text-[#330505] font-semibold mb-3 block">
                Experiência
              </span>
              <p className="text-sm text-[#330505]/80 leading-relaxed font-normal">
                Mais de cinco décadas de atuação jurídica e conhecimento acumulado ao longo de diferentes gerações.
              </p>
            </div>

            <div className="bg-[#BAAFA6] border border-[#DDD9D6] p-8">
              <span className="font-serif text-2xl text-[#330505] font-semibold mb-3 block">
                Estratégia
              </span>
              <p className="text-sm text-[#330505]/80 leading-relaxed font-normal">
                Análise cuidadosa de cada situação para compreender o contexto e estruturar a atuação jurídica adequada.
              </p>
            </div>

            <div className="bg-[#BAAFA6] border border-[#DDD9D6] p-8">
              <span className="font-serif text-2xl text-[#330505] font-semibold mb-3 block">
                Responsabilidade
              </span>
              <p className="text-sm text-[#330505]/80 leading-relaxed font-normal">
                Atuação pautada pela seriedade, ética profissional e responsabilidade na condução das demandas.
              </p>
            </div>

            <div className="bg-[#BAAFA6] border border-[#DDD9D6] p-8">
              <span className="font-serif text-2xl text-[#330505] font-semibold mb-3 block">
                Atendimento próximo
              </span>
              <p className="text-sm text-[#330505]/80 leading-relaxed font-normal">
                Comunicação clara e acompanhamento próximo para que o cliente compreenda cada etapa da sua demanda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ÁREAS DE ATUAÇÃO */}
      <section className="py-20 md:py-28 bg-[#BAAFA6] border-b border-[#DDD9D6]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#330505]/15">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-2">
                Especialidades
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal">
                Áreas de atuação
              </h2>
              <p className="text-sm md:text-base text-[#330505]/80 mt-2 leading-relaxed">
                Atuação jurídica em diferentes áreas do Direito, com abordagem técnica e estratégica para cada tipo de demanda.
              </p>
            </div>

            <Link
              href="/servicos"
              className="mt-6 md:mt-0 inline-flex items-center text-xs uppercase tracking-widest font-semibold text-[#330505] hover:text-[#330505]/70 transition-colors"
            >
              <span>Ver todas as áreas de atuação</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.slug}
                className="bg-[#B4A99F] border border-[#DDD9D6] p-8 flex flex-col justify-between hover:border-[#330505]/40 transition-colors duration-200"
              >
                <div>
                  <h3 className="font-serif text-2xl text-[#330505] font-normal mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-[#330505]/80 leading-relaxed mb-6 font-normal">
                    {srv.shortDesc}
                  </p>
                </div>

                <Link
                  href={srv.path}
                  className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#330505] pt-4 border-t border-[#DDD9D6] hover:text-[#330505]/70 transition-colors"
                >
                  <span>Conheça {srv.title}</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO DE DIREITO PENAL EM DESTAQUE */}
      <section className="py-20 md:py-24 bg-[#330505] text-[#FFFFFF] border-b border-[#330505]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C0B6AE] font-semibold block">
                Destaque Especializado
              </span>

              <h2 className="font-serif text-3xl md:text-4xl text-[#FFFFFF] font-normal leading-tight text-balance">
                Advocacia criminal em Campinas com experiência e atuação estratégica
              </h2>

              <p className="text-base text-[#DDD9D6] leading-relaxed font-normal">
                Com mais de 50 anos de atuação na área penal, o Said & Said Advogados Associados acompanha casos criminais desde fases investigativas até ações penais e recursos perante instâncias superiores, sempre com atenção à estratégia jurídica e às particularidades de cada situação.
              </p>

              <div className="pt-2">
                <Link
                  href="/servicos/direito-penal"
                  className="bg-[#FFFFFF] text-[#330505] text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#DDD9D6] transition-colors inline-block"
                >
                  Conheça nossa atuação criminal
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              {/* [INSERIR IMAGEM EM WEBP — FOTOGRAFIA EDITORIAL RELACIONADA À ATUAÇÃO JURÍDICA CRIMINAL] */}
              <div className="border border-[#DDD9D6]/30 p-4 bg-[#330505]/50">
                <div className="w-full h-[320px] bg-[#B4A99F]/20 border border-[#DDD9D6]/20 flex flex-col justify-end p-6">
                  <span className="font-serif text-xl text-[#FFFFFF] block">
                    Defesa Criminal Estratégica
                  </span>
                  <span className="text-xs text-[#C0B6AE] mt-1">
                    Atuação contínua em inquéritos policiais, ações penais e cortes superiores
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEÇÃO DE PROVA SOCIAL */}
      <section className="py-20 bg-[#BAAFA6] border-b border-[#DDD9D6]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="bg-[#B4A99F] border border-[#DDD9D6] p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#330505]/20 pb-6 lg:pb-0 lg:pr-8">
                <div className="flex items-center space-x-2 text-[#330505] mb-2">
                  <span className="font-serif text-5xl font-semibold">{SITE_CONFIG.reviews.rating}</span>
                  <div className="flex text-[#330505]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="text-xs uppercase tracking-wider text-[#330505]/80 font-medium">
                  {SITE_CONFIG.reviews.count} avaliações públicas
                </div>
              </div>

              <div className="lg:col-span-8 space-y-3">
                <h3 className="font-serif text-2xl md:text-3xl text-[#330505] font-normal">
                  A confiança de quem já esteve conosco
                </h3>
                <p className="text-sm md:text-base text-[#330505]/90 leading-relaxed font-normal">
                  {SITE_CONFIG.reviews.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SEÇÃO SOBRE O DR. JOSÉ PEDRO SAID JUNIOR */}
      <section className="py-20 md:py-24 bg-[#B4A99F] border-b border-[#DDD9D6]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              {/* [INSERIR FOTO PROFISSIONAL REAL DO DR. JOSÉ PEDRO SAID JUNIOR EM WEBP] */}
              <div className="border border-[#DDD9D6] p-4 bg-[#BAAFA6]">
                <div className="w-full h-[400px] bg-[#B4A99F] border border-[#DDD9D6] flex flex-col justify-end p-6">
                  <div className="font-serif text-xl text-[#330505]">
                    {SITE_CONFIG.leadPartner}
                  </div>
                  <div className="text-xs text-[#330505]/80 uppercase tracking-wider mt-0.5">
                    Advogado Titular
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block">
                Liderança da Banca
              </span>

              <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal leading-tight text-balance">
                Experiência jurídica construída ao longo de décadas.
              </h2>

              <p className="text-base md:text-lg text-[#330505]/90 leading-relaxed font-normal">
                Sob a liderança do Dr. José Pedro Said Junior, o Said & Said Advogados Associados mantém uma atuação marcada pela experiência na advocacia criminal e pelo compromisso com uma condução técnica, responsável e estratégica das demandas de seus clientes.
              </p>

              <div className="pt-2">
                <Link
                  href="/sobre"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#330505] border-b border-[#330505] pb-1 hover:text-[#330505]/70 transition-colors"
                >
                  <span>Conheça a trajetória institucional</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-20 md:py-28 bg-[#BAAFA6] border-b border-[#DDD9D6]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#330505]/70 font-semibold block mb-2">
              Dúvidas Institucionais
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#330505] font-normal">
              Perguntas frequentes
            </h2>
          </div>

          <div className="max-w-4xl">
            <FAQAccordion items={HOME_FAQ} enableSchema={true} />
          </div>
        </div>
      </section>

      {/* 10. CTA FINAL DA HOME */}
      <section className="py-20 md:py-28 bg-[#330505] text-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-normal leading-snug text-balance">
              Uma questão jurídica importante merece uma análise responsável.
            </h2>
            <p className="text-base sm:text-lg text-[#DDD9D6] leading-relaxed max-w-2xl mx-auto font-normal">
              Entre em contato com o Said & Said Advogados Associados e apresente sua demanda para que o escritório possa orientar sobre os próximos passos.
            </p>
            <div className="pt-4">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFFFFF] text-[#330505] text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#DDD9D6] transition-colors inline-block"
              >
                Fale com o escritório
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
