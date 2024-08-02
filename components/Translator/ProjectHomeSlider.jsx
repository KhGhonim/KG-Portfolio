"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./ProjectHomeSlider.css";
import Image from "next/image";

import { Navigation } from "swiper/modules";
import { Sliderprojects } from "../../constants/Arrays";
export default function ProjectHomeSlider() {
  return (
    <div className="w-full">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {Sliderprojects.map((project, index) => {
          return (
            <SwiperSlide
              key={index}
              className="w-full rounded-lg flex flex-col justify-center items-center"
            >
              <Image
                width={500}
                height={300}
                quality={100}
                src={project.photo}
                alt={project.name}
                className="rounded-xl shadow-md transition-all mb-3 duration-500 cursor-pointer hover:scale-105 w-[95%] h-[85%] object-contain"
              />
              <h1 className="text-base md:text-2xl font-bold text-white">
                {project.name}
              </h1>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
