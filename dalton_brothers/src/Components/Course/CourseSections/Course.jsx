import React from "react";
import like from "../../../Assets/Images/like.png";
import comment from "../../../Assets/Images/comment.png";
import bookmark from "../../../Assets/Images/bookMark.png";
import courseImage from "../../../Assets/Images/course.png";

const Course = ({ courseName, courseMaster, price }) => {
  return (
    <div className="w-[350px] h-96 border  rounded-lg flex flex-col">
      {/* image & 3 button start */}

      <div className="w-full h-1/2  rounded-t-lg flex justify-center flex-row-reverse">
        {/*img Container*/}

        <div className="w-2/3 h-full  rounded-tr-2xl ">
          <img className="w-full " src={courseImage} alt="" />
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center  ">
          <div className="w-full h-1/3 flex justify-start pl-[30px] items-center">
            <img className="w-[30px] " src={bookmark} alt="" />
          </div>
          <div className="w-full h-1/3 flex justify-start pl-[30px] items-center">
            <img className="w-[30px] " src={like} alt="" />
          </div>
          <div className="w-full h-1/3 flex justify-start pl-[30px] items-center">
            <img className="w-[30px] " src={comment} alt="" />
          </div>
        </div>
      </div>

      {/* image & 3 button end */}

      {/* details & more info button start */}

      <div className=" w-full h-[170px]  flex flex-col gap-[10px] rounded-b-lg mt-7 ">
        <span className="flex flex-row-reverse p-3 pb-1 text-base font-irSBold">
          {courseName}
        </span>
        <span className="flex flex-row-reverse pr-3 text-neutral-600 text-sm font-irSans">
          {courseMaster}
        </span>
        <span className="flex flex-row-reverse pr-3 text-neutral-400 text-xs font-irSans">
          توضیحات و توضیحات و توضیحات
        </span>

        {/* button & price start */}

        <div className="w-full h-1/2  rounded-b-lg flex justify-center flex-row-reverse ">
          <div className="w-1/2  flex justify-center items-center flex-row-reverse text-sm text-[#fcbf49] font-irSans">
            {price} : قیمت
          </div>
          <div className="w-1/2  bg-[#fcbf49] text-slate-100 rounded-tr-2xl rounded-bl-lg flex justify-center items-center font-irSBold">
            اطلاعات بیشتر
          </div>
        </div>

        {/* button & price end */}
      </div>

      {/* details & more info button end */}
    </div>
  );
};

export { Course };
