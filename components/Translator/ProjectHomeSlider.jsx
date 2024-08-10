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
              className="flex w-full flex-col items-center justify-center rounded-lg"
            >
              <Image
                width={500}
                height={300}
                quality={100}
                src={project.photo}
                alt={project.name}
                className="mb-3 h-[85%] w-[95%] cursor-pointer rounded-xl object-contain shadow-md transition-all duration-500 hover:scale-105"
              />
              <h1 className="text-base font-bold text-white md:text-2xl">
                {project.name}
              </h1>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
