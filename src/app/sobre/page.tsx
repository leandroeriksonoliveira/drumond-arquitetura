import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça ${siteConfig.professional}, ${siteConfig.title} em Volta Redonda-RJ. Formação, experiência e filosofia de trabalho.`,
};

export default function SobrePage() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">
          Quem somos
        </p>
        <h1 className="mt-4 font-display text-4xl font-light text-white md:text-5xl">
          {siteConfig.professional}
        </h1>
        <p className="mt-2 text-lg text-[#c9a962]">
          {siteConfig.title} · {siteConfig.cauRegistro}
        </p>

        <div className="prose-legal mt-12 space-y-6">
          <p className="text-lg leading-relaxed text-zinc-300">
            Seja muito bem-vindo(a)! Sou Paloma Drumond, natural de Volta
            Redonda-RJ, {siteConfig.title.toLowerCase()}, formada pelo Centro
            Universitário Geraldo Di Biase (UGB-FERP) em 2017.
          </p>

          <p>
            Atuo na elaboração de projetos residenciais, comerciais e religiosos
            — construção nova, reforma ou legalização — atendendo as cidades de
            Volta Redonda, Barra Mansa e região do Médio Paraíba. Em alguns
            casos, também atendo em outros estados.
          </p>

          <blockquote className="border-l-2 border-[#c9a962] pl-6 italic text-zinc-300">
            &ldquo;Acredito que a Arquitetura vai além de desenhos técnicos,
            ela é a solução para você que tem um sonho, e deseja
            realizá-lo.&rdquo;
          </blockquote>

          <h2 className="font-display text-2xl text-white">Formação</h2>
          <p>{siteConfig.formation}</p>

          <h2 className="font-display text-2xl text-white">Área de atuação</h2>
          <p>{siteConfig.region}. Atendimento presencial sob agendamento.</p>

          <h2 className="font-display text-2xl text-white">Um pouco sobre mim</h2>
          <ul className="list-disc space-y-2 pl-6 text-zinc-400">
            <li>Sou muito família.</li>
            <li>Gosto de animais e plantas.</li>
            <li>Não tomo café, e não dispenso um bom vinho!</li>
            <li>Amo chocolate — amo comer, na verdade!</li>
            <li>Gosto muito de viajar.</li>
          </ul>

          <h2 className="font-display text-2xl text-white">
            Identificação profissional
          </h2>
          <p>
            <strong>{siteConfig.professional}</strong> — {siteConfig.title}
            <br />
            Registro: {siteConfig.cauRegistro}
            <br />
            {siteConfig.legalEntity}
          </p>
        </div>
      </section>
    </div>
  );
}
