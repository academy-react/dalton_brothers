import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

const CommentPlace = () => {
  return (
    <div>
      <h1 className="text-center py-[40px] font-est text-slate-800 text-lg whitespace-nowrap">
        ارتباط با ما
      </h1>
      <Formik>
        <Form >
          <span className=" mx-[5%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 ">
            نام کاربر
          </span>
          <Field
            name="name"
            className="w-full  h-10 rounded-full border outline-none border-gray-500 peer px-5"
            type="text"
            placeholder="نام کاربری..."
          />
          <ErrorMessage name="Title" component={"div"} className="error" />
          <span className=" mx-[5%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 ">
            پیام شما
          </span>
          <Field
            name="name"
            className="w-full  h-10 rounded-full border outline-none border-gray-500 peer px-5"
            type="text"
            placeholder="متن پیام..."
          />
          <ErrorMessage name="Describe" component={"div"} className="error" />
        </Form>
      </Formik>
    </div>
  );
};

export default CommentPlace;
