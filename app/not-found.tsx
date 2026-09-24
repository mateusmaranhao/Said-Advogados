import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-32 bg-[#330505] text-[#FFFFFF] text-center min-h-[60vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 space-y-6">
        <span className="font-mono text-xs text-[#C0B6AE] uppercase tracking-widest block">
          Erro 404 · Conteúdo Não Localizado
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl text-[#FFFFFF] font-normal">
          Página não encontrada
        </h1>

        <p className="text-sm md:text-base text-[#DDD9D6] leading-relaxed max-w-md mx-auto">
          A página que você procura não está disponível ou foi movida.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-[#FFFFFF] text-[#330505] text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#DDD9D6] transition-colors text-center inline-block"
          >
            Voltar ao início
          </Link>
          <Link
            href="/servicos"
            className="border border-[#DDD9D6]/40 text-[#FFFFFF] text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#FFFFFF]/10 transition-colors text-center inline-block"
          >
            Conhecer nossas áreas de atuação
          </Link>
        </div>
      </div>
    </div>
  );
}
