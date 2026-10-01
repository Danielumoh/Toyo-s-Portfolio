import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-white px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl  md:text-5xl font-medium text-[#111111] leading-tight">
            Hi, I’m Jesutoyosi Kayode. <br />
          </h1>
          <p className="mt-2 text-[#6B6B6B] font-medium tracking-wide opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
            Social Media Manager & Content Marketer
          </p>

          <p className="mt-4 text-lg text-[#6B6B6B] font-light max-w-md">
            I manage brand pages, plan content calendars, and create short-form
            video — on camera and behind the scenes — across Instagram, TikTok,
            Facebook, and X.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              to="/services"
              className="bg-[#111111] text-white px-6 py-3 text-sm font-medium hover:bg-black transition-colors"
            >
              See what I do
            </Link>
            <Link
              to="/contact"
              className="border border-[#E3E3E3] text-[#111111] px-6 py-3 text-sm font-medium hover:border-[color:var(--color-accent)] transition-colors"
            >
              Get in touch
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
    </section>
  );
}
