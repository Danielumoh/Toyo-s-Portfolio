import { contentItems } from "../../data/content";
import ContentCard from "../ContentCard";

export default function ContentShowcase() {
  return (
    <section id="content" className="bg-[#F7F7F7] px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-medium text-[#111111]">
          Content in action
        </h1>
        <p className="mt-4 max-w-2xl font-light leading-relaxed text-[#6B6B6B]">
          A selection of social-first content showcasing ideas brought to life
          through storytelling, creativity and execution.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
