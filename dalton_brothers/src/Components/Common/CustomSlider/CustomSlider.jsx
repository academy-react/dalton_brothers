import React, { Component, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Article} from "../../Article & News/ArticleSections/Article/Article"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';
import { Course } from '../../Course/CourseSections/Course';

const CustomSlider =({component}) => {

  if( component == "Course")
  return (
   
    <div className='w-[350px] h-[385px] xl:mb-12 mb-0 xl:mr-20 mr-4 m-auto'>
      <Swiper
      loop={true}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper h-full"
      >
        <SwiperSlide  className='bg-white rounded-xl overflow-hidden w-full h-full'><Course/> </SwiperSlide>
        <SwiperSlide  className='bg-white rounded-xl overflow-hidden w-full h-full'><Course/> </SwiperSlide>
        <SwiperSlide  className='bg-white rounded-xl overflow-hidden w-full h-full'><Course/> </SwiperSlide>
        <SwiperSlide  className='bg-white rounded-xl overflow-hidden w-full h-full'><Course/> </SwiperSlide>

      </Swiper>
    </div>);
      if( component == "Article")
  return (
   
    <div className='w-[350px] h-[385px] xl:mb-12 mb-0 xl:mr-20 mr-4 m-auto'>
      <Swiper
      loop={true}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper h-full"
      >
        <SwiperSlide  className='bg-white rounded-xl overflow-hidden w-full h-full'><Article/> </SwiperSlide>
        <SwiperSlide  className='bg-white rounded-xl overflow-hidden w-full h-full'><Article/> </SwiperSlide>
        <SwiperSlide  className='bg-white rounded-xl overflow-hidden w-full h-full'><Article/> </SwiperSlide>
        <SwiperSlide  className='bg-white rounded-xl overflow-hidden w-full h-full'><Article/> </SwiperSlide>

      </Swiper>
    </div>
    
  );
}
export {CustomSlider}
