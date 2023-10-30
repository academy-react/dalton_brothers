import React from "react";

import { Field, ErrorMessage } from "formik";

const Input = ({ topic, style, placeHolder, type, name, as }) => {
  return (
    <div className="flex flex-col w-full relative  sm:w-full px-[10px] font-irSans">
      <Field
        as={as}
        name={name}
        className={`w-full text-right text-[13px] h-[45px] outline-none border-[#d5d5d5] border-[1px] peer px-5 ${style}`}
        type={type}
        placeholder={placeHolder}
      />
      <span className="mx-[10%] peer-focus:right-[55%] whitespace-nowrap bg-white rounded-full absolute right-2 px-6 w-fit -top-4 transition-all duration-1000 text-[#808080]">
        {topic}
      </span>
      <div className="w-full h-10 flex justify-center items-center">
        <ErrorMessage
          name={name}
          component={"p"}
          className="error text-red-500 text-center"
        />
      </div>
    </div>
  );
};

export { Input };
