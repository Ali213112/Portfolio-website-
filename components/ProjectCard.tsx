import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectCover } from "./ProjectCover";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="group">
      <Link href={`/projects/${project.slug}`} aria-label={`${project.name}: view details`} className="block">
        <div className="shot">
          <ProjectCover project={project} priority={priority} />
        </div>
      </Link>

      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="text-[15px] font-medium tracking-tight">
          <Link href={`/projects/${project.slug}`} className="hover:opacity-70">
            {project.name}
          </Link>
        </h3>
        <span className="text-[13px] text-soft">{project.year}</span>
      </div>
      <p className="mt-0.5 text-[13.5px] text-muted">{project.tagline}</p>

      <p className="mono mt-2 text-[11.5px] leading-relaxed text-soft">
        {project.tags.slice(0, 3).join(" · ")}
      </p>

      <p className="mt-3 text-[13px]">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-muted hover:text-b"
          >
            <span className="live-dot" aria-hidden="true" />
            Live site ↗
          </a>
        ) : project.status ? (
          <span className="text-soft">{project.status}</span>
        ) : null}
      </p>
    </article>
  );
}
