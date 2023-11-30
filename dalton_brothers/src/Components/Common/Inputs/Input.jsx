import React from "react";

import { Field, ErrorMessage } from "formik";

const Input = ({ topic, className, placeHolder, type, name, as, id }) => {
  return (
    <div className="flex flex-col w-full relative  sm:w-full px-[10px] font-irSans">
      <Field
        id={id}
        as={as}
        name={name}
        className={`transition-all w-full text-right text-[13px] h-[45px] outline-none border-[#d5d5d5] border-[1px] peer px-5 focus:border-[#fcbf49] focus:text-[#8a7038] focus:border-2 ${className}`}
        type={type}
        placeholder={placeHolder}
      />
      <span className="mx-[10%] peer-focus:text-[#fcbf49] peer-invalid:border-pink-500 whitespace-nowrap bg-white rounded-full absolute right-2 transition-all px-2 w-fit -top-4 text-[#808080]">
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
