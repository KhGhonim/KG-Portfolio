"use client";
import Lottie from "lottie-react";
import Link from "next/link";
import Translation from "../../../Assets/Translation and Localization.json";
import Interepreter from "../../../Assets/Interepreter Over Phone.json";
import Subtitles from "../../../Assets/Subtitles.json";
import PE from "../../../Assets/PE.json";
import Transcription from "../../../Assets/Transcriptionist.json";
import Management from "../../../Assets/Management.json";
import SocialMedia from "../../../components/Translator/SocialMedia";
import { projects, serviceNames } from "../../../constants/Arrays";

const animationMap = {
  Translation: Translation,
  Proofreading: Interepreter,
  Management: Management,
  Transcription: Transcription,
  Subtitling: Subtitles,
  PE: PE,
};
export default function Services({ service }) {
  const ProjectService = projects.find(
    (project) => project.category === service
  );
  const displayName = serviceNames[service] || null;
  const animationData = animationMap[service] || null;

  return (
    <>
      <div className="container mx-auto relative z-20  h-dvh ">
        <div className="flex flex-row max-md:flex-col-reverse items-center justify-between gap-8  md:gap-2  w-full p-4">
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl md:text-7xl  font-bold">
              {displayName ? displayName : "Service not found"}
            </h2>
            <p className="mt-4 text-lg">
              As a dedicated Translator and localization specialist, I
              specialize in providing professional and high-quality translations
              in Turkish, English and Arabic. I am committed to providing
              exceptional service and support.
            </p>
            <div className="flex  max-sm:flex-col  max-md:w-[100%] mt-4">
              <Link
                className="relative uppercase text-center shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 font-semibold p-2  sm:px-14 text-sm sm:text-base text-white bg-[#FF4654] border md:border-2 border-black "
                href={"#projects"}
              >
                <span className="mr-1">
                  {" "}
                  {animationMap ? displayName : "Service not found"}
                </span>
                Projects!
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {animationData ? (
              <Lottie animationData={animationData} loop={true} />
            ) : (
              <p>No animation available for this service.</p>
            )}
          </div>
        </div>
      </div>

      <SocialMedia />

      <div className="min-h-screen container mx-auto border-r-2 border-l-2 border-black max-md:mt-52  p-6 md:p-12 text-center relative z-30">
        <div className="max-w-7xl mx-auto">
          <h1 id="projects" className="text-4xl md:text-7xl font-bold mb-4">
            {service}
          </h1>
          <p className="text-lg my-8">
            Those are most of the International project I've worked over it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 ">
            {ProjectService.items.map((projectItem, index) => {
              return (
                <div
                  key={index}
                  className=" p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-700 cursor-pointer"
                >
                  <img
                    src={projectItem.imgSrc}
                    alt={`Project ${index + 1} of Translation and Localization`}
                    className="w-full h-48 md:h-64 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-xl font-semibold  mb-2">
                    {projectItem.title}
                  </h2>
                  <p className="text- mb-4">{projectItem.description}</p>
                  <div className="text-sm text-start flex flex-row gap-2 justify-start items-center">
                    <span className="font-semibold">Used Tech:</span>{" "}
                    {projectItem.usedTech.map((tech, index) => {
                      return (
                        <span
                          key={index}
                          className="bg-gray-300 px-1 py-1 rounded-3xl text-black font-bold text-xs text-center"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
