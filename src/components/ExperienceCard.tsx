import type { Experience } from "../data/experiences";
import Card from "./Card";
import Tag from "./Tag";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const { id, company, role, summary, platforms, contributions, focus, metrics, media } = experience;

  return (
    <article id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-6">
      <Card>
        <header>
          <h2 id={`${id}-heading`} className="text-xl md:text-2xl font-medium text-[#111111]">
            {company}
          </h2>
          <p className="mt-2 text-sm font-medium text-[#6B6B6B]">{role}</p>
        </header>

        {summary?.trim() && (
          <p className="mt-6 text-[#333333] font-light leading-relaxed">{summary}</p>
        )}

        {(platforms?.length ?? 0) > 0 && (
          <ul aria-label="Platforms" className="mt-4 flex flex-wrap gap-2">
            {platforms?.map((platform) => (
              <li key={platform}><Tag>{platform}</Tag></li>
            ))}
          </ul>
        )}

        {(metrics?.length ?? 0) > 0 && (
          <ul aria-label="Verified output" className="mt-6 space-y-4 border-y border-[#E3E3E3] py-5">
            {metrics?.map((metric) => (
              <li key={metric.label} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="text-4xl md:text-5xl font-medium tracking-tight text-[var(--color-accent)]">
                  {metric.value}
                </span>
                <span className="text-sm text-[#6B6B6B]">{metric.label}</span>
              </li>
            ))}
          </ul>
        )}

        {(contributions?.length ?? 0) > 0 && (
          <section aria-labelledby={`${id}-contributions`} className="mt-6">
            <h3 id={`${id}-contributions`} className="text-sm font-medium text-[#111111]">
              Contributions
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#6B6B6B] font-light leading-relaxed">
              {contributions?.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </section>
        )}

        {(focus?.length ?? 0) > 0 && (
          <ul aria-label="Areas of focus" className="mt-6 flex flex-wrap gap-2">
            {focus?.map((skill) => (
              <li key={skill}><Tag>{skill}</Tag></li>
            ))}
          </ul>
        )}

        {(media?.length ?? 0) > 0 && (
          <section aria-labelledby={`${id}-media`} className="mt-6">
            <h3 id={`${id}-media`} className="text-sm font-medium text-[#111111]">
              Selected media
            </h3>
            <ul className="mt-3 grid gap-4 sm:grid-cols-2">
              {media?.map((item) => (
                <li key={item.src}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="aspect-4/5 w-full rounded-lg object-cover"
                  />
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block rounded-sm text-sm text-[var(--color-accent)] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                      View content<span className="sr-only">: {item.alt} (opens in a new tab)</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
      </Card>
    </article>
  );
}
