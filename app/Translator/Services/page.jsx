"use client";
import Lottie from "lottie-react";
import ServicesHero from "../../../Assets/Services.json";
import Link from "next/link";
import { services } from "../../../constants/Arrays";
import SocialMedia from "../../../components/Translator/SocialMedia";
import { BsArrowDown } from "react-icons/bs";

export default function page() {
  return (
    <div>
      <div className="container mx-auto relative z-20  h-dvh ">
        <div className="flex flex-row max-md:flex-col-reverse items-center justify-between gap-8  md:gap-2  w-full p-4">
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl md:text-7xl  font-bold">SERVICES</h2>
            <p className="mt-4 text-lg">
              Freelance translator, subtitler, transcriber and more from
              Türkiye. Learn more about myself and discover how I can assist
              you.
            </p>
            <div className="flex  max-sm:flex-col  max-md:w-[100%] mt-4">
              <Link
                className="relative uppercase text-center shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 font-semibold p-2  sm:px-14 text-sm sm:text-base text-white bg-[#FF4654] border md:border-2 border-black "
                href={"#services"}
              >
                Let's see Services!
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Lottie animationData={ServicesHero} loop={true} />
          </div>
        </div>
      </div>

      <SocialMedia />

      <div className="min-h-screen container mx-auto border-r-2 border-l-2 border-black max-md:mt-52  p-6 md:p-12 text-center relative z-30">
        <div className="max-w-7xl mx-auto">
          <h1 id="services" className="text-4xl md:text-7xl font-bold mb-4">
            My Services
          </h1>
          <p className="text-lg my-8">
            Discover my comprehensive range of translation services,
            meticulously tailored to meet your diverse linguistic needs.
            <br />
            <span className="text-lg text-red-500">
              Click on the servce you desire to find out more.{" "}
              <BsArrowDown className="animate-bounce" color="red" />
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
            {services.map((service, index) => (
              <Link
                key={index}
                className="p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 relative border border-gray-500 group "
                href={`${service.Link}`}
              >
                <img
                  src={service.imgSrc}
                  alt={service.imgAlt}
                  className=" absolute -top-6 left-1/2 -translate-x-1/2 w-14 object-cover rounded-full "
                />
                <h2 className="text-2xl font-semibold my-2">{service.title}</h2>
                <p className="text-sm md:text-base">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
