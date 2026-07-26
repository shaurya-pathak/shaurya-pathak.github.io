import type { Metadata } from "next";
import { PostFeed } from "./components/PostFeed";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { posts } from "./site-data";

export const metadata: Metadata = {
  title: "Shaurya Pathak",
  description: "Tools and notes by Shaurya Pathak.",
};

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader />
      <PostFeed posts={posts} />
      <SiteFooter />
    </main>
  );
}
