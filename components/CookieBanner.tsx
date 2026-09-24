"use client";

import React, { useSyncExternalStore } from "react";
import Link from "next/link";

const STORAGE_KEY = "said_said_cookie_consent";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("cookie-consent-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("cookie-consent-change", callback);
  };
}

function getSnapshot() {
  if (typeof window === "undefined") {
    return "granted";
  }
  return localStorage.getItem(STORAGE_KEY) || "pending";
}

function getServerSnapshot() {
  return "granted";
}

export function CookieBanner() {
  const status = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "granted");
    window.dispatchEvent(new Event("cookie-consent-change"));
  };

  if (status !== "pending") {
    return null;
  }

  return (
    <aside
      aria-label="Consentimento de Cookies e Privacidade"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#330505] text-[#FFFFFF] border-t border-[#DDD9D6]/20 p-4 md:p-6 shadow-2xl"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-xs md:text-sm text-[#DDD9D6] leading-relaxed max-w-4xl">
          Este portal utiliza cookies estritamente necessários para aprimorar sua experiência e garantir a segurança da navegação, em conformidade com a Lei Geral de Proteção de Dados (LGPD). Ao continuar a navegar, você concorda com nossas políticas institucionais.
        </div>
        <div className="flex items-center space-x-4 flex-shrink-0">
          <Link
            href="/politica-de-cookies"
            className="text-xs text-[#C0B6AE] hover:text-[#FFFFFF] underline transition-colors"
          >
            Preferências
          </Link>
          <button
            onClick={handleAccept}
            className="bg-[#FFFFFF] text-[#330505] text-xs font-semibold uppercase tracking-wider px-6 py-2.5 hover:bg-[#DDD9D6] transition-colors"
          >
            Aceitar e Continuar
          </button>
        </div>
      </div>
    </aside>
  );
}
