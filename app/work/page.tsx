import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { projects } from "../site-data";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected software and experiments by Shaurya Pathak.",
};

export default function WorkPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <header className="page-header">
        <h1 className="page-title">Tools</h1>
      </header>

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
                <a href={project.github}>View source →</a>
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      <p>
        <a className="text-link" href="https://github.com/shaurya-pathak">
          Everything else on GitHub →
        </a>
      </p>
      <p className="provenance-note">
        Project descriptions are AI-assisted summaries of my public project
        documentation. The underlying work and repositories are mine unless a
        project says otherwise.
      </p>
      <SiteFooter />
    </main>
  );
}
