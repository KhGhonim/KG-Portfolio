import Image from "next/image";
import { IoArrowDownOutline } from "react-icons/io5";
import Link from "next/link";
import FloatingBoxX from "./FloatingBoxX";
import FloatingBoxY from "./FloatingBoxY";

export default function AboutMe() {
  const googleDriveFileId = "1DnY94DM3SE8gJTa1w85KbphEO7a2-dOi"; // Replace with your file ID from Google Drive
  const downloadLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;

  return (
    <div className="w-full h-dvh flex justify-between items-center" id="AboutMe">
      <div className="hidden md:flex w-2/6 h-full justify-center items-center lg:mt-32 relative">
        <FloatingBoxX position="left-10 top-0 border-4 border-white" />
        <div className="h-56 w-72 md:h-96 md:w-96" >
          <Image
            priority={true}
            className="object-cover w-96 rounded-3xl relative h-full z-10"
            src="/fetih.jpg"
            alt="Services"
            width={200}
            height={200}
            quality={100}
          />
        </div>
        <FloatingBoxX position="left-0 bottom-[10%] bg-[#1A1A27] z-[-1]" />
      </div>

      <div className="w-4/6 md:w-full h-full space-y-4 p-4 relative">
        <p className="text-[#FF4654] font-medium text-xl md:text-4xl">
          About Me
        </p>
        <h1 className=" font-semibold text-xl md:text-6xl">
          I'm Khaled Ghonim
        </h1>
        <h1 className=" font-medium text-xl md:text-4xl">
          Web <span className="text-[#FF4654]">Developer</span>
        </h1>
        <p className="text-lg">Based In Türkiye, İstanbul</p>
        <p className="text-lg">
          Hi! My name is Khaled Ghonim. I am UI/UX designer, and I'm very
          passionate and dedicated to my work.
        </p>

        <div className="flex justify-end items-center">
          <Link
            className="text-white bg-[#FF4654] p-2 rounded-xl flex flex-row items-center gap-2 hover:bg-[#FF4654]/70 transition-all duration-200 ease-in-out"
            href={downloadLink}
          >
            Download CV <IoArrowDownOutline size={15} />
          </Link>
        </div>
        <FloatingBoxX position="flex md:hidden bottom-0 left-24 bg-red-500 " />
      </div>

      <div className="w-2/6 h-full flex justify-end items-end lg:mt-32 relative pb-6">
        <FloatingBoxY position="-right-48 bottom-1/4 bg-[#1A1A27] z-[-1]" />
        <div className="h-56 w-72 md:h-96 md:w-96">
          <Image
            priority={true}
            className="object-cover w-96 rounded-3xl relative h-full z-10"
            src="/dev1.jpg"
            alt="Services"
            width={200}
            height={200}
            quality={100}
          />
          <FloatingBoxY position="flex md:hidden top-32 left-0 bg-[#1A1A27] z-[-1]" />
        </div>
      </div>
    </div>
  );
}
