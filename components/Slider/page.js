"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"; // Import icons

SwiperCore.use([Navigation]);

export default function App() {
  const goPrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const goNext = () => {
    if (swiper) swiper.slideNext();
  };
  let swiper = null;

  return (
    <div className="w-full flex overflow-x-auto">
      <button
        className=" bg-[#2C2F48] md:block hidden p-3 absolute top-[30%] -left-6 z-10 border border-white  rounded-full text-white"  style={{filter: "drop-shadow(5px -5px 19px rgba(255, 255, 255, 0.25))", stroke: "fff", strokeWidth: "2px"}}
        onClick={goPrev}
      >
        <IoIosArrowBack size={20} />
      </button>
      <div className=" w-full flex overflow-x-auto">
        <Swiper
          onSwiper={(swiperInstance) => (swiper = swiperInstance)}
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
          className=" relative -z-10"
        >
          <SwiperSlide>
            <div className="bg-mobile_color text-white p-4 rounded-lg">
              <h1 className="flex justify-between items-center text-xl font-medium">
                Group 1 <span className="text-sm">Limit : 1$</span>
              </h1>
              <p className="text-sm">
                If you donate 0 to 1$ you will be member of this group. If you
                donate 0 to 1$.
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
                donate 0 to 1$.
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
                donate 0 to 1$.
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
                donate 0 to 1$.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-mobile_color text-white p-4 rounded-lg">
              <h1 className="flex justify-between items-center text-xl font-medium">
                Group 5 <span className="text-sm">Limit : 1$</span>
              </h1>
              <p className="text-sm">
                If you donate 0 to 1$ you will be member of this group. If you
                donate 0 to 1$.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <button
        className="bg-[#2C2F48] border border-white md:block hidden p-3 absolute top-[30%] -right-6 z-10	 rounded-full text-white " style={{filter: "drop-shadow(5px -5px 19px rgba(255, 255, 255, 0.25))", stroke: "fff", strokeWidth: "2px"}}
        onClick={goNext}
      >
        <IoIosArrowForward size={20} />
      </button>
    </div>
  );
}
