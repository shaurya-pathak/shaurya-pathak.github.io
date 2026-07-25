"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Post } from "../site-data";

export function PostFeed({ posts }: { posts: Post[] }) {
  const tags = useMemo(
    () => ["all", ...Array.from(new Set(posts.flatMap((post) => post.tags)))],
    [posts],
  );
  const [activeTag, setActiveTag] = useState("all");
  const visiblePosts =
    activeTag === "all"
      ? posts
      : posts.filter((post) => post.tags.includes(activeTag));

  return (
    <section aria-label="Recent writing and projects">
      <div className="tag-filter" aria-label="Filter entries by tag">
        {tags.map((tag) => (
          <button
            type="button"
            key={tag}
            aria-pressed={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {visiblePosts.length ? (
        <ol className="post-list">
          {visiblePosts.map((post) => (
            <li className="post-entry" key={`${post.date}-${post.title ?? post.excerpt}`}>
              <article>
                <p className="post-meta">
                  {post.date} · {post.type} · {post.provenance}
                </p>
                {post.title ? <h2 className="post-title">{post.title}</h2> : null}
                <p className={post.title ? "post-excerpt" : "post-body"}>
                  {post.excerpt}
                </p>
                {post.href ? (
                  <Link className="read-more" href={post.href}>
                    Read more →
                  </Link>
                ) : null}
              </article>
            </li>
          ))}
        </ol>
      ) : (
        <p className="filter-empty">Nothing here yet.</p>
      )}
    </section>
  );
}
