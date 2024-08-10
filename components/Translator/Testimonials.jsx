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
    <div className="h-dvh w-screen md:mb-16">
      <div className="container relative z-20 mx-auto h-dvh md:border-l-2 md:border-black md:py-20 md:pr-44">
        <div className="flex w-full flex-row items-center justify-between gap-8 p-4 max-md:flex-col md:gap-2">
          <div className="w-full text-center">
            <section className="bg-background text-foreground py-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-8 text-center text-3xl font-extrabold">
                  What My Clients Say
                </h2>
                <div className="relative w-full">
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
                          className="swiper-slide-2 cursor-pointer p-4"
                        >
                          <div className="relative overflow-hidden rounded-lg p-6 shadow-lg">
                            <div className="absolute left-0 top-0 h-2 w-full bg-red-500"></div>
                            <div className="mb-4 flex items-center">
                              <img
                                alt={`client-avatar`}
                                src={`${testimonial.photo}`}
                                className="h-20 w-20 rounded-full border-2 object-contain p-1"
                              />
                              <div className="ml-2 max-md:text-sm">
                                <span className="font-bold text-black">
                                  {testimonial.name}
                                </span>
                              </div>
                            </div>
                            <p className="mb-2 text-sm max-md:text-xs">
                              {testimonial.testimonial}
                            </p>
                            <h4 className="font-bold">
                              {testimonial.location}
                            </h4>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>

                <div className="text-Lg flex w-full items-center justify-center gap-7 font-semibold md:text-2xl">
                  Swipe to right to see more testimonials{" "}
                  <span>
                    <Image
                      src="/right-arrow.png"
                      alt="arrow-right"
                      width={20}
                      height={20}
                      className="animate-ping cursor-pointer"
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
