export const siteConfig = {
  name: "Drumond Arquitetura",
  professional: "Paloma Drumond",
  title: "Arquiteta e Urbanista",
  /** Atualizar com o número oficial CAU/RJ (Res. CAU/BR 75/2014) */
  cauRegistro: process.env.NEXT_PUBLIC_CAU_REGISTRO ?? "CAU/RJ A00000-0",
  slogan:
    "Projetos personalizados com planejamento financeiro transparente",
  tagline:
    "Arquitetura que transforma sonhos em espaços — Volta Redonda, Barra Mansa e região",
  description:
    "Escritório de arquitetura e urbanismo em Volta Redonda-RJ. Projetos residenciais, comerciais e religiosos — construção nova, reforma e legalização.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://drumondarquitetura.com.br",
  locale: "pt-BR",
  region: "Volta Redonda, Barra Mansa e região — RJ",
  formation: "Centro Universitário Geraldo Di Biase (UGB-FERP), 2017",
  email: "contato.drumondarquitetura@gmail.com",
  privacyEmail: "contato.drumondarquitetura@gmail.com",
  whatsapp: "5524974039963",
  whatsappDisplay: "(24) 97403-9963",
  instagram: "https://www.instagram.com/drumond_arquitetura",
  instagramHandle: "@drumond_arquitetura",
  address: {
    city: "Volta Redonda",
    state: "RJ",
    note: "Atendimento presencial sob agendamento",
  },
  legalEntity:
    "Paloma Drumond — Arquiteta e Urbanista (pessoa física, registro CAU)",
} as const;
