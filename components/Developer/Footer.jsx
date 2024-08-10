import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaSkype,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import FloatingBox from "./FloatingBoxX";

export default function Footer() {
  return (
    <div
      id="form-contact"
      className="devHeader container relative mx-auto mt-5 gap-6 rounded-t-3xl p-10"
    >
      <FloatingBox position="hidden md:flex absolute border-4 border-white   h-56 w-56 -top-1/3 left-0" />

      <div className="flex flex-col items-center justify-center text-center md:flex-row md:justify-between">
        <div className="flex w-screen flex-col items-center justify-between max-md:space-y-4 md:flex-row">
          <div>
            <Image
              priority={true}
              className="w-24 scale-100 cursor-pointer rounded-full bg-white object-cover transition-all duration-300 hover:rotate-[30deg] hover:scale-90 max-sm:h-10 max-sm:w-10"
              src="/KGLogo.svg"
              alt="Khaled Ghonim Logo"
              width={200}
              height={200}
              quality={100}
            />
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div>
              <h1 className="text-xl md:text-3xl">Connect</h1>
            </div>
            <div className="flex space-x-4">
              <FaGithub className="scale-100 cursor-pointer rounded-xl text-3xl text-[#ffffff] transition-all duration-300 hover:rotate-[30deg] hover:scale-90" />
              <FaLinkedin className="scale-100 cursor-pointer rounded-xl text-3xl text-[#0077B5] transition-all duration-300 hover:rotate-[30deg] hover:scale-90" />
              <FaSkype className="scale-100 cursor-pointer rounded-xl text-3xl text-[#00AFF0] transition-all duration-300 hover:rotate-[30deg] hover:scale-90" />
              <FaTelegram className="scale-100 cursor-pointer rounded-xl text-3xl text-[#0088cc] transition-all duration-300 hover:rotate-[30deg] hover:scale-90" />
              <FaWhatsapp className="scale-100 cursor-pointer rounded-xl text-3xl text-[#25D366] transition-all duration-300 hover:rotate-[30deg] hover:scale-90" />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-sm">
        © 2024{" "}
        <span className="bg-gradient-to-b from-[#2c1e11] to-[#ffffff] bg-clip-text font-semibold text-transparent">
          Khaled Ghonim
        </span>
        . All rights reserved.
      </p>
    </div>
  );
}
