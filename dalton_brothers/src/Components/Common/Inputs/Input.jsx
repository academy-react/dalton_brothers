import React from "react";

import { Field, ErrorMessage } from "formik";

const Input = ({ topic, style, placeHolder, type, name, as }) => {
  return (
    <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full px-[10px]">
      <Field
        as={as}
        name={name}
        className={`w-full text-right h-[40px] outline-none border-[#949494] border-[2px] peer px-5 ${style}`}
        type={type}
        placeholder={placeHolder}
      />
      <span className="mx-[10%] peer-focus:right-[65%] whitespace-nowrap bg-white rounded-full absolute right-2 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
        {topic}
      </span>
      <ErrorMessage name={name} component={"p"} className="error" />
    </div>
  );
};

export { Input };
