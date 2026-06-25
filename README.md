# Drumond Arquitetura — Site Institucional

Site institucional da **Arq. Paloma Drumond** — Arquiteta e Urbanista (Volta Redonda / Barra Mansa — RJ).

## Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- React Three Fiber (visualização 3D)
- Framer Motion
- Deploy: Vercel

## Conformidade

O site foi desenvolvido para atender:

- **Res. CAU/BR 75/2014** — identificação profissional, registro CAU, RRT em projetos
- **LGPD (Lei 13.709/2018)** — política de privacidade, consentimento no formulário, canal de direitos
- **CDC / Marco Civil** — transparência de contato e serviços

## Configuração

```bash
cp .env.example .env.local
```

Edite `.env.local`:

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_CAU_REGISTRO` | Número CAU/RJ oficial (ex: `CAU/RJ A12345-6`) |
| `NEXT_PUBLIC_SITE_URL` | URL de produção (ex: `https://drumondarquitetura.vercel.app`) |
| `CONTACT_WEBHOOK_URL` | (Opcional) Webhook para receber formulários |

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy Vercel

```bash
npx vercel
npx vercel --prod
```

## Antes de publicar

1. Atualizar `NEXT_PUBLIC_CAU_REGISTRO` com o número real do CAU/RJ
2. Atualizar números de RRT nos projetos em `src/data/projects.ts`
3. Substituir imagens ilustrativas por fotos reais dos projetos
4. Configurar domínio `drumondarquitetura.com.br` na Vercel
