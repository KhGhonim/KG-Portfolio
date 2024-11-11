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
    <div className="relative z-10 overflow-hidden rounded-lg">
      <Image
        src="/CallToAction.jpg"
        alt="footer"
        width={500}
        height={300}
        quality={100}
        className="absolute -z-10 hidden w-full rounded-lg bg-cover md:flex"
      />
      <section className="relative py-8">
        <Image
          src="/CallToAction.jpg"
          alt="footer"
          width={500}
          height={300}
          quality={100}
          className="absolute -z-10 hidden h-full min-w-full rounded-lg bg-cover opacity-80 max-md:flex"
        />
        <div className="container mx-auto flex flex-col justify-center space-y-8 p-4 md:p-10 lg:flex-row lg:justify-between lg:space-x-12 lg:space-y-0">
          <div className="flex flex-col space-y-4 text-center lg:text-left">
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

      <footer className="bg-black py-10 text-white">
        <div className="container mx-auto flex justify-around gap-10 max-md:flex-wrap max-md:p-6">
          <div>
            <h3 className="mb-4 text-lg font-extrabold">SOCIALS</h3>
            <ul>
              <li className="mb-2">
                <Link
                  href="https://www.facebook.com/share/RMFAEgTHAzDKefJw/?mibextid=qi2Omg"
                  className="flex items-center gap-5 transition-all duration-500 hover:text-[#4267B2]"
                >
                  <FaFacebook /> Facebook
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://join.skype.com/invite/kqyhKpADi29m"
                  className="flex items-center gap-5 transition-all duration-500 hover:text-[#00AFF0]"
                >
                  <FaSkype /> Skype
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://wa.me/905319045891"
                  className="flex items-center gap-5 transition-all duration-500 hover:text-[#25D366]"
                >
                  <FaWhatsapp /> WhatsApp
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://www.linkedin.com/in/khaled-ghonim-4a4007147"
                  className="flex items-center gap-5 transition-all duration-500 hover:text-[#0077B5]"
                >
                  <FaLinkedin /> LinkedIn
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://github.com/LoDaBeY?tab=repositories"
                  className="flex items-center gap-5 transition-all duration-500 hover:text-[#6e7e8d]"
                >
                  <FaGithub /> GitHub
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-extrabold">LINKS</h3>
            <ul>
              <li className="mb-2">
                <Link
                  href=""
                  className="flex items-center gap-5 transition-all duration-500 hover:text-red-500"
                >
                  <FaHome /> Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/Services"
                  className="flex items-center gap-5 transition-all duration-500 hover:text-red-500"
                >
                  <RiCustomerService2Fill /> Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/Services/Translation"
                  className="flex items-center gap-5 transition-all duration-500 hover:text-red-500"
                >
                  <AiFillProject /> Projects
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/Resume"
                  className="flex items-center gap-5 transition-all duration-500 hover:text-red-500"
                >
                  <IoPersonOutline /> Resume
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/Contact"
                  className="flex items-center gap-5 transition-all duration-500 hover:text-red-500"
                >
                  <MdOutlineContactSupport /> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-extrabold">SERVICES</h3>
            <ul>
              <li className="mb-2 transition-all duration-500 hover:text-blue-400 hover:underline">
                <Link href={"/Services/Translation"}>Translation</Link>
              </li>
              <li className="mb-2 transition-all duration-500 hover:text-blue-400 hover:underline">
                <Link href={"/Services/Subtitling"}>Subtitling</Link>
              </li>
              <li className="mb-2 transition-all duration-500 hover:text-blue-400 hover:underline">
                {" "}
                <Link href={"/Services/Transcription"}>Transcription</Link>
              </li>
              <li className="mb-2 transition-all duration-500 hover:text-blue-400 hover:underline">
                {" "}
                <Link href={"/Services/PE"}>Post Editing</Link>
              </li>
              <li className="mb-2 transition-all duration-500 hover:text-blue-400 hover:underline">
                {" "}
                <Link href={"/Services/Proofreading"}>Proofreading</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="container mx-auto my-10 h-0.5 w-full bg-gray-500"></div>
        </div>
        <div className="text-center text-sm text-gray-50">
          © 2024 Khaled Ghonim Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
