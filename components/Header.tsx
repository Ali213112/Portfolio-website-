"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="mx-auto flex w-full max-w-[680px] items-center justify-between gap-4 px-5 pt-10 sm:px-6 sm:pt-14">
      <Link href="/" className="flex min-w-0 items-center gap-3">
        <Image
          src="/batman.jpg"
          alt="Batman"
          width={88}
          height={88}
          priority
          className="h-11 w-11 shrink-0 rounded-full object-cover object-center ring-1 ring-[var(--line)]"
        />
        <span className="min-w-0 leading-tight">
          <span className="block text-[15px] font-medium tracking-tight">Ali Danish</span>
          <span className="block truncate text-[13px] text-muted">Blockchain &amp; Web3 engineer</span>
        </span>
      </Link>

      <nav aria-label="Main navigation" className="flex shrink-0 items-center gap-2">
        <div className="nav-pill">
          <Link href="/" className="nav-item" data-active={pathname === "/"}>
            Home
          </Link>
          <Link href="/projects" className="nav-item" data-active={pathname.startsWith("/projects")}>
            Projects
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
