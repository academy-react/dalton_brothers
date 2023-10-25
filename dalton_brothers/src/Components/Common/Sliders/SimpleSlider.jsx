import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { Course } from "../../Course/CourseSections/Course";
import { Article } from "../../Article & News/ArticleSections/Article";

const SimpleSlider = ({ data, item }) => {
  const [component, setComponent] = useState(item);
  if (component === "course")
    return (
      <>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="md:w-[80%] mySwiper w-[100%] h-[100%] "
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
          modules={[Navigation]}
          className="mySwiper w-[80%] h-[100%] "
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
