import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { allProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Ali Danish",
  description:
    "Selected work by Ali Danish across Web3, games, and product: agentic prediction markets, a multi-chain DEX interface, on-chain games, and an Android app that counts your Reels.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-[1080px] px-5 pb-8 pt-14 sm:px-8 sm:pt-20">
      <h1 className="text-[28px] font-medium tracking-tight">Projects</h1>
      <p className="mt-3 max-w-[54ch] text-[15px] leading-relaxed text-muted">
        On-chain agents, DEX interfaces, multiplayer games, and a brain that keeps score of your
        Reels.
      </p>

      <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index < 3} />
        ))}
      </div>
    </main>
  );
}
