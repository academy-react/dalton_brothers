import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';
import { Course } from '../../Course/CourseSections/Course';

const CustomSlider =() => {
  return (
    <div className='w-[350px] h-[385px] mb-12 mr-20 m-auto'>
      <Swiper
      loop={true}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper h-full"
      >
        <SwiperSlide  className='bg-white rounded-xl overflow-hidden w-full h-full'><Course/></SwiperSlide>
        <SwiperSlide  className='bg-white rounded-xl overflow-hidden w-full h-full'><Course/></SwiperSlide>
        <SwiperSlide  className='bg-white rounded-xl overflow-hidden w-full h-full'><Course/></SwiperSlide>
        <SwiperSlide  className='bg-white rounded-xl overflow-hidden w-full h-full'><Course/></SwiperSlide>
    
      </Swiper>
    </div>
  );
}
export {CustomSlider}
