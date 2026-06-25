import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Projetos residenciais, comerciais e religiosos. Construção nova, reforma e legalização em Volta Redonda e região.",
};

export default function ServicosPage() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">
          Serviços
        </p>
        <h1 className="mt-4 font-display text-4xl font-light text-white md:text-5xl">
          O que fazemos
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Descrição objetiva dos serviços oferecidos por {siteConfig.professional},{" "}
          {siteConfig.title}. Orçamentos personalizados sob consulta.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl border border-white/5 bg-[#141820]/50 p-8"
            >
              <h2 className="font-display text-2xl text-white">{service.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#c9a962]/20 bg-[#c9a962]/5 p-8 text-center">
          <p className="text-zinc-300">
            Cada projeto é único. Solicite um orçamento personalizado.
          </p>
          <Link
            href="/contato"
            className="mt-6 inline-block rounded-full bg-[#c9a962] px-8 py-3 text-sm font-semibold text-[#0d0f12] hover:bg-[#d4b872]"
          >
            Solicitar orçamento
          </Link>
        </div>
      </section>
    </div>
  );
}
