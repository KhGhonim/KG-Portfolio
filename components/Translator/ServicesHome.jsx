import Image from "next/image";
import Link from "next/link";

export default function ServicesHome() {
  return (
    <div className="w-screen container mx-auto max-md:pt-44 pb-32 max-md:pb-16  md:border-r-2 md:border-l-2  border-black relative z-30 ">
      {/* Desktop Services */}
      <div className="hidden md:flex flex-col md:flex-row items-center p-6 ">
        <div className="flex flex-col max-md:items-center w-2/3 gap-5">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="hidden max-md:block text-lg font-bold">
              Translator | Subtitler | Transcriptionist | Post Editor
            </h2>
            <Image
              width={600}
              height={300}
              quality={100}
              src="/DIHAD_Exhibition-08.jpg"
              alt="Coding setup"
              className="rounded-xl shadow-lg transition-all mb-3 duration-500 cursor-pointer hover:scale-105"
            />
          </div>
          <div className="flex-1 md:ml-6">
            <h2 className="hidden md:block text-3xl font-bold">
              Translator | Subtitler | Transcriptionist | Post Editor
            </h2>
            <p className="mt-4 text-muted-foreground">
              As a dedicated Translator, Subtitler, and Transcriptionist with a
              decade of experience, I transform language barriers into bridges.
              My expertise ensures your content is clear, accurate, and
              culturally resonant. From precise translations and captivating
              subtitles to meticulous transcriptions, I enhance your message and
              broaden your reach. Let's make your words connect and engage
              audiences globally.
            </p>
          </div>
        </div>

        <div className="w-1/3 text-center flex flex-col gap-5 ">
          <h3 className="text-5xl font-bold">SERVICES</h3>
          <div className="flex justify-center mt-2">
            <Link href={"/Translator/Subtitling"}>
              <Image
                width={50}
                height={300}
                quality={100}
                src="/subtitles.png"
                alt="Subtitles"
                className="mx-2 transition-transform transform hover:scale-125 cursor-pointer"
              />
            </Link>

            <Link href={"/Translator/Transcription"}>
              <Image
                width={50}
                height={300}
                quality={100}
                src="/transcription.png"
                alt="Transcription"
                className="mx-2 transition-transform transform hover:scale-125 cursor-pointer"
              />
            </Link>
            <Link href={"/Translator/Translating"}>
              <Image
                width={50}
                height={300}
                quality={100}
                src="/translate.png"
                alt="Subtitles"
                className="mx-2 transition-transform transform hover:scale-125 cursor-pointer"
              />
            </Link>
            <Link href={"/Translator/PE"}>
              <Image
                width={50}
                height={300}
                quality={100}
                src="/translating.png"
                alt="Subtitles"
                className="mx-2 transition-transform transform hover:scale-125 cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex  max-sm:flex-col gap-5 max-md:w-[100%]">
            <Link
              className="relative uppercase  shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 font-semibold p-2  sm:px-14 text-sm sm:text-base text-black bg-[#FF4654] border md:border-2 border-black "
              href={"/Translator/Resume"}
            >
              My Resume
            </Link>
            <Link
              className="relative flex justify-center items-center text-center shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all duration-500  uppercase font-semibold   text-sm sm:text-base  text-black bg-gray-100 border md:border-2 border-black"
              href={"/Translator/Services"}
            >
              Read More about SERVICES
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Services */}
      <div className="hidden max-md:flex flex-col  items-center p-6 ">
        <div className="flex flex-col max-md:items-center  gap-5">
          <div className="flex-1 mb-6 text-center">
            <h3 className="text-5xl font-bold py-5">SERVICES</h3>
            <Image
              width={600}
              height={300}
              quality={100}
              src="/DIHAD_Exhibition-08.jpg"
              alt="Coding setup"
              className="rounded-xl shadow-lg transition-all mb-3 duration-500 cursor-pointer hover:scale-105"
            />
          </div>
          <div className="flex-1 ">
            <h2 className="block text-base font-bold">
              Translator | Subtitler | Transcriptionist | Post Editor
            </h2>

            <div className=" text-center flex flex-col items-center py-5 gap-5">
              <div className="flex justify-center mt-2">
                <Image
                  width={40}
                  height={300}
                  quality={100}
                  src="/subtitles.png"
                  alt="Subtitles"
                  className="mx-2 transition-transform transform hover:scale-125 cursor-pointer"
                />
                <Image
                  width={40}
                  height={300}
                  quality={100}
                  src="/transcription.png"
                  alt="Transcription"
                  className="mx-2 transition-transform transform hover:scale-125 cursor-pointer"
                />
                <Image
                  width={40}
                  height={300}
                  quality={100}
                  src="/translate.png"
                  alt="Subtitles"
                  className="mx-2 transition-transform transform hover:scale-125 cursor-pointer"
                />
                <Image
                  width={40}
                  height={300}
                  quality={100}
                  src="/translating.png"
                  alt="Subtitles"
                  className="mx-2 transition-transform transform hover:scale-125 cursor-pointer"
                />
              </div>
            </div>

            <p className="mt-4 font-weight-500 pb-9 text-justify">
              As a dedicated Translator, Subtitler, and Transcriptionist with a
              decade of experience, I transform language barriers into bridges.
              My expertise ensures your content is clear, accurate, and
              culturally resonant. From precise translations and captivating
              subtitles to meticulous transcriptions, I enhance your message and
              broaden your reach. Let's make your words connect and engage
              audiences globally.
            </p>
          </div>
        </div>

        <div className="flex  max-sm:flex-col gap-5 max-md:w-[100%]">
          <button className="relative uppercase  shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 font-semibold p-2  sm:px-14 text-sm sm:text-base text-black bg-[#FF4654] border md:border-2 border-black ">
            My Resume
          </button>
          <Link
            className="relative shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all duration-500  uppercase font-semibold p-2  text-sm sm:text-base  text-black bg-gray-100 border md:border-2 text-center border-black"
            href={"/Services"}
          >
            Read More about SERVICES
          </Link>
        </div>
      </div>
    </div>
  );
}
