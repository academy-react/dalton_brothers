import React from "react";
import { motion } from "framer-motion";

import NotFoundPage from "../../../assets/Images/404 page-bg.svg";
import { NavLinks } from "../Links/NavLinks/NavLinks";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-[100-vw] h-[100vh] bg-white flex items-end  flex-col ">
        <img
          className="w-[100-vw] h-[100vh] absolute bottom-0 left-0 z-10"
          src={NotFoundPage}
          alt=""
        />

        <div className=" h-28   flex flex-row-reverse flex-nowrap items-center justify-center gap-5 text-[#fdb501] text-lg z-20 mr-8 ">
          <NavLinks Children={"خانه"} path={"/"} />

          <NavLinks Children={"دوره ها"} path={"/course"} />
          <NavLinks Children={"  اخبار و مقالات"} path={"/news"} />
        </div>
        <div className="w-10 h-60 bg-red-100 z-20"></div>

      </div>
    </motion.div>
  );
};

export { NotFound };
