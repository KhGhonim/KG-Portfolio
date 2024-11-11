import Image from "next/image";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div>
      {/* PC Socail Media */}
      <div className="relative z-20 hidden h-32 md:block">
        <div className="absolute left-0 hidden w-2/3 items-center justify-center md:flex">
          <hr className="flex-grow border-t border-black" />
          <div className="mx-4 flex space-x-4">
            <Link
              href="mailto:kg@khaledghonim.com"
              className="rounded-lg transition-all duration-500 hover:rotate-[360deg] hover:scale-95 hover:shadow-sm"
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
              className="rounded-lg transition-all duration-500 hover:rotate-[360deg] hover:scale-95 hover:shadow-sm"
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
              className="rounded-lg transition-all duration-500 hover:rotate-[360deg] hover:scale-95 hover:shadow-sm"
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
              className="rounded-lg transition-all duration-500 hover:rotate-[360deg] hover:scale-95 hover:shadow-sm"
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
              href="https://wa.me/905516688908"
              className="rounded-lg transition-all duration-500 hover:rotate-[360deg] hover:scale-95 hover:shadow-sm"
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

      <div className="absolute right-0 z-50 hidden w-full items-center justify-center py-28 max-md:flex max-md:py-36">
        <hr className="ma w-5 border-2 border-red-400 max-md:w-10" />
        <div className="mx-4 flex space-x-4">
          <Link
            href="mailto:kg@khaledghonim.com"
            className="rounded-lg hover:scale-95 hover:shadow-sm"
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
            className="rounded-lg hover:scale-95 hover:shadow-sm"
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
            className="rounded-lg hover:scale-95 hover:shadow-sm"
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
            className="rounded-lg hover:scale-95 hover:shadow-sm"
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
            href="https://wa.me/905516688908"
            className="rounded-lg hover:scale-95 hover:shadow-sm"
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
        <hr className="w-5 border-2 border-red-400 max-md:w-10" />
      </div>
    </div>
  );
}
