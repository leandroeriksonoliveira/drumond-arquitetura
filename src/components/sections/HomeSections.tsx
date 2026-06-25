import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { ArchitectPhoto } from "@/components/ui/ArchitectPhoto";

export { HeroSection } from "./HeroSection";

export function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">
            Serviços
          </p>
          <h2 className="mt-4 font-display text-3xl font-light text-white md:text-4xl">
            Do conceito à execução
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl border border-white/5 bg-[#141820]/50 p-8 transition hover:border-[#c9a962]/30 hover:bg-[#141820]"
            >
              <h3 className="font-display text-xl text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/servicos"
            className="text-sm text-[#c9a962] underline-offset-4 hover:underline"
          >
            Conheça todos os serviços →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ProjectsPreview() {
  return (
    <section className="border-y border-white/5 bg-[#0a0c0f] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">
              Portfólio
            </p>
            <h2 className="mt-4 font-display text-3xl font-light text-white md:text-4xl">
              Projetos em destaque
            </h2>
          </div>
          <Link
            href="/projetos"
            className="text-sm text-[#c9a962] underline-offset-4 hover:underline"
          >
            Ver galeria completa →
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-white/5 bg-[#141820]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141820] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-[#c9a962]">
                  {project.category} · {project.location}
                </p>
                <h3 className="mt-2 font-display text-xl text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
                <p className="mt-3 text-xs text-zinc-600">{project.rrt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <ArchitectPhoto className="aspect-[4/5] w-full" priority />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">
            Sobre
          </p>
          <h2 className="mt-4 font-display text-3xl font-light text-white md:text-4xl">
            {siteConfig.professional}
          </h2>
          <p className="mt-2 text-[#c9a962]">{siteConfig.title}</p>
          <p className="mt-6 leading-relaxed text-zinc-400">
            Natural de Volta Redonda-RJ, formada pelo {siteConfig.formation}.
            Atuo na elaboração de projetos residenciais, comerciais e religiosos
            — construção nova, reforma e legalização.
          </p>
          <blockquote className="mt-6 border-l-2 border-[#c9a962] pl-4 italic text-zinc-300">
            &ldquo;Acredito que a Arquitetura vai além de desenhos técnicos — ela
            é a solução para quem tem um sonho e deseja realizá-lo.&rdquo;
          </blockquote>
          <Link
            href="/sobre"
            className="mt-8 inline-block text-sm text-[#c9a962] underline-offset-4 hover:underline"
          >
            Conheça minha história →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-3xl font-light text-white md:text-4xl">
          Vamos desenvolver seu projeto juntos?
        </h2>
        <p className="mt-4 text-zinc-400">
          Entre em contato para um orçamento personalizado. Atendimento em{" "}
          {siteConfig.region}.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contato"
            className="rounded-full bg-[#c9a962] px-8 py-3.5 text-sm font-semibold text-[#0d0f12] hover:bg-[#d4b872]"
          >
            Solicitar orçamento
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-8 py-3.5 text-sm text-white hover:border-[#c9a962]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
