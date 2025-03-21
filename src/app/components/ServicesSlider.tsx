"use client";

// import Swiper core and required modules
import { Navigation, A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y, EffectCoverflow, Pagination]}
        // effect="coverflow"
        loop={false}
        pagination
        spaceBetween={0}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        centeredSlides={true}
        // coverflowEffect={{
        //   rotate: 0,
        //   stretch: "60%",
        //   depth: 0,
        //   modifier: 1,
        //   slideShadows: false,
        // }}
      >
        <SwiperSlide>
          <div className="pt-6">
            <div className="flex-col items-center text-center px-20 mx-auto">
              <Image
                className="mx-auto mb-12"
                src="/images/skill-image.png"
                width={250}
                height={242}
                alt="Picture of the author"
              />

              <h3 className="mb-6 text-3xl font-bold">Website Development</h3>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                tincidunt vehicula sapien, interdum consectetur nisi tristique
                ac.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-6">
            <div className="flex-col items-center text-center px-20 mx-auto">
              <Image
                className="mx-auto mb-12"
                src="/images/skill-image.png"
                width={250}
                height={242}
                alt="Picture of the author"
              />

              <h3 className="mb-6 text-3xl font-bold">UX Design</h3>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                tincidunt vehicula sapien, interdum consectetur nisi tristique
                ac.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-6">
            <div className="flex-col items-center text-center px-20 mx-auto">
              <Image
                className="mx-auto mb-12"
                src="/images/skill-image.png"
                width={250}
                height={242}
                alt="Picture of the author"
              />

              <h3 className="mb-6 text-3xl font-bold">Consultancy</h3>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                tincidunt vehicula sapien, interdum consectetur nisi tristique
                ac.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-6">
            <div className="flex-col items-center text-center px-20 mx-auto just h-100">
              <h3 className="mb-6 text-3xl font-bold">Always Learning...</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
