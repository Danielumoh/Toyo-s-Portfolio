import { Link } from "react-router-dom";
import { experiences } from "../data/experiences";
import { projects } from "../data/projects";
import Card from "./Card";
import Tag from "./Tag";

export default function SelectedWork() {
  return (
    <section id="selected-work" aria-labelledby="selected-work-heading" className="bg-white px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 id="selected-work-heading" className="text-2xl md:text-3xl font-medium text-[#111111]">
          Selected Work
        </h2>
        <div className="mt-10 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const experience = experiences.find((entry) => entry.id === project.experienceId);

            return (
              <article key={project.id} aria-labelledby={`${project.id}-heading`} className="min-w-0">
                <Card>
                  {experience && (
                    <p className="mb-3 text-xs font-medium uppercase tracking-wide text-[#6B6B6B]">
                      {experience.company}
                    </p>
                  )}
                  <h3 id={`${project.id}-heading`} className="text-lg font-medium leading-snug text-[#111111]">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-[#6B6B6B]">
                    {project.summary}
                  </p>
                  {project.categories.length > 0 && (
                    <ul aria-label="Project categories" className="mt-6 flex flex-wrap gap-2">
                      {project.categories.map((category) => (
                        <li key={category} className="max-w-full"><Tag>{category}</Tag></li>
                      ))}
                    </ul>
                  )}
                  {project.contentLink?.href && project.contentLink.label && (
                    <a
                      href={project.contentLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex min-h-11 items-center rounded-sm text-sm font-medium text-[var(--color-accent)] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                      {project.contentLink.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </Card>
              </article>
            );
          })}
        </div>
        <Link
          to="/content"
          className="mt-10 inline-flex min-h-11 items-center rounded-sm text-sm font-medium text-[var(--color-accent)] underline underline-offset-4 hover:text-[#111111] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
        >
          Browse featured content →
        </Link>
      </div>
    </section>
  );
}
