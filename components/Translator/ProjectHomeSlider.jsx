import Image from "next/image";
export default function ProjectHomeSlider() {
  return (
    <div className="h-full w-full">
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
              <h1 className="text-base font-bold text-black md:text-2xl">
                {project.name}
              </h1>
            </SwiperSlide>
          );
        })}
      </Swiper> */}

      <Image
        width={1000}
        height={300}
        quality={100}
        src="/projects/GIF.gif"
        alt="ProjectHomeSlider"
        className="cursor-pointer rounded-xl object-contain shadow-lg transition-all duration-500 hover:scale-105"
      />
    </div>
  );
}
