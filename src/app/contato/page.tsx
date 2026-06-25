import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contato",
  description: `Entre em contato com ${siteConfig.professional} para orçamento de projeto arquitetônico em Volta Redonda e região.`,
};

export default function ContatoPage() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">
              Contato
            </p>
            <h1 className="mt-4 font-display text-4xl font-light text-white md:text-5xl">
              Vamos conversar?
            </h1>
            <p className="mt-4 text-zinc-400">
              Preencha o formulário para solicitar orçamento. Seus dados serão
              tratados conforme nossa Política de Privacidade.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <Phone className="mt-0.5 shrink-0 text-[#c9a962]" size={20} />
                <div>
                  <p className="text-sm font-medium text-white">WhatsApp</p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-[#c9a962]"
                  >
                    {siteConfig.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="mt-0.5 shrink-0 text-[#c9a962]" size={20} />
                <div>
                  <p className="text-sm font-medium text-white">E-mail</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-zinc-400 hover:text-[#c9a962]"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 shrink-0 text-[#c9a962]" size={20} />
                <div>
                  <p className="text-sm font-medium text-white">Localização</p>
                  <p className="text-zinc-400">
                    {siteConfig.address.city}/{siteConfig.address.state}
                    <br />
                    {siteConfig.address.note}
                    <br />
                    Atendimento: {siteConfig.region}
                  </p>
                </div>
              </li>
            </ul>

            <p className="mt-8 text-sm text-zinc-500">
              {siteConfig.professional} — {siteConfig.title}
              <br />
              {siteConfig.cauRegistro}
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#141820]/50 p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
