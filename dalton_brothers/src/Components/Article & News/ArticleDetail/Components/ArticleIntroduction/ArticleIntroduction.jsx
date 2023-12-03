import React, { useEffect } from "react";
import { basicGet } from "../../../../../Core/Services/api/course/courseList/courseList";

const ArticleIntroduction = ({id}) => {
  const getIntro = async () => {
    const getDiscribe = await basicGet(
      `/News/${id}`
    ) 
    const fa = (getDiscribe.detailsNewsDto.describe);

    // console.log(fa);
  }
  useEffect(() => {
    getIntro()
  }, [])
  
  return (
    <div>
      <div className=" w-full mt-10 ">
        {/* //////// main title /////// */}
        <h4 className=" w-full h-[50px] text-center md:text-2xl text-xl my-5 font-bold">
          {" "}
          متن خبر{" "}
        </h4>
        <div className=" px-[40px] py-[10px] ">
          <p className="text-lg text-right my-[10px] text-gray-800">
            {/* {fa} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export { ArticleIntroduction };
