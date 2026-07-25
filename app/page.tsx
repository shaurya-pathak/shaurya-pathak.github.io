import type { Metadata } from "next";
import { PostFeed } from "./components/PostFeed";
import { SiteHeader } from "./components/SiteHeader";
import { posts } from "./site-data";

export const metadata: Metadata = {
  title: "Shaurya Pathak",
  description: "Software, projects, notes, and other things by Shaurya Pathak.",
};

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="intro" aria-labelledby="intro-title">
        <h1 id="intro-title">I make software and other things.</h1>
        <p>This is where I keep track of them.</p>
      </section>

      <PostFeed posts={posts} />
    </main>
  );
}
