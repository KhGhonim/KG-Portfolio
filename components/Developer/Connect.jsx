import Link from "next/link";
import ConnectForm from "./ConnectForm";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Connect() {
  return (
    <section className="flex flex-col items-center justify-between rounded-md bg-[#1A1A27] p-8 text-white md:flex-row md:p-16">
      <div>
        <h2 className="mb-4 text-3xl font-bold">
          Connect with Me with Confidence
        </h2>
        <p className="text-muted-foreground mb-6">
          Please fill out the form on this section to contact with me. Or call
          between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday.
        </p>
        <div className="mb-6 space-y-2">
          <p className="flex items-center">
            <span className="text-accent mr-2">
              <FaPhone size={20} color="#FF4654" />
            </span>
            <span className="text-secondary">Call me</span>
            <Link className="group relative ml-2" href={"callto:05319045891"}>
              +90 531 904 58 91
              <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-white transition-transform duration-500 group-hover:scale-x-100"></span>
            </Link>
          </p>
          <p className="flex items-center">
            <span className="text-accent mr-2">
              <MdEmail size={20} color="#fff" />
            </span>
            <span className="text-secondary">Email</span>
            <Link
              className="text-primary group relative ml-2"
              href={"mailto:Khaledonem@gmail.com"}
            >
              Khaledonem@gmail.com
              <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-white transition-transform duration-500 group-hover:scale-x-100"></span>
            </Link>
          </p>
        </div>
      </div>
      <ConnectForm />
    </section>
  );
}
