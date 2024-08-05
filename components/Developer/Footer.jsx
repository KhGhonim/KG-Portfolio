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
    <div className="container mx-auto rounded-t-3xl  devHeader mt-5 p-10 gap-6 relative">
      <FloatingBox position="hidden md:flex absolute border-4 border-white  h-56 w-56 -top-1/3 left-0" />

      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center ">
        <div className=" w-screen flex  flex-col md:flex-row items-center justify-between max-md:space-y-4">
          <div>
            <Image
              priority={true}
              className="object-cover w-24 rounded-full max-sm:w-10 max-sm:h-10  bg-white  hover:rotate-[30deg] scale-100 hover:scale-90 transition-all cursor-pointer duration-300"
              src="/KGLogo.svg"
              alt="Khaled Ghonim Logo"
              width={200}
              height={200}
              quality={100}
            />
          </div>

          <div className=" flex flex-col space-y-4 items-center">
            <div>
              <h1 className="text-xl md:text-3xl">Connect</h1>
            </div>
            <div className="flex space-x-4">
              <FaGithub className="text-3xl text-[#ffffff] rounded-xl hover:rotate-[30deg] scale-100 hover:scale-90 transition-all cursor-pointer duration-300" />
              <FaLinkedin className="text-3xl text-[#0077B5] rounded-xl hover:rotate-[30deg] scale-100 hover:scale-90 transition-all cursor-pointer duration-300" />
              <FaSkype className="text-3xl text-[#00AFF0] rounded-xl hover:rotate-[30deg] scale-100 hover:scale-90 transition-all cursor-pointer duration-300" />
              <FaTelegram className="text-3xl text-[#0088cc] rounded-xl hover:rotate-[30deg] scale-100 hover:scale-90 transition-all cursor-pointer duration-300" />
              <FaWhatsapp className="text-3xl text-[#25D366] rounded-xl hover:rotate-[30deg] scale-100 hover:scale-90 transition-all cursor-pointer duration-300" />
            </div>
          </div>
        </div>
      </div>

      <p className=" text-sm text-center mt-3">
        © 2024 <span className="font-semibold bg-gradient-to-b from-[#2c1e11] to-[#ffffff] bg-clip-text text-transparent">Khaled Ghonim</span>. All rights reserved.
      </p>
    </div>
  );
}
