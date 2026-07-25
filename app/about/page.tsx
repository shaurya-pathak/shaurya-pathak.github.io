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
      <h1 className="sr-only">About</h1>

      <div className="about-copy">
        <p>Software engineer in Santa Clara. I work at NVIDIA.</p>
        <p>I build personal software. I cook and play basketball.</p>
        <p>Opinions here are mine, not NVIDIA’s.</p>
      </div>

      <SiteFooter />
    </main>
  );
}
