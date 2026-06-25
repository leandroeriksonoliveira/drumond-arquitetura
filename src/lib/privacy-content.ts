import { siteConfig } from "@/lib/site-config";

export const privacySections = [
  {
    id: "introducao",
    title: "1. Introdução",
    content: `Esta Política de Privacidade descreve como ${siteConfig.professional}, ${siteConfig.title}, inscrita no ${siteConfig.cauRegistro}, atuando sob a marca ${siteConfig.name} ("nós", "controlador"), trata dados pessoais coletados por meio deste site (${siteConfig.url}), formulários de contato, e-mail, WhatsApp e demais canais digitais.

Esta política foi elaborada em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD), o Código de Defesa do Consumidor e o Marco Civil da Internet.`,
  },
  {
    id: "controlador",
    title: "2. Controlador e Encarregado",
    content: `**Controlador:** ${siteConfig.professional} — ${siteConfig.title}
**Registro profissional:** ${siteConfig.cauRegistro}
**E-mail de contato:** ${siteConfig.email}
**Canal LGPD (exercício de direitos):** ${siteConfig.privacyEmail}
**Localização:** ${siteConfig.address.city}/${siteConfig.address.state} — ${siteConfig.address.note}
**Natureza jurídica:** ${siteConfig.legalEntity}`,
  },
  {
    id: "dados-coletados",
    title: "3. Dados Pessoais Coletados",
    content: `Podemos coletar as seguintes categorias de dados:

- **Identificação e contato:** nome, e-mail, telefone/WhatsApp
- **Dados do projeto:** tipo de projeto, descrição, localização do imóvel
- **Dados de navegação:** endereço IP, tipo de navegador, páginas visitadas (quando aplicável)
- **Comunicações:** mensagens enviadas por formulário, e-mail ou WhatsApp

Não coletamos dados sensíveis (Art. 11 LGPD) por meio deste site.`,
  },
  {
    id: "finalidade",
    title: "4. Finalidades e Bases Legais",
    content: `| Finalidade | Base legal (LGPD) |
|---|---|
| Elaboração de orçamento de projeto arquitetônico | Art. 7º, V — execução de procedimentos preliminares relacionados a contrato |
| Resposta a solicitações de contato | Art. 7º, V — idem |
| Cumprimento de obrigações legais e regulatórias (CAU) | Art. 7º, II — obrigação legal |
| Melhoria do site e segurança | Art. 7º, IX — legítimo interesse |

Não utilizamos seus dados para fins distintos dos informados sem nova base legal ou consentimento, quando exigido.`,
  },
  {
    id: "compartilhamento",
    title: "5. Compartilhamento e Operadores",
    content: `Seus dados podem ser processados por operadores (subprocessadores) necessários à prestação do serviço:

- **Vercel Inc.** — hospedagem do site (EUA, cláusulas contratuais padrão)
- **Google LLC** — se você utilizar serviços Google vinculados (Forms, Gmail)
- **Meta Platforms** — WhatsApp e Instagram, quando você interage por esses canais

Não vendemos dados pessoais. Compartilhamentos ocorrem apenas para as finalidades descritas ou por determinação legal.`,
  },
  {
    id: "direitos",
    title: "6. Direitos do Titular (Art. 18 LGPD)",
    content: `Você pode solicitar, a qualquer momento:

- Confirmação da existência de tratamento
- Acesso aos dados
- Correção de dados incompletos ou desatualizados
- Anonimização, bloqueio ou eliminação de dados desnecessários
- Portabilidade
- Eliminação dos dados tratados com consentimento
- Informação sobre compartilhamentos
- Revogação do consentimento

**Canal de solicitação:** ${siteConfig.privacyEmail} (assunto: "LGPD — Exercício de Direitos")

Responderemos em prazo razoável, conforme Art. 18, § 1º da LGPD.`,
  },
  {
    id: "retencao",
    title: "7. Retenção de Dados",
    content: `Os dados são mantidos pelo tempo necessário para cumprir as finalidades descritas, incluindo prazos legais aplicáveis à documentação técnica de projetos arquitetônicos e obrigações do CAU. Solicitações de orçamento não convertidas em contrato serão eliminadas após 24 meses, salvo obrigação legal em contrário.`,
  },
  {
    id: "seguranca",
    title: "8. Segurança",
    content: `Adotamos medidas técnicas e administrativas para proteger seus dados, incluindo conexão HTTPS, controle de acesso e boas práticas de armazenamento. Nenhum sistema é 100% seguro; em caso de incidente, adotaremos as medidas previstas no Art. 48 da LGPD.`,
  },
  {
    id: "cookies",
    title: "9. Cookies e Tecnologias Similares",
    content: `**Cookies essenciais:** necessários ao funcionamento do site (ex.: preferência de consentimento).

**Cookies de terceiros:** ao acessar links para Instagram, WhatsApp ou serviços Google, cookies dessas plataformas podem ser aplicados conforme suas políticas.

**Gerenciamento:** você pode gerenciar cookies pelo banner de consentimento ou configurações do navegador. A recusa de cookies essenciais pode afetar funcionalidades.

Consulte também as políticas de privacidade do Instagram (Meta), WhatsApp (Meta) e Google.`,
  },
  {
    id: "alteracoes",
    title: "10. Alterações",
    content: `Esta política pode ser atualizada. A data da última revisão será indicada abaixo. Alterações relevantes serão comunicadas por meio deste site.`,
  },
];

export const privacyLastUpdated = "25 de junho de 2026";
