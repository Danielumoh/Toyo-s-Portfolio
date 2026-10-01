import Card from "../Card";

const experience = [
  {
    role: "Social Media Manager",
    company: "AIJOOR Sports Intelligence",
    points: [
      "Managed and published content across Instagram, TikTok, Facebook, and X.",
      "Wrote captions and calls to action for different types of posts and videos.",
    ],
  },
  {
    role: "Social Media Manager",
    company: "Asteroid Ideas",
    points: [
      "Planned monthly content calendars around the brand's services and projects.",
      "Wrote storytelling-based captions showing the value of client work.",
    ],
  },
  {
    role: "Content Creator",
    company: "Buy & Use (Suprotech)",
    points: [
      "On-camera face of the brand across TikTok, Instagram, and Facebook.",
      "Created around 50 short-form videos, handling ideas, scripting, and performance.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#F7F7F7] px-6 md:px-16 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-[#111111]">
          Experience
        </h2>
        <div className="mt-10 space-y-10">
          {experience.map((job) => (
            <Card key={job.company}>
              <h3 className="text-lg font-medium text-[#111111]">{job.role}</h3>
              <p className="text-sm text-[#6B6B6B]">{job.company}</p>
              <ul className="mt-3 space-y-1">
                {job.points.map((point) => (
                  <li key={point} className="text-[#333333] font-light">
                    — {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
