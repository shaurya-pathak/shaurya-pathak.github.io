import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "About",
  description: "About Shaurya Pathak.",
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <header className="page-header">
        <h1 className="page-title">About</h1>
      </header>

      <div className="about-copy">
        <p>
          I’m Shaurya Pathak, a software engineer in Santa Clara. I work at NVIDIA.
        </p>
        <p>
          Outside of work I build personal software, cook, and play basketball.
        </p>
        <p>
          The views here are my own. Nothing on this site speaks for my employer.
        </p>
        <p>
          Every published entry includes an authorship label. “By Shaurya” means
          I wrote it. “Voice note” means I spoke it and the prose is a direct
          transcription. “AI-assisted” means AI drafted or materially rewrote
          the prose, even when the underlying experience or project is mine.
        </p>
      </div>

      <p>
        <a className="text-link" href="mailto:shauryapathak24@gmail.com">
          shauryapathak24@gmail.com →
        </a>
      </p>
      <SiteFooter />
    </main>
  );
}
