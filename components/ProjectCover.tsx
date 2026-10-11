import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/lib/projects";

export function ProjectCover({
  project,
  priority = false,
  sizes = "(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw",
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
}) {
  if (project.image) {
    return (
      <div className="cover">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    );
  }

  const cover = project.cover ?? { from: "#8b5cf6", to: "#22d3ee", label: project.category };
  const style = {
    "--cover-from": `${cover.from}66`,
    "--cover-to": `${cover.to}88`,
  } as CSSProperties;

  return (
    <div className="cover cover-gen" style={style} role="img" aria-label={`${project.name} cover`}>
      <span className="cover-mono mono" aria-hidden="true">
        {project.name.charAt(0)}
      </span>
      <span className="mono relative z-10 text-[11px] uppercase tracking-[0.14em] text-white/80">
        {cover.label}
      </span>
    </div>
  );
}
