import { Link } from "react-router-dom";

const capabilities = [
  "SOCIAL STRATEGY",
  "CONTENT CREATION",
  "COPYWRITING",
  "COMMUNITY",
  "SHORT-FORM VIDEO",
];

export default function Hero() {
  return (
    <section className="bg-white px-6 md:px-16 py-16 md:py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-medium tracking-widest text-[var(--color-accent)]">
            SOCIAL MEDIA • CONTENT • STRATEGY
          </p>
          <p className="mt-5 text-xl lg:text-2xl font-medium text-[#111111]">
            Hi, I'm Jesutoyosi Kayode.
          </p>
          <h1 className="mt-3 text-3xl lg:text-4xl font-medium text-[#111111] leading-tight">
            I turn brand ideas into content people understand, engage with and
            remember.
          </h1>
          <p className="mt-5 text-base text-[#6B6B6B] font-light leading-relaxed max-w-md">
            I'm a Social Media Manager, Content Creator &amp; Strategist helping
            brands build stronger digital presence through thoughtful strategy,
            storytelling and social-first content.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <Link
              to="/experience"
              className="inline-flex min-h-11 items-center justify-center bg-[#111111] text-white px-6 py-3 text-sm font-medium hover:bg-[var(--color-accent)] focus-visible:bg-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] transition-colors motion-reduce:transition-none"
            >
              Explore my work
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center border border-[#E3E3E3] text-[#111111] px-6 py-3 text-sm font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:border-[var(--color-accent)] focus-visible:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] transition-colors motion-reduce:transition-none"
            >
              Let's work together →
            </Link>
          </div>
        </div>

        <div className="aspect-4/5 bg-[#F7F7F7] w-full overflow-hidden rounded-3xl max-w-sm md:justify-self-end">
          <img
            src="/Toyosi-headshot.jpeg"
            alt="Jesutoyosi Kayode"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <ul
        aria-label="Capabilities"
        className="max-w-6xl mx-auto mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#E3E3E3] pt-5 text-xs font-medium tracking-wide text-[#6B6B6B]"
      >
        {capabilities.map((capability) => (
          <li key={capability}>{capability}</li>
        ))}
      </ul>
    </section>
  );
}
