import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { projects } from "../site-data";

export const metadata: Metadata = {
  title: "Tools",
  description: "Tools by Shaurya Pathak.",
};

export default function WorkPage() {
  return (
    <main className="page-shell">
      <SiteHeader current="tools" />
      <h1 className="sr-only">Tools</h1>

      <ol className="project-list">
        {projects.map((project) => (
          <li className="project" id={project.id} key={project.id}>
            <div className="project-heading">
              <h2>{project.name}</h2>
              <p className="project-status">{project.status}</p>
            </div>
            <p>{project.description}</p>
            {project.href || project.github ? (
              <div className="project-links">
                {project.href ? <a href={project.href}>Demo</a> : null}
                {project.github ? <a href={project.github}>Source</a> : null}
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      <SiteFooter />
    </main>
  );
}
