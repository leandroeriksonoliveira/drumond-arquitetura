import type { Metadata } from "next";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Galeria de projetos arquitetônicos. Residencial, comercial, religioso e reformas.",
};

export default function ProjetosPage() {
  return <ProjectsGallery />;
}
