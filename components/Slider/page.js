"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        // modules={[Navigation]}
        className="relative"
      >
        <SwiperSlide>
          <div className="bg-mobile_color text-white p-4 rounded-lg ml-4">
            <h1 className="flex justify-between items-center text-xl font-medium">
              Group 1 <span className="text-sm">Limit : 1$</span>
            </h1>
            <p className="text-sm">
              If you donate 0 to 1$ you will be member of this group. If you
              donate 0 to 1$ you will be member of this group.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-mobile_color text-white p-4 rounded-lg">
            <h1 className="flex justify-between items-center text-xl font-medium">
              Group 2 <span className="text-sm">Limit : 1$</span>
            </h1>
            <p className="text-sm">
              If you donate 0 to 1$ you will be member of this group. If you
              donate 0 to 1$ you will be member of this group.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-mobile_color text-white p-4 rounded-lg">
            <h1 className="flex justify-between items-center text-xl font-medium">
              Group 3 <span className="text-sm">Limit : 1$</span>
            </h1>
            <p className="text-sm">
              If you donate 0 to 1$ you will be member of this group. If you
              donate 0 to 1$ you will be member of this group.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-mobile_color text-white p-4 rounded-lg">
            <h1 className="flex justify-between items-center text-xl font-medium">
              Group 4 <span className="text-sm">Limit : 1$</span>
            </h1>
            <p className="text-sm">
              If you donate 0 to 1$ you will be member of this group. If you
              donate 0 to 1$ you will be member of this group.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-mobile_color text-white p-4 rounded-lg">
            <h1 className="flex justify-between items-center text-xl font-medium">
              Group 5 <span className="text-sm">Limit : 1$</span>
            </h1>
            <p className="text-sm">
              If you donate 0 to 1$ you will be member of this group If you
              donate 0 to 1$ you will be member of this group.
            </p>
          </div>
        </SwiperSlide>
        {/* <div className="swiper-button-prev absolute -left-5 top-[50%] bg-black rounded-full w-10 h-10"></div>
        <div className="swiper-button-next absolute"></div> */}
      </Swiper>
    </>
  );
}
