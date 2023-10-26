import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay, Navigation } from "swiper/modules";

import { OneServiceComponent } from "./OneServiceComponent";
import WarrantyIcon from "../../../../assets/Images/WarrantyIcon.png";
import SupportIcon from "../../../../assets/Images/SupportIcon.png";
import communication from "../../../../assets/Images/communication.png";
import JobChances from "../../../../assets/Images/JobChances.png";

const ServiceKind = () => {
  // const [wait, setWait] = useState(500);
  const data = [
    {
      imgPath: WarrantyIcon,
      title: "مدرک معتبر",
      desc: "تیم ما مشاوره های لازم را به شما می دهد",
    },
    {
      imgPath: SupportIcon,
      title: "فرصت های شغلی",
      desc: "تیم ما مشاوره های لازم را به شما می دهد",
    },
    {
      imgPath: communication,
      title: "پشتیبانی 24 ساعته",
      desc: "تیم ما مشاوره های لازم را به شما می دهد",
    },
    {
      imgPath: JobChances,
      title: "مشاوره",
      desc: "تیم ما مشاوره های لازم را به شما می دهد",
    },
  ];
  // console.log(wait);
  return (
    <div
      // onMouseEnter={() => setWait(10000000)}
      // onMouseLeave={() => setWait(500)}
      className="m-auto flex justify-center flex-wrap gap-9 mt-4 mb-11 font-irSans"
    >
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={false}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={false}
        modules={[EffectCube, Pagination, Autoplay, Navigation]}
        className="lg:hidden mySwiper w-[300px] h-[300px]"
      >
        {data.map((service, index) => (
          <SwiperSlide className="bg-center bg-cover" key={index}>
            <OneServiceComponent {...service} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="lg:flex lg:justify-center h-[300px] w-[100%] hidden ">
        {data.map((service, index) => (
            <OneServiceComponent {...service} key={index} />
        ))}
      </div>
    </div>
  );
};

export { ServiceKind };
