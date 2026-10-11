import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-[680px] px-5 pt-20 sm:px-6">
      <h1 className="text-[28px] font-medium tracking-tight">Page not found</h1>
      <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-muted">
        That page doesn’t exist, or it moved. The projects are all still where you left them.
      </p>
      <p className="mt-6 flex gap-5 text-[14px]">
        <Link href="/" className="link-line">
          Back home
        </Link>
        <Link href="/projects" className="link-line">
          All projects
        </Link>
      </p>
    </main>
  );
}
