import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { experiences } from "../site-data";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work and education for Shaurya Pathak.",
};

export default function ExperiencePage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <header className="page-header">
        <p className="eyebrow">Experience</p>
        <h1 className="page-title">Work that crossed boundaries.</h1>
        <p className="page-lede">
          My work sits between software infrastructure, machine learning, data,
          and the coordination required to make those systems useful.
        </p>
      </header>

      <ol className="experience-list">
        {experiences.map((experience) => (
          <li className="experience" key={experience.company}>
            <div className="experience-heading">
              <h2>{experience.company}</h2>
              <p className="date-range">{experience.location}</p>
            </div>
            <div className="experience-details">
              {experience.roles.map((role) => (
                <section className="experience-subrole" key={role.title}>
                  <p className="experience-role">
                    {role.title} · {role.dates}
                  </p>
                  <p>{role.description}</p>
                </section>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <section className="content-section" aria-labelledby="education-heading">
        <h2 className="section-title" id="education-heading">
          Education
        </h2>
        <ol className="education-list">
          <li className="education-item">
            <div className="education-heading">
              <h2>UC Berkeley</h2>
              <p className="date-range">2025 – present</p>
            </div>
            <p>Master of Information and Data Science</p>
          </li>
          <li className="education-item">
            <div className="education-heading">
              <h2>UC Riverside</h2>
              <p className="date-range">2021 – 2024</p>
            </div>
            <p>
              B.S. Computer Science with Business Applications. Chancellor’s
              and Dean’s List; undergraduate research assistant.
            </p>
          </li>
        </ol>
      </section>

      <p>
        <a className="text-link" href="/Shaurya-Pathak-Resume.pdf">
          Open résumé →
        </a>
      </p>
      <p className="provenance-note">
        Experience copy is AI-assisted and based on my January 2026 résumé.
      </p>
      <SiteFooter />
    </main>
  );
}
