import type { Metadata } from "next";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Galeria de projetos arquitetônicos com visualização 3D interativa. Residencial, comercial, religioso e reformas.",
};

export default function ProjetosPage() {
  return <ProjectsGallery />;
}
