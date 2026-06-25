"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "drumond-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, "essential-only");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-white/10 bg-[#141820]/95 p-6 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-zinc-400">
          Utilizamos cookies essenciais para o funcionamento do site. Cookies de
          terceiros (Google, Meta via WhatsApp/Instagram) podem ser aplicados ao
          acessar links externos. Consulte nossa{" "}
          <Link href="/privacidade#cookies" className="text-[#c9a962] underline">
            Política de Cookies
          </Link>{" "}
          e{" "}
          <Link href="/privacidade" className="text-[#c9a962] underline">
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={reject}
            className="rounded-full border border-zinc-600 px-4 py-2 text-sm text-zinc-300 hover:border-zinc-400"
          >
            Apenas essenciais
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-full bg-[#c9a962] px-4 py-2 text-sm font-medium text-[#0d0f12] hover:bg-[#d4b872]"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
