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
      <PostFeed posts={posts} />
    </main>
  );
}
