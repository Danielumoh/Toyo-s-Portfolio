import Card from "../Card";

export default function About() {
  return (
    <div className="px-6 md:px-16 py-20">
      <Card className="max-w-3xl mx-auto">
        <div className="card-accent w-10 h-1 bg-[color:var(--color-accent)] mb-6" />
        <h1 className="text-3xl md:text-4xl font-medium text-[#111111]">
          About
        </h1>

        <p className="mt-6 text-[#333333] font-light leading-relaxed">
          I'm a social media and content professional based in Lagos, with
          hands-on experience managing brand pages, planning content, writing
          captions and scripts, creating short-form videos, and engaging with
          online audiences.
        </p>

        {/* Placeholder — replace with real expanded content later */}
        <p className="mt-4 text-[#6B6B6B] font-light leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        <p className="mt-6 text-[#6B6B6B] font-light text-sm">
          B.Ed. Education & English Language — University of Lagos · Virtual
          Assistant Program — ALX Africa · CRM — Great Learning
        </p>
      </Card>
    </div>
  );
}
