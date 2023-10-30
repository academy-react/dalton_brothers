import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Comments } from "../../../Common/Comment/Comments/Comments";
import { AddComment } from "../../../Common/Comment/AddComment/AddComment";
import { commentData } from "../../../../Core/Services/data/";

const CourseComments = () => {
  const token = useSelector((state) => state.token.token);
  const data = commentData;

  const [modal, setModal] = useState(false);
  console.log();
  return (
    <div className=" w-full py-[30px] flex flex-col mb-[100px]">
      <h2 className="text-center lg:text-2xl text-xl py-[20px] font-irSBold">
        نظرات
      </h2>
      {!token && (
        <p className="text-center lg:text-xl text-lg py-[20px] text-gray-800 font-irSans">
          .تنها کاربران سایت قادر به ثبت نظر هستند. برای ثبت نظر لازم است تا ثبت
          نام نمایید یا وارد شوید
        </p>
      )}
      <div className="w-full my-[20px] py-5 grid grid-col justify-items-end gap-12">
        {/* each comment */}
        {data.map((comment, index) => (
          <Comments {...comment} key={index} />
        ))}
        <button
          className=" lg:px-8 lg:py-4 md:px-6 md:py-3 px-4 py-2 text-xl bg-orange-400 m-auto rounded-[20px] cursor-pointer"
          onClick={() => setModal(!modal)}
        >
          {modal == true ? " بیخیال نظر دادن " : " نظر دادن"}
        </button>
        <div>{modal == true && <AddComment />}</div>
      </div>
    </div>
  );
};

export { CourseComments };
