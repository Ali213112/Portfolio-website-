import Link from "next/link";
import { contact } from "@/lib/projects";

export function Footer() {
  return (
    <footer className="mx-auto mt-24 flex w-full max-w-[680px] flex-col gap-6 px-5 pb-12 sm:px-6">
      <div className="h-px w-full bg-line" />
      <div className="flex flex-wrap items-center justify-between gap-4 text-[13px] text-muted">
        <p>
          © {new Date().getFullYear()} {contact.name}
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link className="hover:text-ink" href="/projects">
            Projects
          </Link>
          <a className="hover:text-ink" href={`mailto:${contact.email}`}>
            Email
          </a>
          <a className="hover:text-ink" href={contact.phoneHref}>
            Phone
          </a>
          <a className="hover:text-ink" href={contact.resume}>
            Résumé
          </a>
        </nav>
      </div>
    </footer>
  );
}
