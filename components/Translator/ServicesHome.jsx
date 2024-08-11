import Image from "next/image";
import Link from "next/link";

export default function ServicesHome() {
  return (
    <div className="container relative z-30 mx-auto w-screen border-black pb-32 max-md:pb-16 max-md:pt-44 md:border-l-2 md:border-r-2">
      {/* Desktop Services */}
      <div className="hidden flex-col items-center p-6 md:flex md:flex-row">
        <div className="flex w-2/3 flex-col gap-5 max-md:items-center">
          <div className="mb-6 flex-1 md:mb-0">
            <h2 className="hidden text-lg font-bold max-md:block">
              Translator | Subtitler | Transcriptionist | Post Editor
            </h2>
            <Image
              width={600}
              height={300}
              quality={100}
              src="/DIHAD_Exhibition-08.jpg"
              alt="Coding setup"
              className="mb-3 cursor-pointer rounded-xl shadow-lg transition-all duration-500 hover:scale-105"
            />
          </div>
          <div className="flex-1 md:ml-6">
            <h2 className="hidden text-3xl font-bold md:block">
              Translator | Subtitler | Transcriptionist | Post Editor
            </h2>
            <p className="text-muted-foreground mt-4">
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

        <div className="flex w-1/3 flex-col gap-5 text-center">
          <h3 className="text-5xl font-bold">SERVICES</h3>
          <div className="mt-2 flex justify-center">
            <Link href={"/Translator/Subtitling"}>
              <Image
                width={50}
                height={300}
                quality={100}
                src="/subtitles.png"
                alt="Subtitles"
                className="mx-2 transform cursor-pointer transition-transform hover:scale-125"
              />
            </Link>

            <Link href={"/Translator/Transcription"}>
              <Image
                width={50}
                height={300}
                quality={100}
                src="/transcription.png"
                alt="Transcription"
                className="mx-2 transform cursor-pointer transition-transform hover:scale-125"
              />
            </Link>
            <Link href={"/Translator/Translating"}>
              <Image
                width={50}
                height={300}
                quality={100}
                src="/translate.png"
                alt="Subtitles"
                className="mx-2 transform cursor-pointer transition-transform hover:scale-125"
              />
            </Link>
            <Link href={"/Translator/PE"}>
              <Image
                width={50}
                height={300}
                quality={100}
                src="/translating.png"
                alt="Subtitles"
                className="mx-2 transform cursor-pointer transition-transform hover:scale-125"
              />
            </Link>
          </div>
          <div className="flex gap-5 max-md:w-[100%] max-sm:flex-col">
            <Link
              className="relative border border-black bg-[#FF4654] p-2 text-sm font-semibold uppercase text-black shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] transition-all duration-500 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] sm:px-14 sm:text-base md:border-2"
              href={"/Translator/Resume"}
            >
              My Resume
            </Link>
            <Link
              className="relative flex items-center justify-center border border-black bg-gray-100 text-center text-sm font-semibold uppercase text-black shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] transition-all duration-500 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] sm:text-base md:border-2"
              href={"/Translator/Services"}
            >
              Read More about SERVICES
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Services */}
      <div className="hidden flex-col items-center p-6 max-md:flex">
        <div className="flex flex-col gap-5 max-md:items-center">
          <div className="mb-6 flex-1 text-center">
            <h3 className="py-5 text-5xl font-bold">SERVICES</h3>
            <Image
              width={600}
              height={300}
              quality={100}
              src="/DIHAD_Exhibition-08.jpg"
              alt="Coding setup"
              className="mb-3 cursor-pointer rounded-xl shadow-lg transition-all duration-500 hover:scale-105"
            />
          </div>
          <div className="flex-1">
            <h2 className="block text-base font-bold">
              Translator | Subtitler | Transcriptionist | Post Editor
            </h2>

            <div className="flex flex-col items-center gap-5 py-5 text-center">
              <div className="mt-2 flex justify-center">
                <Image
                  width={40}
                  height={300}
                  quality={100}
                  src="/subtitles.png"
                  alt="Subtitles"
                  className="mx-2 transform cursor-pointer transition-transform hover:scale-125"
                />
                <Image
                  width={40}
                  height={300}
                  quality={100}
                  src="/transcription.png"
                  alt="Transcription"
                  className="mx-2 transform cursor-pointer transition-transform hover:scale-125"
                />
                <Image
                  width={40}
                  height={300}
                  quality={100}
                  src="/translate.png"
                  alt="Subtitles"
                  className="mx-2 transform cursor-pointer transition-transform hover:scale-125"
                />
                <Image
                  width={40}
                  height={300}
                  quality={100}
                  src="/translating.png"
                  alt="Subtitles"
                  className="mx-2 transform cursor-pointer transition-transform hover:scale-125"
                />
              </div>
            </div>

            <p className="font-weight-500 mt-4 pb-9 text-justify">
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

        <div className="flex gap-5 max-md:w-[100%] max-sm:flex-col">
          <Link
            className="relative border text-center border-black bg-[#FF4654] p-2 text-sm font-semibold uppercase text-black shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] transition-all duration-500 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] sm:px-14 sm:text-base md:border-2"
            href={"/Translator/Resume"}
          >
            My Resume
          </Link>
          <Link
            className="relative border border-black bg-gray-100 p-2 text-center text-sm font-semibold uppercase text-black shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] transition-all duration-500 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] sm:text-base md:border-2"
            href={"/Translator/Services"}
          >
            Read More about SERVICES
          </Link>
        </div>
      </div>
    </div>
  );
}
