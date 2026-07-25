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
      <SiteHeader />
      <h1 className="sr-only">Tools</h1>

      <ol className="project-list">
        {projects.map((project) => (
          <li className="project" id={project.id} key={project.id}>
            <div className="project-heading">
              <h2>{project.name}</h2>
              <p className="project-status">{project.status}</p>
            </div>
            <p>{project.description}</p>
            {project.github ? (
              <div className="project-links">
                <a href={project.github}>Source</a>
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      <p>
        <a className="text-link" href="https://github.com/shaurya-pathak">
          More on GitHub
        </a>
      </p>
      <SiteFooter />
    </main>
  );
}
