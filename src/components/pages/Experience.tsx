import ExperienceCard from "../ExperienceCard";
import { experiences } from "../../data/experiences";
import SelectedWork from "../SelectedWork";

export default function Experience() {
  return (
    <>
    <section id="experience" className="bg-[#F7F7F7] px-6 md:px-16 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-medium text-[#111111]">
          Experience
        </h1>
        <div className="mt-10 space-y-10">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
      <SelectedWork />
    </>
  );
}
