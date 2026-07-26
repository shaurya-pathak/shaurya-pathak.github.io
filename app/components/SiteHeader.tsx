import Link from "next/link";

type SiteSection = "tools" | "experience" | "about";

export function SiteHeader({ current }: { current?: SiteSection }) {
  return (
    <header className="site-header">
      <Link className="site-name" href="/">
        Shaurya Pathak
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/work" aria-current={current === "tools" ? "page" : undefined}>
          Tools
        </Link>
        <Link
          href="/experience"
          aria-current={current === "experience" ? "page" : undefined}
        >
          Experience
        </Link>
        <Link href="/about" aria-current={current === "about" ? "page" : undefined}>
          About
        </Link>
        <a href="/Shaurya-Pathak-Resume.pdf">Résumé</a>
      </nav>
    </header>
  );
}
