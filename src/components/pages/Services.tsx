import Card from "../Card";
import Tag from "../Tag";

const services = [
  {
    title: "Social Media Management",
    value: "Keeping brands active, consistent and intentional online.",
    description:
      "I manage content publishing across Instagram, TikTok, Facebook and X while maintaining a consistent brand voice, content rhythm and audience experience.",
    tags: ["Publishing", "Scheduling", "Brand Voice", "Platform Management"],
  },
  {
    title: "Content Planning & Strategy",
    value: "Turning business goals into content worth publishing.",
    description:
      "I develop content pillars, monthly calendars and campaign ideas built around a brand's audience, services and objectives — creating direction instead of posting for the sake of posting.",
    tags: ["Content Calendars", "Ideation", "Content Pillars", "Campaign Planning"],
  },
  {
    title: "Copywriting & Scriptwriting",
    value: "Finding the words that make the idea land.",
    description:
      "From social captions and calls-to-action to short-form video scripts, I create copy that communicates clearly while maintaining the personality of the brand.",
    tags: ["Captions", "CTAs", "Scripts", "Storytelling"],
  },
  {
    title: "Short-Form & On-Camera Content",
    value: "Taking ideas from concept to camera.",
    description:
      "I create social-first videos for TikTok, Instagram and Facebook, contributing to ideation, scripting, creative direction and on-camera delivery.",
    tags: ["Reels", "TikTok", "Scripting", "On-camera"],
  },
  {
    title: "Community Engagement",
    value: "Turning an audience into a community.",
    description:
      "I support audience relationships through thoughtful interactions, comment engagement and timely responses that help brands remain approachable and connected.",
    tags: ["Community", "Audience Engagement", "Brand Voice"],
  },
  {
    title: "Virtual Assistant Support",
    value: "Keeping the work behind the content organised.",
    description:
      "I support digital workflows through research, organisation, communication and administrative coordination — helping projects move from idea to execution.",
    tags: ["Research", "Organisation", "Communication", "Coordination"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-medium text-[#111111]">
          What I Do
        </h1>
        <div className="mt-10 grid md:grid-cols-2 gap-6 lg:gap-10">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex min-w-0 flex-col"
            >
              <h2 className="text-lg font-medium text-[#111111]">
                {service.title}
              </h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-[#333333]">
                {service.value}
              </p>
              <p className="mt-3 text-sm text-[#6B6B6B] font-light leading-relaxed">
                {service.description}
              </p>
              <ul
                aria-label={`${service.title} skills`}
                className="mt-auto flex flex-wrap gap-2 pt-6"
              >
                {service.tags.map((tag) => (
                  <li key={tag} className="max-w-full">
                    <Tag>{tag}</Tag>
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
