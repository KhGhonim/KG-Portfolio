import Link from "next/link";
import ProjectHomeSlider from "./ProjectHomeSlider";

export default function ProjectsHome() {
  return (
    <div className="w-screen h-dvh ">
      <div className="container mx-auto relative z-20 md:py-20 md:border-r-2   md:border-black  h-dvh md:pl-44">
        <div className="flex flex-row max-md:flex-col items-center justify-between gap-8  md:gap-2  w-full p-4">
          <div className="w-full md:w-1/3">
            <h2 className="text-5xl font-bold text-primary">PROJECTS</h2>
            <p className="mt-4 text-lg">
              A glimpse into my work, showcasing the meticulous attention to
              detail and client-centric approach I bring to every project. From
              translating and subtitling to transcription and post-editing, I
              ensure your content is precise, engaging, and impactful. Click the
              button to see my projects.
            </p>
            <div className="flex  max-sm:flex-col  max-md:w-[100%] mt-4">
              <Link
                className="relative uppercase text-center shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 font-semibold p-2  sm:px-14 text-sm sm:text-base text-white bg-[#FF4654] border md:border-2 border-black "
                href={"/Translator/Projects"}
              >
                See Projects
              </Link>
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-grow overflow-hidden rounded-3xl pr-3 ">
            <ProjectHomeSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
