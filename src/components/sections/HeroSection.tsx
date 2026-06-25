"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const ArchitectureScene = dynamic(
  () =>
    import("@/components/three/ArchitectureScene").then(
      (m) => m.ArchitectureScene,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse rounded-2xl bg-white/5" />
    ),
  },
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0f12] via-[#141820] to-[#0d0f12]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,98,0.08)_0%,_transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">
            Arquitetura & Urbanismo
          </p>
          <h1 className="font-display text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
            Espaços que{" "}
            <span className="font-semibold text-[#c9a962]">contam histórias</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400">
            {siteConfig.slogan}. {siteConfig.tagline}.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            {siteConfig.professional} — {siteConfig.title} ·{" "}
            <span className="text-[#c9a962]">{siteConfig.cauRegistro}</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 rounded-full bg-[#c9a962] px-8 py-3.5 text-sm font-semibold text-[#0d0f12] transition hover:bg-[#d4b872]"
            >
              Solicitar orçamento
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm text-white transition hover:border-[#c9a962] hover:text-[#c9a962]"
            >
              Ver projetos
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-2 text-sm text-zinc-500">
            <MapPin size={16} className="text-[#c9a962]" />
            {siteConfig.region}
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[560px]">
          <ArchitectureScene className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
