import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import {
  chains,
  contact,
  experience,
  expertise,
  highlights,
  moreProjects,
  skills,
  timeline,
} from "@/lib/projects";
import type { TimelineItem } from "@/lib/projects";
import type { CSSProperties } from "react";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: contact.name,
  jobTitle: contact.title,
  email: `mailto:${contact.email}`,
  telephone: contact.phone,
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  knowsAbout: expertise,
  url: "https://alidanish.vercel.app",
};

function Chain({ name }: { name: string }) {
  const chain = chains.find((item) => item.name === name);
  return (
    <span className="chain" style={{ "--dot": chain?.color ?? "#22d3ee" } as CSSProperties}>
      {name}
    </span>
  );
}

function TimelineList({ items }: { items: TimelineItem[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.title} className="row grid grid-cols-[1fr_auto] gap-x-4 py-5">
          <div>
            <p className="text-[15px] font-medium tracking-tight">{item.title}</p>
            {item.org ? <p className="text-[14px] text-muted">{item.org}</p> : null}
            {item.note ? (
              <p className="mt-1.5 max-w-[56ch] text-[13.5px] leading-relaxed text-soft">{item.note}</p>
            ) : null}
            {item.image ? (
              <div className="shot mt-4 max-w-[300px] !rounded-2xl !p-2">
                <Image
                  src={item.image}
                  alt={item.imageAlt ?? ""}
                  width={572}
                  height={349}
                  sizes="300px"
                  className="h-auto w-full rounded-lg"
                />
              </div>
            ) : null}
          </div>
          {item.period ? (
            <p className="whitespace-nowrap text-[13px] text-soft">{item.period}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section aria-label="About" className="mx-auto mt-14 w-full max-w-[680px] px-5 sm:mt-20 sm:px-6">
        <h1 className="sr-only">Ali Danish — blockchain and Web3 engineer</h1>
        <div className="space-y-5 text-[15.5px] leading-[1.75] text-muted">
          <p>
            I’m a <span className="chip">blockchain &amp; Web3 engineer</span> and game developer
            based in India. I turn ideas into on-chain products, and spend a little extra time on
            the details that make them feel right.
          </p>
          <p>
            Right now, I’m building{" "}
            <a className="chip" href="https://clawx.kshimate.space/" target="_blank" rel="noreferrer">
              ClawX
            </a>
            , an agentic prediction market on Avalanche, and{" "}
            <a className="chip" href="https://brain-rot-drab.vercel.app/" target="_blank" rel="noreferrer">
              Brainrot
            </a>
            , an Android app that counts every Instagram Reel you swipe through and shows a brain
            that rots a little more with each one.
          </p>
          <p>
            My work moves between smart contracts, wallets, multiplayer games, and the interfaces
            on top of them. I studied game design and 3D production, and once shipped a working
            product inside a 24-hour Web3 hackathon.
          </p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span>Chains I build on:</span>
            {chains
              .filter((chain) => chain.name !== "EVM")
              .map((chain) => (
                <Chain key={chain.name} name={chain.name} />
              ))}
          </p>
          <p>
            Have something in mind?{" "}
            <a className="link-line" href={`mailto:${contact.email}`}>
              Say hello
            </a>
            .
          </p>
        </div>
      </section>

      <section aria-label="Highlights" className="mx-auto mt-20 w-full max-w-[1080px] px-5 sm:px-8">
        <h2 className="label mb-6">Highlights</h2>
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 3} />
          ))}
        </div>
      </section>

      <section aria-label="More projects" className="mx-auto mt-24 w-full max-w-[680px] px-5 sm:px-6">
        <h2 className="label mb-6">More projects</h2>
        <ul>
          {moreProjects.map((project) => (
            <li key={project.slug} className="row py-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[15px] font-medium tracking-tight">
                  <Link href={`/projects/${project.slug}`} className="hover:opacity-70">
                    {project.name}
                  </Link>
                </h3>
                <span className="text-[13px] text-soft">{project.year}</span>
              </div>
              <p className="mt-1 max-w-[56ch] text-[14px] leading-relaxed text-muted">
                {project.description}
              </p>
              <p className="mono mt-2 text-[11.5px] text-soft">{project.tags.join(" · ")}</p>
            </li>
          ))}
        </ul>
        <p className="row pt-6">
          <Link href="/projects" className="link-line text-[14px]">
            All projects
          </Link>
        </p>
      </section>

      <section aria-label="Experience" className="mx-auto mt-24 w-full max-w-[680px] px-5 sm:px-6">
        <h2 className="label mb-6">Experience</h2>
        <TimelineList items={experience} />
      </section>

      <section
        aria-label="Hackathons and education"
        className="mx-auto mt-24 w-full max-w-[680px] px-5 sm:px-6"
      >
        <h2 className="label mb-6">Hackathons &amp; education</h2>
        <TimelineList items={timeline} />
      </section>

      <section aria-label="What I do" className="mx-auto mt-24 w-full max-w-[680px] px-5 sm:px-6">
        <h2 className="label mb-4">What I do</h2>
        <p className="text-[14.5px] leading-[1.8] text-muted">{expertise.join(" · ")}</p>
      </section>

      <section aria-label="Technical skills" className="mx-auto mt-24 w-full max-w-[680px] px-5 sm:px-6">
        <h2 className="label mb-6">Tools I reach for</h2>
        <dl>
          {skills.map((group) => (
            <div key={group.label} className="row grid gap-x-6 gap-y-1 py-3 sm:grid-cols-[130px_1fr]">
              <dt className="text-[13px] text-soft">{group.label}</dt>
              <dd className="text-[14.5px] text-muted">{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-label="Contact" className="mx-auto mt-24 w-full max-w-[680px] px-5 sm:px-6">
        <h2 className="label mb-4">Contact</h2>
        <p className="max-w-[52ch] text-[15.5px] leading-[1.75] text-muted">
          Open to remote and on-site opportunities worldwide. The fastest way to reach me is{" "}
          <a className="link-line" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          , or call{" "}
          <a className="link-line" href={contact.phoneHref}>
            {contact.phone}
          </a>
          .
        </p>
      </section>
    </main>
  );
}
