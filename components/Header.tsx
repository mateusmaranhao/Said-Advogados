"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { SERVICES_LIST, SITE_CONFIG } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#BAAFA6] text-[#330505] border-b border-[#330505]/15 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand Wordmark with Monogram Box matching reference */}
        <Link
          href="/"
          onClick={closeMenus}
          className="flex items-center space-x-3 text-left focus:outline-none group"
          aria-label="Said & Said Advogados Associados, Página Inicial"
        >
          <div className="w-9 h-9 bg-[#330505] text-[#FFFFFF] flex items-center justify-center font-serif text-lg font-bold flex-shrink-0 transition-transform group-hover:scale-105">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#330505] group-hover:text-[#330505]/80 transition-colors">
              Said & Said
            </span>
            <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#330505]/70 font-medium">
              Advogados Associados
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center space-x-10 text-xs tracking-widest uppercase font-medium"
          aria-label="Navegação Principal"
        >
          <Link
            href="/"
            onClick={closeMenus}
            className={`py-2 transition-colors border-b-2 ${
              pathname === "/"
                ? "text-[#330505] border-[#330505] font-semibold"
                : "text-[#330505]/80 border-transparent hover:text-[#330505]"
            }`}
          >
            Início
          </Link>

          <Link
            href="/sobre"
            onClick={closeMenus}
            className={`py-2 transition-colors border-b-2 ${
              pathname === "/sobre"
                ? "text-[#330505] border-[#330505] font-semibold"
                : "text-[#330505]/80 border-transparent hover:text-[#330505]"
            }`}
          >
            O Escritório
          </Link>

          {/* Simple Dropdown for Services */}
          <div
            ref={dropdownRef}
            className="relative py-2"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center space-x-1 uppercase tracking-widest text-xs font-medium transition-colors border-b-2 ${
                pathname.startsWith("/servicos")
                  ? "text-[#330505] border-[#330505] font-semibold"
                  : "text-[#330505]/80 border-transparent hover:text-[#330505]"
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
            >
              <span className="uppercase">Serviços</span>
              <ChevronDown
                className={`w-3.5 h-3.5 ml-0.5 text-[#330505]/70 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesDropdownOpen && (
              <div
                className="absolute top-full left-0 w-72 bg-[#BAAFA6] border border-[#330505]/20 shadow-2xl py-2 mt-1 z-50 text-left focus:outline-none"
                role="menu"
                aria-orientation="vertical"
              >
                {SERVICES_LIST.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.path}
                    onClick={closeMenus}
                    role="menuitem"
                    className="block px-5 py-2.5 text-xs uppercase tracking-wider text-[#330505]/90 hover:text-[#FFFFFF] hover:bg-[#330505] transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
                <div className="border-t border-[#330505]/15 my-1" />
                <Link
                  href="/servicos"
                  onClick={closeMenus}
                  role="menuitem"
                  className="block px-5 py-2.5 text-xs uppercase tracking-wider text-[#330505] font-bold hover:bg-[#330505] hover:text-[#FFFFFF] transition-colors"
                >
                  Todos os Serviços
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contato"
            onClick={closeMenus}
            className={`py-2 transition-colors border-b-2 ${
              pathname === "/contato"
                ? "text-[#330505] border-[#330505] font-semibold"
                : "text-[#330505]/80 border-transparent hover:text-[#330505]"
            }`}
          >
            Contato
          </Link>
        </nav>

        {/* Desktop Primary Action Button matching reference */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contato"
            onClick={closeMenus}
            className="border border-[#330505] text-[#330505] text-xs font-semibold uppercase tracking-widest px-6 py-2.5 hover:bg-[#330505] hover:text-[#FFFFFF] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#330505]"
          >
            Agendar Consulta
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu principal" : "Abrir menu principal"}
            className="p-2 text-[#330505] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#BAAFA6] border-t border-[#330505]/20 px-6 py-6 flex flex-col space-y-4">
          <Link
            href="/"
            onClick={closeMenus}
            className="text-left text-sm uppercase tracking-wider py-2 text-[#330505] hover:font-bold"
          >
            Início
          </Link>

          <Link
            href="/sobre"
            onClick={closeMenus}
            className="text-left text-sm uppercase tracking-wider py-2 text-[#330505] hover:font-bold"
          >
            O Escritório
          </Link>

          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full text-left text-sm uppercase tracking-wider py-2 text-[#330505] hover:font-bold"
              aria-expanded={mobileServicesOpen}
            >
              <span className="uppercase">Serviços</span>
              <ChevronDown
                className={`w-4 h-4 transform transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 py-2 flex flex-col space-y-2 border-l border-[#330505]/20 mt-1">
                {SERVICES_LIST.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.path}
                    onClick={closeMenus}
                    className="text-left text-xs uppercase tracking-wider text-[#330505]/80 py-1.5 hover:text-[#330505] hover:font-semibold"
                  >
                    {service.title}
                  </Link>
                ))}
                <Link
                  href="/servicos"
                  onClick={closeMenus}
                  className="text-left text-xs uppercase tracking-wider text-[#330505] font-bold py-2 pt-3 border-t border-[#330505]/10"
                >
                  Ver Todos os Serviços
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contato"
            onClick={closeMenus}
            className="text-left text-sm uppercase tracking-wider py-2 text-[#330505] hover:font-bold"
          >
            Contato
          </Link>

          <div className="pt-4 border-t border-[#330505]/20">
            <Link
              href="/contato"
              onClick={closeMenus}
              className="block w-full border border-[#330505] text-[#330505] text-center text-xs font-semibold uppercase tracking-widest py-3 hover:bg-[#330505] hover:text-[#FFFFFF] transition-colors"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
