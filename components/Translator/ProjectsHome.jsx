import Link from "next/link";
import ProjectHomeSlider from "./ProjectHomeSlider";

export default function ProjectsHome() {
  return (
    <div className="relative z-30 h-dvh w-screen">
      <div className="container relative z-20 mx-auto h-dvh md:border-r-2 md:border-black md:py-20 md:pl-56">
        <div className="flex w-full flex-row items-center justify-between gap-8 p-4 max-md:flex-col md:gap-2">
          <div className="w-full md:w-1/3">
            <h2 className="text-primary text-5xl font-bold">PROJECTS</h2>
            <p className="mt-4 text-lg">
              A glimpse into my work, showcasing the meticulous attention to
              detail and client-centric approach I bring to every project. From
              translating and subtitling to transcription and post-editing, I
              ensure your content is precise, engaging, and impactful. Click the
              button to see my projects.
            </p>
            <div className="mt-4 flex max-md:w-[100%] max-sm:flex-col">
              <Link
                className="relative border border-black bg-[#FF4654] p-2 text-center text-sm font-semibold uppercase text-white shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] transition-all duration-500 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] sm:px-14 sm:text-base md:border-2"
                href={"/Translator/Services"}
              >
                See Projects and Services
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-grow overflow-hidden md:pr-3 md:w-2/3">
            <ProjectHomeSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
