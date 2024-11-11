import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaSkype,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import FloatingBox from "./FloatingBoxX";
import Link from "next/link";

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
              <Link href={"https://github.com/KhGhonim"}>
                <FaGithub className="scale-100 cursor-pointer rounded-xl text-3xl text-[#ffffff] transition-all duration-300 hover:rotate-[30deg] hover:scale-90" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/khaled-ghonim-4a4007147/"}
              >
                <FaLinkedin className="scale-100 cursor-pointer rounded-xl text-3xl text-[#0077B5] transition-all duration-300 hover:rotate-[30deg] hover:scale-90" />
              </Link>

              <Link href={"https://join.skype.com/invite/kqyhKpADi29m"}>
                <FaSkype className="scale-100 cursor-pointer rounded-xl text-3xl text-[#00AFF0] transition-all duration-300 hover:rotate-[30deg] hover:scale-90" />
              </Link>

              <Link href={"https://t.me/MrPoDGK"}>
                <FaTelegram className="scale-100 cursor-pointer rounded-xl text-3xl text-[#0088cc] transition-all duration-300 hover:rotate-[30deg] hover:scale-90" />
              </Link>
              <Link href={"https://wa.me/905516688908"}>
                <FaWhatsapp className="scale-100 cursor-pointer rounded-xl text-3xl text-[#25D366] transition-all duration-300 hover:rotate-[30deg] hover:scale-90" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-sm">
        © 2024{" "}
        <span className="bg-[url('https://comicbook.com/wp-content/uploads/sites/4/2023/12/73afece2-5149-4774-8e34-3ae632039d00.jpg')] bg-cover bg-clip-text bg-center font-semibold text-transparent">
          Khaled Ghonim
        </span>
        . All rights reserved.
      </p>
    </div>
  );
}
