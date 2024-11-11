"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import { Navigation, Zoom } from "swiper/modules";

export default function ImageSlider({ Photo }) {
  return (
    <div className="w-full object-cover rounded-lg mb-4">
      <Swiper
        navigation={true}
        modules={[Navigation, Zoom]}
        className="mySwiper rounded"
        zoom={true}
      >
        {Photo.map((photo, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container rounded">
                <img
                  src={photo}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg mb-4 cursor-pointer"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
