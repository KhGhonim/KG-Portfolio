import Image from "next/image";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div>
      {/* PC Socail Media */}
      <div className="relative hidden md:block z-20  h-32">
        <div className="hidden absolute left-0 w-2/3 md:flex items-center justify-center  ">
          <hr className="flex-grow border-t border-black" />
          <div className="flex space-x-4 mx-4">
            <Link
              href="mailto:khaledonem89@gmail.com"
              className="hover:scale-95 rounded-lg transition-all duration-500 hover:shadow-sm hover:rotate-[360deg]"
            >
              <Image
                width={50}
                height={50}
                quality={100}
                src="/mail.png"
                alt="email-icon"
              />
            </Link>
            <Link
              href="https://www.facebook.com/share/RMFAEgTHAzDKefJw/?mibextid=qi2Omg"
              className="hover:scale-95 rounded-lg transition-all duration-500 hover:shadow-sm hover:rotate-[360deg]"
            >
              <Image
                width={50}
                height={50}
                quality={100}
                src="/facebook.png"
                alt="fb-icon"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/khaled-ghonim-4a4007147"
              className="hover:scale-95 rounded-lg transition-all duration-500 hover:shadow-sm hover:rotate-[360deg]"
            >
              <Image
                width={50}
                height={50}
                quality={100}
                src="/linkedin.png"
                alt="linkedin-icon"
              />
            </Link>
            <Link
              href="https://join.skype.com/invite/kqyhKpADi29m"
              className="hover:scale-95 rounded-lg transition-all duration-500 hover:shadow-sm hover:rotate-[360deg]"
            >
              <Image
                width={50}
                height={50}
                quality={100}
                src="/skype.png"
                alt="skype-icon"
              />
            </Link>
            <Link
              href="https://wa.me/905319045891"
              className="hover:scale-95 rounded-lg transition-all duration-500 hover:shadow-sm hover:rotate-[360deg]"
            >
              <Image
                width={50}
                height={50}
                quality={100}
                src="/whatsapp.png"
                alt="whatsapp-icon"
              />
            </Link>
          </div>
          <hr className="flex-grow border-t border-black" />
        </div>

        <div className="w-1/3"></div>
      </div>

      {/* Mobile Socail Media */}

      <div className="hidden absolute right-0 w-full max-md:flex items-center justify-center py-28 max-md:py-36 z-30">
        <hr className="w-5 max-md:w-10 ma border-2 border-red-400" />
        <div className="flex space-x-4 mx-4">
          <Link
            href="mailto:khaledonem89@gmail.com"
            className="hover:scale-95 rounded-lg hover:shadow-sm"
          >
            <Image
              width={50}
              height={50}
              quality={100}
              src="/mail.png"
              alt="email-icon"
            />
          </Link>
          <Link
            href="https://facebook.com"
            className="hover:scale-95 rounded-lg hover:shadow-sm"
          >
            <Image
              width={50}
              height={50}
              quality={100}
              src="/facebook.png"
              alt="fb-icon"
            />
          </Link>
          <Link
            href="https://instagram.com"
            className="hover:scale-95 rounded-lg hover:shadow-sm"
          >
            <Image
              width={50}
              height={50}
              quality={100}
              src="/linkedin.png"
              alt="linkedin-icon"
            />
          </Link>
          <Link
            href="https://google.com"
            className="hover:scale-95 rounded-lg hover:shadow-sm"
          >
            <Image
              width={50}
              height={50}
              quality={100}
              src="/skype.png"
              alt="skype-icon"
            />
          </Link>
          <Link
            href="https://linkedin.com"
            className="hover:scale-95 rounded-lg hover:shadow-sm"
          >
            <Image
              width={50}
              height={50}
              quality={100}
              src="/whatsapp.png"
              alt="whatsapp-icon"
            />
          </Link>
        </div>
        <hr className="w-5 max-md:w-10 border-2 border-red-400" />
      </div>
    </div>
  );
}
