import type { ContentItem } from "../data/content";

export default function ContentCard({ item }: { item: ContentItem }) {
  return (
    <a
      href={item.source.href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover-card block min-w-0 rounded-xl border border-[#E3E3E3] bg-white px-6 py-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
    >
      {item.poster && (
        <img
          src={item.poster.src}
          alt={item.poster.alt}
          loading="lazy"
          className="mb-6 aspect-4/5 w-full rounded-lg object-cover"
        />
      )}
      <h2 className="text-xl font-medium text-[#111111]">{item.title}</h2>
      <span className="mt-8 flex items-center justify-between gap-4 border-t border-[#E3E3E3] pt-4 text-sm font-medium text-[var(--color-accent)]">
        <span>{item.source.label}</span>
        <span aria-hidden="true">↗</span>
      </span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
