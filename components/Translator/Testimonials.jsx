"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "./Testimonials.css";
import { testimonials } from "../../constants/Arrays";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="w-screen h-dvh mb-10">
      <div className="container mx-auto relative z-20 md:py-20 md:border-l-2   md:border-black  h-dvh md:pr-44">
        <div className="flex flex-row max-md:flex-col items-center justify-between gap-8  md:gap-2  w-full p-4">
          <div className="w-full text-center">
            <section className="bg-background text-foreground py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center mb-8">
                  What My Clients Say
                </h2>
                <div className="w-full relative">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                      },
                    }}
                    modules={[Pagination]}
                    className="swiper2"
                  >
                    {testimonials.map((testimonial, index) => {
                      return (
                        <SwiperSlide
                          key={index}
                          className="swiper-slide-2 p-4 cursor-pointer"
                        >
                          <div className="p-6 rounded-lg shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
                            <div className="flex items-center mb-4">
                              <img
                                alt={`client-avatar`}
                                src={`${testimonial.photo}`}
                                className="w-20 h-20 p-1 object-contain rounded-full border-2 "
                              />
                              <div className="ml-2 max-md:text-sm">
                                <span className="text-black font-bold">
                                  {testimonial.name}
                                </span>
                              </div>
                            </div>
                            <p className=" mb-2 text-sm max-md:text-xs">
                              {testimonial.testimonial}
                            </p>
                            <h4 className="font-bold ">
                              {testimonial.location}
                            </h4>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>

                <div className="w-full flex justify-center items-center gap-7 my-4 font-semibold max-md:text-xs ">
                  Swipe to right to see more testimonials{" "}
                  <span>
                    <Image
                      src="/right-arrow.png"
                      alt="arrow-right"
                      width={20}
                      height={20}
                      className="cursor-pointer animate-ping"
                    />
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
