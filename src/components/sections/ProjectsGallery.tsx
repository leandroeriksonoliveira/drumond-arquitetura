"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { projects, type Project } from "@/data/projects";

const ProjectViewer3D = dynamic(
  () =>
    import("@/components/three/ProjectViewer3D").then((m) => m.ProjectViewer3D),
  { ssr: false, loading: () => <div className="h-full animate-pulse bg-white/5" /> },
);

const typeMap: Record<
  Project["category"],
  "residential" | "commercial" | "religious" | "reform"
> = {
  Residencial: "residential",
  Comercial: "commercial",
  Religioso: "religious",
  Reforma: "reform",
};

export function ProjectsGallery() {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">
          Portfólio
        </p>
        <h1 className="mt-4 font-display text-4xl font-light text-white md:text-5xl">
          Galeria de Projetos
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Explore nossos projetos com visualização interativa em 3D. Arraste para
          rotacionar. Cada obra divulgada indica Responsabilidade Técnica (RRT)
          conforme Res. CAU/BR 75/2014.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#141820]">
            <ProjectViewer3D
              color={selected.color}
              type={typeMap[selected.category]}
              className="h-[400px] w-full"
            />
            <div className="border-t border-white/5 p-6">
              <p className="text-xs uppercase tracking-wider text-[#c9a962]">
                {selected.category} · {selected.location} · {selected.year}
              </p>
              <h2 className="mt-2 font-display text-2xl text-white">
                {selected.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-400">{selected.description}</p>
              <p className="mt-4 rounded-lg bg-white/5 px-3 py-2 text-xs text-zinc-500">
                RT: {selected.rrt}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelected(project)}
                className={`rounded-xl border p-4 text-left transition ${
                  selected.id === project.id
                    ? "border-[#c9a962] bg-[#c9a962]/10"
                    : "border-white/5 bg-[#141820]/50 hover:border-white/20"
                }`}
              >
                <p className="text-xs text-[#c9a962]">{project.category}</p>
                <p className="mt-1 font-display text-lg text-white">
                  {project.title}
                </p>
                <p className="mt-1 text-xs text-zinc-500">{project.location}</p>
              </button>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-zinc-600">
          Imagens ilustrativas. Números de RRT devem ser atualizados com os
          registros oficiais SICCAU antes da publicação definitiva.
        </p>
      </section>
    </div>
  );
}
