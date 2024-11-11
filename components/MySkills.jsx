import Image from "next/image";
import { backendSkills, frontendSkills, tools } from "../constants/Arrays";

const SkillsGrid = ({ skills, title }) => (
  <div className="mb-6">
    <h3 className="text-foreground text-xl font-semibold">{title}</h3>
    <div className="mt-2 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {skills.map((item, index) => (
        <div
          key={index}
          className={`${
            item.additionalClasses || ""
          } rounded-2xl bg-[#1A1A27] p-2 text-center transition-all duration-700 ease-in-out hover:bg-[#222233] max-sm:text-xs md:p-4`}
        >
          <Image
            src={item.image}
            alt={item.alt}
            width={50}
            height={50}
            quality={100}
            className={item.imgClasses}
          />

          {item.text}
        </div>
      ))}
    </div>
  </div>
);

export default function MySkills() {
  return (
    <div
      id="skills"
      className="flex h-full w-full flex-col overflow-clip rounded-lg p-10 shadow-md"
    >
      <h2 className="mb-4 text-2xl font-bold">TECHNOLOGIES</h2>
      <SkillsGrid skills={backendSkills} title="Backend" />
      <SkillsGrid skills={frontendSkills} title="Frontend" />
      <SkillsGrid skills={tools} title="Tools" />
    </div>
  );
}
