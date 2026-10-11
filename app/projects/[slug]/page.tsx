import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCover } from "@/components/ProjectCover";
import { allProjects, getProject } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project not found — Ali Danish" };

  return {
    title: `${project.name} — Ali Danish`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Ali Danish`,
      description: project.description,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const index = allProjects.findIndex((item) => item.slug === project.slug);
  const next = allProjects[(index + 1) % allProjects.length];

  const meta = [
    { label: "Year", value: project.year },
    { label: "Category", value: project.category },
    project.chain ? { label: "Network", value: project.chain } : null,
  ].filter((item): item is { label: string; value: string } => item !== null);

  return (
    <main className="mx-auto w-full max-w-[680px] px-5 pb-8 pt-12 sm:px-6 sm:pt-16">
      <p className="text-[13px] text-soft">
        <Link href="/projects" className="link-line">
          Projects
        </Link>{" "}
        / {project.name}
      </p>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h1 className="text-[30px] font-medium leading-tight tracking-tight">{project.name}</h1>
        <span className="text-[13px] text-soft">{project.year}</span>
      </div>
      <p className="mt-1 text-[15px] text-muted">{project.tagline}</p>

      <div className="shot mt-8">
        <ProjectCover project={project} priority sizes="(min-width: 680px) 640px, 100vw" />
      </div>

      <p className="mt-8 text-[15.5px] leading-[1.75] text-muted">{project.intro ?? project.description}</p>

      <dl className="mt-8">
        {meta.map((item) => (
          <div key={item.label} className="row grid grid-cols-[110px_1fr] gap-x-4 py-3">
            <dt className="text-[13px] text-soft">{item.label}</dt>
            <dd className="text-[14.5px] text-muted">{item.value}</dd>
          </div>
        ))}
        <div className="row grid grid-cols-[110px_1fr] gap-x-4 py-3">
          <dt className="text-[13px] text-soft">Built with</dt>
          <dd className="mono text-[12.5px] leading-relaxed text-muted">{project.tags.join(" · ")}</dd>
        </div>
        <div className="row grid grid-cols-[110px_1fr] gap-x-4 border-b border-line py-3">
          <dt className="text-[13px] text-soft">Live</dt>
          <dd className="text-[14.5px]">
            {project.href ? (
              <a className="link-line" href={project.href} target="_blank" rel="noreferrer">
                {project.linkLabel ?? project.href} ↗
              </a>
            ) : (
              <span className="text-muted">{project.status ?? "Not available"}</span>
            )}
          </dd>
        </div>
      </dl>

      {project.features?.length ? (
        <section className="mt-14" aria-label="What it does">
          <h2 className="label mb-2">What it does</h2>
          <ul>
            {project.features.map((feature) => (
              <li key={feature.title} className="row py-5">
                <h3 className="text-[15px] font-medium tracking-tight">{feature.title}</h3>
                <p className="mt-1 max-w-[56ch] text-[14.5px] leading-relaxed text-muted">
                  {feature.body}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <nav
        aria-label="Project navigation"
        className="row mt-14 flex items-center justify-between gap-4 pt-6 text-[14px]"
      >
        <Link href="/projects" className="link-line">
          All projects
        </Link>
        <Link href={`/projects/${next.slug}`} className="link-line">
          {next.name} →
        </Link>
      </nav>
    </main>
  );
}
