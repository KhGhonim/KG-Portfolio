"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative !h-full !w-screen text-center text-white">
      <div className="relative z-10 py-4">
        <h1 className="bg-gradient-to-l from-[#2c1e11] to-[#ffffff] bg-clip-text text-3xl font-bold text-transparent md:text-3xl lg:!text-5xl">
          Welcome to my portfolio
        </h1>
        <p className="mt-4 text-sm md:text-xl">
          Please choose the service you want to see!
        </p>
      </div>
      <div className="absolute top-0 z-[-2] h-full w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] md:h-screen"></div>
      <AnimatePresence>
        <div className="relative !flex w-full flex-col items-center justify-center gap-4 py-5 text-center md:flex-row md:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 1 }}
            className="flex h-full w-full items-center justify-center md:w-1/2"
          >
            <Link target="_blank" href="https://dev.khaledghonim.com">
              <div className="container">
                <div className="book">
                  <div className="front flex w-full items-center justify-center lg:mt-32">
                    <Image
                      src="/Developer Book.png"
                      alt="Developer Page"
                      width={500}
                      height={300}
                      loading="eager"
                      className="w-48 md:w-44 lg:w-full"
                    />
                  </div>
                  <div className="back flex w-full items-center justify-center lg:mt-32">
                    <Image
                      src="/devback.png"
                      alt="Developer Page"
                      width={500}
                      height={300}
                      loading="eager"
                      className="w-48 md:w-44 lg:w-full"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 1 }}
            className="flex h-full w-full items-center justify-center p-4 md:w-1/2"
          >
            <Link target="_blank" href="https://translator.khaledghonim.com/">
              <div className="container">
                <div className="book">
                  <div className="front flex w-full items-center justify-center lg:mt-32">
                    <Image
                      src="/Translator Book.png"
                      alt="Translator Page"
                      width={400}
                      height={300}
                      loading="eager"
                      className="w-48 md:w-44 lg:w-full"
                    />
                  </div>
                  <div className="back flex w-full items-center justify-center lg:mt-32">
                    <Image
                      src="/Translatorback.png"
                      alt="Translator Page"
                      width={500}
                      height={300}
                      loading="eager"
                      className="w-48 md:w-44 lg:w-full"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
}
