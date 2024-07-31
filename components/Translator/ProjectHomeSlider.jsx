"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./ProjectHomeSlider.css";
import Image from "next/image";

import { Navigation } from "swiper/modules";
export default function ProjectHomeSlider() {
  return (
    <div className="w-full">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="w-full rounded-lg">
          <Image
            width={500}
            height={300}
            quality={100}
            src="/DIHAD_Exhibition-08.jpg"
            alt="Coding setup"
            className="rounded-xl shadow-lg transition-all mb-3 duration-500 cursor-pointer hover:scale-105 w-[95%] h-[85%] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
