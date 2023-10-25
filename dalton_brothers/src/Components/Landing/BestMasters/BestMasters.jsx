import { masterData } from "../../../Core/Services/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay, Navigation } from "swiper/modules";

import Master from "./BestMasterSection/Master";

const BestMasters = () => {
  const data = masterData;

  return (
    <div className="mx-auto mt-[100px]  ">
      <div className="mr-3 text-2xl h-28 text-center font-irSans text-[#fcbf49]">
        اساتید برتر
      </div>
      <div className=" mx-auto flex  flex-row-reverse flex-wrap justify-center gap-[50px] items-center">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
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
          {data.map((master, index) => (
            <SwiperSlide className="bg-center bg-cover" key={index}>
              <Master {...master} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="lg:flex h-[300px] w-[100%] hidden ">
          {data.map((master, index) => (
            <Master {...master} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { BestMasters };
