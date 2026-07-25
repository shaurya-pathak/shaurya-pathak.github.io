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
        <p className="eyebrow">About</p>
        <h1 className="page-title">I like making complicated things legible.</h1>
      </header>

      <div className="about-copy">
        <p>
          I’m Shaurya Pathak, a software engineer in Santa Clara. I work at
          NVIDIA and study information and data science at UC Berkeley.
        </p>
        <p>
          Much of my work begins with a system that is technically possible but
          difficult to operate: too many signals, too many handoffs, or no clear
          way to inspect what is happening. I like finding the smaller interface
          or tool that makes the whole system understandable.
        </p>
        <p>
          Outside of work I build personal software, play chess and basketball,
          cook, and collect opinions that may eventually become notes here. This
          site is a record, not a content schedule.
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
