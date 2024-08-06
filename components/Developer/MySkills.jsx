import Image from "next/image";
import { backendSkills, frontendSkills, tools } from "../../constants/Arrays";

const SkillsGrid = ({ skills, title }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-foreground">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
      {skills.map((item, index) => (
        <div
          key={index}
          className={`${
            item.additionalClasses || ""
          } bg-[#1A1A27] hover:bg-[#222233] transition-all duration-700 ease-in-out p-2 md:p-4 rounded-2xl text-center max-sm:text-xs`}
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
      className=" w-full h-full flex flex-col  rounded-lg shadow-md p-10 overflow-clip"
    >
      <h2 className="text-2xl font-bold  mb-4">TECHNOLOGIES</h2>
      <SkillsGrid skills={backendSkills} title="Backend" />
      <SkillsGrid skills={frontendSkills} title="Frontend" />
      <SkillsGrid skills={tools} title="Tools" />
    </div>
  );
}
