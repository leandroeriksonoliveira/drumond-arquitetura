"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";

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
          Renders e fotos reais de obras executadas. Cada obra indica
          Responsabilidade Técnica (RRT) conforme Res. CAU/BR 75/2014.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#141820]">
            <div className="relative h-[420px] w-full">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="border-t border-white/5 p-6">
              <p className="text-xs uppercase tracking-wider text-[#c9a962]">
                {selected.category} · {selected.location} · {selected.year}
              </p>
              <h2 className="mt-2 font-display text-2xl text-white">
                {selected.title}
              </h2>
              {selected.client && (
                <p className="mt-1 text-xs text-zinc-500">{selected.client}</p>
              )}
              <p className="mt-2 text-sm text-zinc-400">{selected.description}</p>
              <p className="mt-4 rounded-lg bg-white/5 px-3 py-2 text-xs text-zinc-500">
                RT: {selected.rrt}
              </p>
            </div>
          </div>

          <div className="grid max-h-[640px] gap-3 overflow-y-auto pr-1 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectThumb
                key={project.id}
                project={project}
                active={selected.id === project.id}
                onSelect={() => setSelected(project)}
              />
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-zinc-600">
          Projetos extraídos do portfólio oficial (Google Sites e Instagram
          @drumond_arquitetura). Atualize os números de RRT no SICCAU antes da
          publicação definitiva.
        </p>
      </section>
    </div>
  );
}

function ProjectThumb({
  project,
  active,
  onSelect,
}: {
  project: Project;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`overflow-hidden rounded-xl border text-left transition ${
        active
          ? "border-[#c9a962] ring-1 ring-[#c9a962]/30"
          : "border-white/5 hover:border-white/20"
      }`}
    >
      <div className="relative h-28 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>
      <div className="bg-[#141820]/80 p-3">
        <p className="text-[10px] uppercase tracking-wider text-[#c9a962]">
          {project.category}
        </p>
        <p className="mt-0.5 font-display text-sm text-white">{project.title}</p>
      </div>
    </button>
  );
}
