import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0a0c0f]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-white">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            {siteConfig.professional} — {siteConfig.title}
          </p>
          <p className="mt-1 text-sm font-medium text-[#c9a962]">
            {siteConfig.cauRegistro}
          </p>
          <p className="mt-4 text-xs leading-relaxed text-zinc-500">
            {siteConfig.legalEntity}. {siteConfig.address.note} —{" "}
            {siteConfig.address.city}/{siteConfig.address.state}.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Contato
          </p>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-[#c9a962]"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c9a962]"
              >
                WhatsApp {siteConfig.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c9a962]"
              >
                {siteConfig.instagramHandle}
              </a>
            </li>
            <li className="pt-2">
              <a
                href={`mailto:${siteConfig.privacyEmail}?subject=LGPD%20-%20Exercício%20de%20Direitos`}
                className="text-[#6b9bd1] hover:underline"
              >
                Canal LGPD — exercício de direitos
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Legal
          </p>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              <Link href="/privacidade" className="hover:text-[#c9a962]">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/privacidade#cookies" className="hover:text-[#c9a962]">
                Política de Cookies
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-[#c9a962]">
                Solicitar orçamento
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-6 text-center text-xs text-zinc-600">
        <p>
          © {year} {siteConfig.professional} — {siteConfig.title}. Todos os
          direitos reservados.
        </p>
        <p className="mt-1">
          Projetos divulgados com indicação de Responsabilidade Técnica (RRT)
          conforme Res. CAU/BR 75/2014.
        </p>
      </div>
    </footer>
  );
}
