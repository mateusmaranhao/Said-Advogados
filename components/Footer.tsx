import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { SITE_CONFIG, SERVICES_LIST } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#330505] text-[#FFFFFF] pt-16 pb-12 border-t border-[#330505]/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Identity & Heritage */}
          <div>
            <div className="mb-4">
              <span className="font-serif text-2xl font-bold uppercase tracking-wider text-[#FFFFFF] block">
                {SITE_CONFIG.shortName}
              </span>
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C0B6AE]">
                {SITE_CONFIG.legalRole}
              </span>
            </div>
            <p className="text-xs text-[#DDD9D6] leading-relaxed mb-6 font-normal">
              Mais de cinco décadas de advocacia artesanal, integridade ética e alta precisão técnica em Campinas e nos principais tribunais do país.
            </p>
            <div className="text-xs text-[#C0B6AE] font-mono">
              OAB/SP 1.284 · Fundado em 1974
            </div>
          </div>

          {/* Column 2: Áreas de Atuação */}
          <div>
            <p className="font-serif text-base font-semibold uppercase tracking-wider text-[#FFFFFF] mb-6 pb-2 border-b border-[#DDD9D6]/20">
              Áreas de Atuação
            </p>
            <ul className="space-y-3 text-xs uppercase tracking-wider text-[#C0B6AE]">
              {SERVICES_LIST.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.path}
                    className="hover:text-[#FFFFFF] transition-colors inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sede Campinas */}
          <div>
            <p className="font-serif text-base font-semibold uppercase tracking-wider text-[#FFFFFF] mb-6 pb-2 border-b border-[#DDD9D6]/20">
              Sede Campinas
            </p>
            <div className="space-y-4 text-xs text-[#DDD9D6] leading-relaxed">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C0B6AE] flex-shrink-0 mt-0.5" />
                <span>
                  {SITE_CONFIG.address.building}
                  <br />
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.neighborhood}
                  <br />
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}, CEP {SITE_CONFIG.address.postalCode}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C0B6AE] flex-shrink-0" />
                <span>{SITE_CONFIG.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#C0B6AE] flex-shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#C0B6AE] flex-shrink-0" />
                <span>{SITE_CONFIG.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Atendimento e Redes */}
          <div>
            <p className="font-serif text-base font-semibold uppercase tracking-wider text-[#FFFFFF] mb-6 pb-2 border-b border-[#DDD9D6]/20">
              Atendimento Jurídico
            </p>
            <p className="text-xs text-[#DDD9D6] leading-relaxed mb-6">
              Consultas agendadas previamente com os sócios responsáveis, resguardando o sigilo indispensável à advocacia consultiva e contenciosa.
            </p>

            <Link
              href="/contato"
              className="block w-full text-center bg-transparent border border-[#DDD9D6] text-[#FFFFFF] text-xs uppercase tracking-widest py-3 px-4 hover:bg-[#FFFFFF] hover:text-[#330505] transition-colors mb-6"
            >
              Fale Conosco
            </Link>

            <div className="pt-2 border-t border-[#DDD9D6]/15">
              <span className="text-[11px] uppercase tracking-wider text-[#C0B6AE] block mb-2">
                Canais Institucionais:
              </span>
              <div className="flex space-x-4 text-xs text-[#DDD9D6]">
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-8 border-t border-[#DDD9D6]/15 flex flex-col md:flex-row justify-between items-center text-xs text-[#C0B6AE] space-y-4 md:space-y-0">
          <div>
            © {SITE_CONFIG.foundationYear} Said & Said Advogados Associados. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/politica-de-privacidade"
              className="hover:text-[#FFFFFF] transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="hover:text-[#FFFFFF] transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              href="/politica-de-cookies"
              className="hover:text-[#FFFFFF] transition-colors"
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
