import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./ourstyle.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function Ourservice() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>
        <div>
        {/* our service */}
       
        <div className=''>
          <div > <img src='bunge.jpg' className='w-64 h-96'></img></div>
          <div className='font-bold text-center text-2xl bg-red-500 text-white p-4'>Paracliding</div>
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide><div>
        {/* our service */}
        
        <div className=''>
          <div > <img src='bunge.jpg' className='w-64 h-64'></img></div>
          <div className='font-bold text-center text-2xl bg-red-500 text-white p-4'>Paracliding</div>
        </div>
    </div></SwiperSlide>
        <SwiperSlide><div>
        {/* our service */}
       
        <div className=''>
          <div > <img src='bunge.jpg' className='w-64 h-64'></img></div>
          <div className='font-bold text-center text-2xl bg-red-500 text-white  p-4'>Paracliding</div>
        </div>
    </div></SwiperSlide>
    <SwiperSlide><div>
        {/* our service */}
       
        <div className=''>
          <div > <img src='bunge.jpg' className='w-64 h-64'></img></div>
          <div className='font-bold text-center text-2xl bg-red-500 text-white  p-4'>Paracliding</div>
        </div>
    </div></SwiperSlide>
    <SwiperSlide><div>
        {/* our service */}
       
        <div className=''>
          <div > <img src='bunge.jpg' className='w-64 h-64'></img></div>
          <div className='font-bold text-center text-2xl bg-red-500 text-white  p-4'>Paracliding</div>
        </div>
    </div></SwiperSlide>
    <SwiperSlide><div>
        {/* our service */}
       
        <div className=''>
          <div > <img src='bunge.jpg' className='w-64 h-64'></img></div>
          <div className='font-bold text-center text-2xl bg-red-500 text-white  p-4'>Paracliding</div>
        </div>
    </div></SwiperSlide>
      </Swiper>
    </>
  );
}
