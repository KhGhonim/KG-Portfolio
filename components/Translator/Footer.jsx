import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaSkype,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import FooterForm from "./FooterForm";

export default function Footer() {
  return (
    <div className="relative z-10  rounded-lg  overflow-hidden ">
      <Image
        src="/CallToAction.jpg"
        alt="footer"
        width={500}
        height={300}
        quality={100}
        className="hidden md:flex absolute -z-10 bg-cover w-full rounded-lg "
      />
      <section className="py-8 relative">
        <Image
          src="/CallToAction.jpg"
          alt="footer"
          width={500}
          height={300}
          quality={100}
          className="hidden max-md:flex opacity-80 absolute -z-10 bg-cover min-w-full h-full rounded-lg "
        />
        <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row ">
          <div className="flex flex-col space-y-4 text-center lg:text-left ">
            <h1 className="text-5xl font-bold leading-none">
              Ready to Elevate Your Content?
            </h1>
            <p className="text-lg font-semibold">
              Got questions or need a free sample of translation, video
              subtitling, or any other linguistic service? Just send an email!
              I'm here to help you bring your projects to life with precision
              and creativity. Let's make your vision a reality—reach out now,
              and let's get started!
            </p>
          </div>
          <FooterForm />
        </div>
      </section>

      <footer className="bg-black text-white py-10">
        <div className="container mx-auto flex justify-around max-md:flex-wrap gap-10 max-md:p-6">
          <div>
            <h3 className="font-extrabold text-lg mb-4">SOCIALS</h3>
            <ul>
              <li className="mb-2">
                <Link
                  href="https://www.facebook.com/share/RMFAEgTHAzDKefJw/?mibextid=qi2Omg"
                  className="hover:text-[#4267B2] transition-all duration-500 flex items-center gap-5"
                >
                  <FaFacebook /> Facebook
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://join.skype.com/invite/kqyhKpADi29m"
                  className="hover:text-[#00AFF0] transition-all duration-500 flex items-center gap-5"
                >
                  <FaSkype /> Skype
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://wa.me/905319045891"
                  className="hover:text-[#25D366] transition-all duration-500 flex items-center gap-5"
                >
                  <FaWhatsapp /> WhatsApp
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://www.linkedin.com/in/khaled-ghonim-4a4007147"
                  className="hover:text-[#0077B5] transition-all duration-500 flex items-center gap-5"
                >
                  <FaLinkedin /> LinkedIn
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://github.com/LoDaBeY?tab=repositories"
                  className="hover:text-[#6e7e8d] transition-all duration-500 flex items-center gap-5"
                >
                  <FaGithub /> GitHub
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-extrabold text-lg mb-4">LINKS</h3>
            <ul>
              <li className="mb-2">
                <Link
                  href="/"
                  className="hover:text-red-500 transition-all duration-500 flex items-center gap-5"
                >
                  <FaHome /> Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/Services"
                  className="hover:text-red-500 transition-all duration-500 flex items-center gap-5"
                >
                  <RiCustomerService2Fill /> Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/Projects"
                  className="hover:text-red-500 transition-all duration-500 flex items-center gap-5"
                >
                  <AiFillProject /> Projects
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/Resume"
                  className="hover:text-red-500 transition-all duration-500 flex items-center gap-5"
                >
                  <IoPersonOutline /> Resume
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/Contact"
                  className="hover:text-red-500 transition-all duration-500 flex items-center gap-5"
                >
                  <MdOutlineContactSupport /> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold text-lg mb-4">SERVICES</h3>
            <ul>
              <li className="mb-2 hover:underline hover:text-blue-400 transition-all duration-500">
                <Link href={"/Translation"}>Translation</Link>
              </li>
              <li className="mb-2 hover:underline hover:text-blue-400 transition-all duration-500">
                <Link href={"/Subtitling"}>Subtitling</Link>
              </li>
              <li className="mb-2 hover:underline hover:text-blue-400 transition-all duration-500">
                {" "}
                <Link href={"/Transcription"}>Transcription</Link>
              </li>
              <li className="mb-2 hover:underline hover:text-blue-400 transition-all duration-500">
                {" "}
                <Link href={"/PE"}>Post Editing</Link>
              </li>
              <li className="mb-2 hover:underline hover:text-blue-400 transition-all duration-500">
                {" "}
                <Link href={"/Proofreading"}>Proofreading</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="container mx-auto w-full h-0.5 bg-gray-500 my-10"></div>
        </div>
        <div className=" text-sm text-center text-gray-50">
          © 2024 Khaled Ghonim Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
