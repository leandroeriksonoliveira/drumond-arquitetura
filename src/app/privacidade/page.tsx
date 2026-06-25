import type { Metadata } from "next";
import Link from "next/link";
import { privacyLastUpdated, privacySections } from "@/lib/privacy-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de Privacidade e Cookies de ${siteConfig.name} — conformidade LGPD.`,
};

function renderContent(text: string) {
  return text.split("\n\n").map((paragraph, i) => {
    if (paragraph.startsWith("- ")) {
      const items = paragraph.split("\n").filter(Boolean);
      return (
        <ul key={i} className="list-disc space-y-2 pl-6">
          {items.map((item, j) => (
            <li key={j}>{item.replace(/^- /, "")}</li>
          ))}
        </ul>
      );
    }
    if (paragraph.includes("**")) {
      const parts = paragraph.split("\n");
      return (
        <div key={i} className="space-y-1">
          {parts.map((line, j) => (
            <p key={j} dangerouslySetInnerHTML={{
              __html: line
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\|(.*?)\|/g, ""),
            }} />
          ))}
        </div>
      );
    }
    return <p key={i}>{paragraph}</p>;
  });
}

export default function PrivacidadePage() {
  return (
    <div className="pt-24">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">
          Legal
        </p>
        <h1 className="mt-4 font-display text-4xl font-light text-white">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-sm text-zinc-500">
          Última atualização: {privacyLastUpdated}
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          Controlador: {siteConfig.professional} — {siteConfig.cauRegistro}
        </p>

        <div className="prose-legal mt-12">
          {privacySections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.title}</h2>
              {renderContent(section.content)}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#6b9bd1]/30 bg-[#6b9bd1]/5 p-6">
          <p className="text-sm text-zinc-300">
            Para exercer seus direitos previstos na LGPD (Art. 18), entre em
            contato:
          </p>
          <a
            href={`mailto:${siteConfig.privacyEmail}?subject=LGPD%20-%20Exercício%20de%20Direitos`}
            className="mt-2 inline-block text-[#6b9bd1] hover:underline"
          >
            {siteConfig.privacyEmail}
          </a>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          <Link href="/contato" className="text-[#c9a962] hover:underline">
            ← Voltar ao contato
          </Link>
        </p>
      </article>
    </div>
  );
}
