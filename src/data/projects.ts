export type Project = {
  id: string;
  title: string;
  category: "Residencial" | "Comercial" | "Religioso" | "Reforma";
  location: string;
  year: string;
  description: string;
  client?: string;
  /** Número RRT ou referência SICCAU — obrigatório para divulgação (Res. CAU/BR 75/2014) */
  rrt: string;
  /** Render 3D ou foto do projeto (Google Sites / Instagram) */
  image: string;
  color: string;
};

export const projects: Project[] = [
  {
    id: "3ipivr-templo",
    title: "Reforma — Templo 3IPIVR",
    category: "Religioso",
    location: "Volta Redonda, RJ",
    year: "2023",
    client: "3ª Igreja Presbiteriana Independente de VR (@3ipivr)",
    description:
      "Reforma geral do templo com foco em iluminação, acústica e layout do palco. Projeto 3D aprovado e obra executada.",
    rrt: "RRT nº XXXXX — CAU/RJ",
    image: "/images/projects/3ipivr-templo.jpg",
    color: "#8b7355",
  },
  {
    id: "3ipivr-hall",
    title: "Reforma — Hall de Entrada 3IPIVR",
    category: "Religioso",
    location: "Volta Redonda, RJ",
    year: "2023",
    client: "3ª Igreja Presbiteriana Independente de VR (@3ipivr)",
    description:
      "Criação de hall de entrada para separar o acesso ao templo, com área de exposição e acolhimento.",
    rrt: "RRT nº XXXXX — CAU/RJ",
    image: "/images/projects/3ipivr-hall.jpg",
    color: "#a89060",
  },
  {
    id: "3ipivr-palco",
    title: "Reforma — Palco e Altar 3IPIVR",
    category: "Religioso",
    location: "Volta Redonda, RJ",
    year: "2023",
    client: "3ª Igreja Presbiteriana Independente de VR (@3ipivr)",
    description:
      "Redesign do palco com altar em madeira, iluminação indireta e integração audiovisual para cultos.",
    rrt: "RRT nº XXXXX — CAU/RJ",
    image: "/images/projects/3ipivr-palco.jpg",
    color: "#c9a962",
  },
  {
    id: "ale-motos",
    title: "Loja Alê Motos",
    category: "Comercial",
    location: "Barra Mansa, RJ",
    year: "2023",
    client: "Alê Motos (@alemotosbm)",
    description:
      "Transformação de prédio comercial em loja de motos — iluminação, revestimentos e identidade visual do espaço.",
    rrt: "RRT nº XXXXX — CAU/RJ",
    image: "/images/projects/ale-motos-loja.jpg",
    color: "#6b9bd1",
  },
  {
    id: "residencia-bercario",
    title: "Berçário Gêmeas",
    category: "Residencial",
    location: "Volta Redonda, RJ",
    year: "2024",
    description:
      "Projeto 3D de berçário duplo com painéis iluminados, papel de parede personalizado e mobiliário sob medida.",
    rrt: "RRT nº XXXXX — CAU/RJ",
    image: "/images/projects/residencia-bercario.jpg",
    color: "#d4a5a5",
  },
  {
    id: "residencia-gourmet",
    title: "Área Gourmet com Piscina",
    category: "Residencial",
    location: "Volta Redonda, RJ",
    year: "2024",
    description:
      "Render 3D de área externa com pergolado, piscina, lounge e zona de refeições integrada à residência.",
    rrt: "RRT nº XXXXX — CAU/RJ",
    image: "/images/projects/residencia-gourmet.jpg",
    color: "#7a9e7e",
  },
  {
    id: "residencia-fachada",
    title: "Fachada Residencial Contemporânea",
    category: "Residencial",
    location: "Volta Redonda, RJ",
    year: "2024",
    description:
      "Projeto 3D de fachada moderna com revestimento em pedra, iluminação externa e integração paisagística.",
    rrt: "RRT nº XXXXX — CAU/RJ",
    image: "/images/projects/residencia-fachada.jpg",
    color: "#c9a962",
  },
  {
    id: "residencia-cozinha",
    title: "Cozinha Integrada",
    category: "Residencial",
    location: "Volta Redonda, RJ",
    year: "2024",
    description:
      "Cozinha e dining com marcenaria em madeira, vidro canelado retroiluminado e adega climatizada embutida.",
    rrt: "RRT nº XXXXX — CAU/RJ",
    image: "/images/projects/residencia-cozinha.jpg",
    color: "#5a7a6a",
  },
  {
    id: "residencia-escritorio",
    title: "Home Office",
    category: "Reforma",
    location: "Volta Redonda, RJ",
    year: "2024",
    description:
      "Projeto 3D de home office com marcenaria planejada, painel cobogó e iluminação de trabalho.",
    rrt: "RRT nº XXXXX — CAU/RJ",
    image: "/images/projects/residencia-escritorio.jpg",
    color: "#4a5568",
  },
];
