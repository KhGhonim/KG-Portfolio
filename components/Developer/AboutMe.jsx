import Image from "next/image";
import { IoArrowDownOutline } from "react-icons/io5";
import Link from "next/link";
import FloatingBoxX from "./FloatingBoxX";
import FloatingBoxY from "./FloatingBoxY";

export default function AboutMe() {
  const googleDriveFileId = "1Y_UaK07f3wEeGi9p_VdyksRNTiaP8WJl"; // Replace with your file ID from Google Drive
  const downloadLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
  return (
    <div
      className="flex h-dvh w-full items-center justify-between"
      id="AboutMe"
    >
      <div className="relative hidden h-full w-2/6 items-center justify-center md:flex lg:mt-32">
        <FloatingBoxX position="left-10 top-0 border-4 border-white" />
        <div className="h-56 w-72 md:h-96 md:w-96">
          <Image
            priority={true}
            className="relative z-10 h-full w-96 rounded-3xl object-cover"
            src="/fetih.jpg"
            alt="Services"
            width={200}
            height={200}
            quality={100}
          />
        </div>
        <FloatingBoxX position="left-0 bottom-[10%] bg-[#1A1A27] z-[-1]" />
      </div>

      <div className="relative h-full w-4/6 space-y-4 p-4 md:w-full">
        <p className="text-xl font-medium text-[#FF4654] md:text-4xl">
          About Me
        </p>
        <h1 className="text-xl font-semibold md:text-6xl">I'm Khaled Ghonim</h1>
        <h1 className="text-xl font-medium md:text-4xl">
          Web <span className="text-[#FF4654]">Developer</span>
        </h1>
        <p className="text-lg">Based In Türkiye, İstanbul</p>
        <p className="text-lg">
          Hi! My name is Khaled Ghonim. I am UI/UX designer, and I'm very
          passionate and dedicated to my work.
        </p>

        <div className="flex items-center justify-end">
          <Link
            className="flex flex-row items-center gap-2 rounded-xl bg-[#FF4654] p-2 text-white transition-all duration-200 ease-in-out hover:bg-[#FF4654]/70"
            href={downloadLink}
          >
            Download CV <IoArrowDownOutline size={15} />
          </Link>
        </div>
        <FloatingBoxX position="flex md:hidden bottom-0 left-24 bg-red-500 " />
      </div>

      <div className="relative flex h-full w-2/6 items-end justify-end pb-6 lg:mt-32">
        <FloatingBoxY position="-right-48 bottom-1/4 bg-[#1A1A27] z-[-1]" />
        <div className="h-56 w-72 md:h-96 md:w-96">
          <Image
            priority={true}
            className="relative z-10 h-full w-96 rounded-3xl object-cover"
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
