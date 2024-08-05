import Link from "next/link";
import ConnectForm from "./ConnectForm";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Connect() {
  return (
    <section className="bg-[#1A1A27] text-white p-8 md:p-16 rounded-md flex flex-col md:flex-row justify-between items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">
          Connect with Me with Confidence
        </h2>
        <p className="text-muted-foreground mb-6">
          Please fill out the form on this section to contact with me. Or call
          between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday.
        </p>
        <div className="mb-6 space-y-2">
          <p className="flex items-center">
            <span className="mr-2 text-accent">
              <FaPhone size={20} color="#FF4654" />
            </span>
            <span className="text-secondary">Call me</span>
            <Link className="ml-2 group relative" href={"callto:05319045891"}>
              +90 531 904 58 91
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </Link>
          </p>
          <p className="flex items-center">
            <span className="mr-2 text-accent">
              <MdEmail size={20} color="#fff" />
            </span>
            <span className="text-secondary">Email</span>
            <Link
              className="ml-2 text-primary group relative"
              href={"mailto:Khaledonem@gmail.com"}
            >
              Khaledonem@gmail.com
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </Link>
          </p>
        </div>
      </div>
      <ConnectForm />
    </section>
  );
}
