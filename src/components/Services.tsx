const services = [
  {
    title: "Social Media Management",
    description:
      "Managing and publishing content across Instagram, TikTok, Facebook, and X, and keeping a brand's presence consistent day to day.",
  },
  {
    title: "Content Planning & Strategy",
    description:
      "Building monthly content calendars, developing topics, and turning a brand's services or products into a steady stream of content ideas.",
  },
  {
    title: "Caption & Script Writing",
    description:
      "Writing captions, calls to action, and scripts that tell a clear story and communicate a brand's message simply.",
  },
  {
    title: "Short-Form & On-Camera Content",
    description:
      "Creating talking-head videos, skits, and trend-based content — handling the creative direction, scripting, and on-camera performance.",
  },
  {
    title: "Community Engagement",
    description:
      "Responding to comments and interacting with audiences to keep a brand's social presence active and personable.",
  },
  {
    title: "Virtual Assistant Support",
    description:
      "Admin and organizational support using tools like Trello, Asana, ClickUp, Google Workspace, and Microsoft Office.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-[#111111]">
          What I do
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {services.map((service) => (
            <div key={service.title} className="border-t border-[#E3E3E3] pt-4">
              <h3 className="text-lg font-medium text-[#111111]">
                {service.title}
              </h3>
              <p className="mt-2 text-[#6B6B6B] font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
