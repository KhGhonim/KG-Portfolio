import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="relative z-20">
<section className="py-6 ">
	<div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
		<div className="flex flex-col space-y-4 text-center lg:text-left">
			<h1 className="text-5xl font-bold leading-none">Stay in the loop</h1>
			<p className="text-lg">Doloribus consectetur quasi ipsa quo neque culpa blanditiis ducimus recusandae a veritatis optio cumque, in harum ad nam!</p>
		</div>
		<div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
			<div className="flex flex-row">
				<input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
				<button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-600 dark:text-gray-50">Subscribe</button>
			</div>
		</div>
	</div>
</section>

      <footer className="bg-black text-white py-10">
        <div className="container mx-auto flex justify-between max-md:flex-col gap-10 max-md:p-6">
          <div>
            <h3 className="font-bold mb-4">SOCIALS</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-[#4267B2] transition-all duration-500 flex items-center gap-5"
                >
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-[#E1306C] transition-all duration-500 flex items-center gap-5"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-[#25D366] transition-all duration-500 flex items-center gap-5"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-[#0077B5] transition-all duration-500 flex items-center gap-5"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-[#6e7e8d] transition-all duration-500 flex items-center gap-5"
                >
                  <FaGithub /> GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">LINKS</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="/"
                  className="hover:text-red-500 transition-all duration-500 flex items-center gap-5"
                >
            <FaHome />      Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/Services"
                  className="hover:text-red-500 transition-all duration-500 flex items-center gap-5"
                >
                <RiCustomerService2Fill />  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/Projects"
                  className="hover:text-red-500 transition-all duration-500 flex items-center gap-5"
                >
              <AiFillProject />    Projects
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/Resume"
                  className="hover:text-red-500 transition-all duration-500 flex items-center gap-5"
                >
            <IoPersonOutline />      Resume
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/Contact"
                  className="hover:text-red-500 transition-all duration-500 flex items-center gap-5"
                >
              <MdOutlineContactSupport />    Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">SERVICES</h3>
            <ul>
              <li className="mb-2 cursor-pointer">Translation</li>
              <li className="mb-2 cursor-pointer">Subtitling</li>
              <li className="mb-2 cursor-pointer">Transcription</li>
              <li className="mb-2 cursor-pointer">Post Editing</li>
              <li className="mb-2 cursor-pointer">Proofreading</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">LATEST BLOGS</h3>
            <ul>
              <li className="mb-2">How to hire a reliable web designer</li>
              <li className="mb-2">Website vs web application</li>
              <li className="mb-2">
                VAT exemption as international not worth it
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-red-500 transition-all duration-500 hover:underline"
                >
                  MORE BLOGS →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
