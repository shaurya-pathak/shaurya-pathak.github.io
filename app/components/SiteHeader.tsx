import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="site-name" href="/">
        Shaurya Pathak
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/work">Work</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/about">About</Link>
        <a href="/Shaurya-Pathak-Resume.pdf">Résumé</a>
      </nav>
    </header>
  );
}
