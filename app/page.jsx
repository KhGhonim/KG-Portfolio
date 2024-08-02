import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="!w-screen !h-full text-white text-center  relative ">
      <div className="py-4">
        <h1 className="text-sm lg:!text-5xl md:text-3xl font-bold">
          Welcome to my portfolio!
        </h1>
        <p className="text-base md:text-xl mt-4">
          Please choose the service you want to see
        </p>
      </div>
      <div className="absolute top-0 z-[-2] h-full md:h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className="!flex flex-col md:flex-row w-full justify-center items-center gap-4 md:gap-0 text-center py-5">
        <div className="w-full md:w-1/2  h-full flex justify-center items-center">
          <Link href="/Developer">
            <div className="container">
              <div className="book">
                <div className="front w-full flex justify-center items-center lg:mt-32">
                  <Image
                    priority={true}
                    src="/Developer Book.png"
                    alt="Developer Page"
                    width={500}
                    height={300}
                    quality={100}
                    className="w-48 md:w-44  lg:w-full"
                  />
                </div>
                <div className="back w-full flex justify-center items-center lg:mt-32">
                  <Image
                    priority={true}
                    src="/devback.png"
                    alt="Developer Page"
                    width={500}
                    height={300}
                    quality={100}
                    className="w-48 md:w-44  lg:w-full"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full md:w-1/2 h-full p-4 flex justify-center items-center ">
          <Link href="/Translator">
            <div className="container">
              <div className="book">
                <div className="front w-full flex justify-center items-center lg:mt-32">
                  <Image
                    priority={true}
                    src="/Translator Book.png"
                    alt="Translator Page"
                    width={400}
                    height={300}
                    quality={100}
                    className="w-48 md:w-44  lg:w-full"
                  />
                </div>
                <div className="back w-full flex justify-center items-center lg:mt-32">
                  <Image
                    priority={true}
                    src="/Translatorback.png"
                    alt="Developer Page"
                    width={500}
                    height={300}
                    quality={100}
                    className="w-48 md:w-44  lg:w-full"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
