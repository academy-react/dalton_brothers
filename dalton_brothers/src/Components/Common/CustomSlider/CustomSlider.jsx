import React, { Component, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import {Article} from "../../Article & News/ArticleSections/Article/Article"
import { EffectCards } from 'swiper/modules';
import { Course } from '../../Course/CourseSections/Course';
import { basicGet } from '../../../Core/Services/api/course/courseList/courseList';

const CustomSlider =({component}) => {
  const [courseList, setCourseList] = useState([]);

  const getCount = async () => {
    const Count = await basicGet("/SharePanel/GetMyFavoriteCourses");
    setCourseList(Count.favoriteCourseDto);
    // console.log(Count);
  };

  useEffect(() => {
    getCount()
  }, [])
  


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
        {courseList && courseList.length > 0 ? (
          courseList.map((course, index) => (
            // <Course/>
            <SwiperSlide  key={index} className='bg-white rounded-xl overflow-hidden w-full h-full'><Course  {...course} /> </SwiperSlide>
          ))
        ) : (
          <></>
        )}

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
