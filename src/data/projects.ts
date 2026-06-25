export type Project = {
  id: string;
  title: string;
  category: "Residencial" | "Comercial" | "Religioso" | "Reforma";
  location: string;
  year: string;
  description: string;
  /** Número RRT ou referência SICCAU — obrigatório para divulgação (Res. CAU/BR 75/2014) */
  rrt: string;
  image: string;
  color: string;
};

export const projects: Project[] = [
  {
    id: "casa-moderna-vr",
    title: "Residência Contemporânea",
    category: "Residencial",
    location: "Volta Redonda, RJ",
    year: "2024",
    description:
      "Projeto residencial unifamiliar com integração entre áreas sociais e jardim.",
    rrt: "RRT nº XXXXX — CAU/RJ",
    image: "/projects/residencial-1.svg",
    color: "#c9a962",
  },
  {
    id: "loja-comercial",
    title: "Loja Comercial",
    category: "Comercial",
    location: "Barra Mansa, RJ",
    year: "2023",
    description:
      "Layout comercial otimizado para fluxo de clientes e exposição de produtos.",
    rrt: "RRT nº XXXXX — CAU/RJ",
    image: "/projects/comercial-1.svg",
    color: "#6b9bd1",
  },
  {
    id: "capela",
    title: "Espaço Religioso",
    category: "Religioso",
    location: "Região do Médio Paraíba, RJ",
    year: "2023",
    description:
      "Projeto arquitetônico de espaço de culto com foco em acústica e iluminação natural.",
    rrt: "RRT nº XXXXX — CAU/RJ",
    image: "/projects/religioso-1.svg",
    color: "#8b7355",
  },
  {
    id: "reforma-apartamento",
    title: "Reforma de Apartamento",
    category: "Reforma",
    location: "Volta Redonda, RJ",
    year: "2024",
    description:
      "Reconfiguração de planta e acabamentos para ampliar sensação de espaço.",
    rrt: "RRT nº XXXXX — CAU/RJ",
    image: "/projects/reforma-1.svg",
    color: "#a89060",
  },
];
