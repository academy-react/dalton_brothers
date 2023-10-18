import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { Button } from "../../Common/buttons";
import { Input } from "../Inputs/Input";
import { Title } from "../Title/Title";

const CommentPlace = () => {
  // validation................................
  const validation = yup.object().shape({
    name: yup.string().required("این فیلد اجباریست"),
    comment: yup.string().required("این فیلد اجباریست"),
  });

  const onSubmit = (values) => {
    const obj = {
      name: values.name,
      comment: values.comment,
    };
    console.log(obj);
  };

  return (
    <div>
      <h1 className="text-center mt-4 font-irSans text-slate-800 text-lg whitespace-nowrap">
        ارتباط با ما
      </h1>
      <Formik
        initialValues={{
          name: "",
          comment: "",
        }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validation}
      >
        <Form className="flex flex-col items-center">
          <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[30px] mb-[30px] px-[40px]">
            <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
              نام کاربر
            </span>
            <Field
              name="name"
              className=" w-[85%] m-auto text-right h-[40px] rounded-full outline-none border-border-x-stone-500 border-[2px] peer px-5"
              type="text"
              placeholder="...نام کاربری"
            />
            <ErrorMessage name="name" component={"div"} className="error" />
          </div>
          <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mb-[30px] px-[40px]">
            <span className=" mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
              پیام شما
            </span>
            <Field
              as="textarea"
              name="comment"
              className=" w-[85%] m-auto text-right min-h-[120px] max-h-[150px] rounded-[20px] outline-none border-border-x-stone-500 border-[2px] peer px-5 py-[15px]"
              type="text"
              placeholder="...متن پیام"
            />
            <ErrorMessage name="comment" component={"div"} className="error " />
          </div>
          <Button
            style={"bg-[#fcbf49] hover:bg-[#c89c44] text-[#fff] "}
            type={"submit"}
            text={"ثبت"}
          />
        </Form>
      </Formik>
    </div>
  );
};

export { CommentPlace };
