import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <div className="relative">
          <div className=" absolute bottom-0 right-0">
            <img src="jungle.jpg" alt=""></img>
            <p>explanation of image and asmita depressed mind</p>
            </div>
          
          </div>
          </SwiperSlide> */}
        <SwiperSlide><img src="jungle.jpg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="jungle.jpg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="jungle.jpg" alt=""></img></SwiperSlide>
       
      </Swiper>
  
    </>
  );
}