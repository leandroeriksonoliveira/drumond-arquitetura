"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;

    setState("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      projectType: data.get("projectType"),
      message: data.get("message"),
      consent: true,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Falha no envio");
      setState("success");
      form.reset();
      setConsent(false);
    } catch {
      const text = encodeURIComponent(
        `Olá! Meu nome é ${payload.name}. Tipo de projeto: ${payload.projectType}. ${payload.message}`,
      );
      window.open(
        `https://wa.me/${siteConfig.whatsapp}?text=${text}`,
        "_blank",
      );
      setState("success");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-[#c9a962]/30 bg-[#c9a962]/5 p-8 text-center">
        <p className="text-lg font-medium text-white">
          Mensagem enviada com sucesso!
        </p>
        <p className="mt-2 text-sm text-zinc-400">
          Entraremos em contato em breve. Você também pode falar conosco pelo
          WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 text-sm text-[#c9a962] underline"
        >
          Enviar nova mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-zinc-400">
            Nome completo *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#c9a962]"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-zinc-400">
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#c9a962]"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm text-zinc-400">
            Telefone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#c9a962]"
          />
        </div>
        <div>
          <label
            htmlFor="projectType"
            className="mb-2 block text-sm text-zinc-400"
          >
            Tipo de projeto *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#c9a962]"
            defaultValue=""
          >
            <option value="" disabled>
              Selecione
            </option>
            <option value="Residencial">Residencial</option>
            <option value="Comercial">Comercial</option>
            <option value="Religioso">Religioso</option>
            <option value="Reforma">Reforma</option>
            <option value="Legalização">Legalização</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-zinc-400">
          Descreva seu projeto *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#c9a962]"
          placeholder="Conte-nos sobre o que você precisa..."
        />
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className="mt-1 h-4 w-4 accent-[#c9a962]"
          />
          <span className="text-sm leading-relaxed text-zinc-400">
            Li e concordo com a{" "}
            <Link href="/privacidade" className="text-[#c9a962] underline">
              Política de Privacidade
            </Link>
            . Autorizo o tratamento dos meus dados pessoais para{" "}
            <strong className="text-zinc-300">
              elaboração de orçamento de projeto arquitetônico
            </strong>
            , com base legal na execução de procedimentos preliminares
            relacionados a contrato (Art. 7º, V, LGPD). *
          </span>
        </label>
      </div>

      <p className="text-xs text-zinc-500">
        Controlador: {siteConfig.professional} ({siteConfig.title}). Canal para
        exercício de direitos (acesso, correção, exclusão):{" "}
        <a
          href={`mailto:${siteConfig.privacyEmail}?subject=LGPD`}
          className="text-[#6b9bd1]"
        >
          {siteConfig.privacyEmail}
        </a>
      </p>

      <button
        type="submit"
        disabled={!consent || state === "submitting"}
        className="w-full rounded-full bg-[#c9a962] py-4 text-sm font-semibold text-[#0d0f12] transition hover:bg-[#d4b872] disabled:cursor-not-allowed disabled:opacity-50 md:w-auto md:px-12"
      >
        {state === "submitting" ? "Enviando..." : "Solicitar orçamento"}
      </button>
    </form>
  );
}
