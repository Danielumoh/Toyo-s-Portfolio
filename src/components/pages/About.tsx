import Card from "../Card";

const qualifications = [
  {
    title: "B.Ed. Education & English Language",
    institution: "University of Lagos",
  },
  {
    title: "Virtual Assistant Programme",
    institution: "ALX Africa",
  },
  {
    title: "CRM Training",
    institution: "Great Learning",
  },
];

export default function About() {
  return (
    <div className="px-6 md:px-16 py-20">
      <Card className="max-w-3xl mx-auto">
        <div className="card-accent w-10 h-1 bg-[color:var(--color-accent)] mb-6" />
        <h1 className="text-3xl md:text-4xl font-medium text-[#111111]">
          A little about me
        </h1>

        <p className="mt-6 text-[#333333] font-light leading-relaxed">
          I'm a social media and content professional based in Lagos, passionate
          about helping brands communicate with clarity, personality and purpose.
        </p>

        <div className="mt-6 space-y-4 text-[#6B6B6B] font-light leading-relaxed">
          <p>
            My work sits at the intersection of{" "}
            <strong className="font-medium">strategy and creativity</strong>. I
            enjoy taking a brand's goals, audience and ideas and turning them into
            content people actually want to consume — whether that's a monthly
            content strategy, a compelling caption, an engaging short-form video
            or an on-camera story.
          </p>
          <p>
            I've worked across social media management, content planning,
            copywriting, community engagement and short-form content creation,
            giving me experience on both sides of the process:{" "}
            <strong className="font-medium">
              thinking about what a brand should say and actually creating the
              content that says it.
            </strong>
          </p>
          <p>
            I'm particularly interested in storytelling, digital culture and
            understanding what makes audiences stop, watch, engage and eventually
            trust a brand.
          </p>
        </div>

        <section aria-labelledby="education-heading" className="mt-10">
          <h2
            id="education-heading"
            className="text-lg font-medium text-[#111111]"
          >
            Education & Training
          </h2>
          <ul className="mt-4 divide-y divide-[#E3E3E3] border-y border-[#E3E3E3]">
            {qualifications.map((qualification) => (
              <li
                key={qualification.title}
                className="grid gap-1 py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:items-baseline sm:gap-6"
              >
                <h3 className="text-sm font-medium text-[#111111]">
                  {qualification.title}
                </h3>
                <p className="text-sm font-light text-[#6B6B6B] sm:text-right">
                  {qualification.institution}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </Card>
    </div>
  );
}
