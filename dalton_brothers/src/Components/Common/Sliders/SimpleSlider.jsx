import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import { Course } from "../../Course/CourseSections/Course";
import { Article } from "../../Article & News/ArticleSections/Article";

const SimpleSlider = ({ data, item }) => {
  const [component, setComponent] = useState(item);
  if (component === "course")
    return (
      <>
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          modules={[Pagination, Navigation]}
          className="2xl:w-[65%] md:w-[80%] mySwiper w-[100%] h-[100%] "
        >
          {data.map((el, index) => (
            <SwiperSlide
              className="flex justify-center items-center"
              key={index}
            >
              <Course {...el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  if (component === "news")
    return (
      <>
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1536: {
              slidesPerView: 3,
              // spaceBetween: 25,
            },
          }}
          modules={[Pagination, Navigation]}
          className="2xl:w-[65%] md:w-[80%] mySwiper w-[100%] h-[100%] "
        >
          {data.map((el, index) => (
            <SwiperSlide
              className="flex justify-center items-center"
              key={index}
            >
              <Article {...el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
};

export { SimpleSlider };
