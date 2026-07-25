import type { Metadata } from "next";
import { PostFeed } from "./components/PostFeed";
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
      <p className="site-intro">
        Software engineer in Santa Clara. I work at NVIDIA. I build tools and
        write here.
      </p>
      <PostFeed posts={posts} />
    </main>
  );
}
