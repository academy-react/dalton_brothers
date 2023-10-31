import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "../../Common/buttons";

import defaultImg from "../../../assets/Images/register-person.png";

const EditProfile = () => {
  const [personImg, setPersonImg] = useState();

  const validation = yup.object().shape({
    name: yup.string().required("این فیلد اجباریست"),
    userName: yup.string().required("این فیلد اجباریست"),
    phoneNumber: yup.string().required("این فیلد اجباریست"),
    nationalNumber: yup.string().required("این فیلد اجباریست"),
    region: yup.string().required("این فیلد اجباریست"),
    city: yup.string().required("این فیلد اجباریست"),
    email: yup.string().required("این فیلد اجباریست"),
  });
  const onSubmit = (values) => {
    const ooo = {
      name: values.name,
      userName: values.userName,
      phoneNumber: values.phoneNumber,
      nationalNumber: values.nationalNumber,
      region: values.region,
      city: values.city,
      email: values.email,
    };
    // console.log(ooo);
  };
  return (
    <Formik
      initialValues={{
        userName: "",
        name: "",
        phoneNumber: "",
        nationalNumber: "",
        region: "",
        city: "",
        email:""
      }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validation}
    >
      <Form className=" w-[900px]  h-full flex flex-row-reverse font-irSans">
        
        <div className="  w-1/2 h-full flex flex-col justify-center  ">
        <div className="rounded-full cursor-pointer self-center mb-5">
            <label htmlFor="pic" className="cursor-pointer">
              <img
                src={personImg ? URL.createObjectURL(personImg) : defaultImg}
                alt=""
                className="w-[150px]"
              />
              </label>
            </div>
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                نام کاربری
              </span>
              <Field
                name="userName"
                className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                type="text"
                placeholder="...نام کاربری"
              />
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="userName"
                  component={"div"}
                  className="error  h-5 text-red-500 text-center "
                />
              </div>
            </div>
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                نام
              </span>
              <Field
                name="name"
                className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                type="text"
                placeholder="...نام "
              />
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="name"
                  component={"div"}
                  className="error text-red-500 text-center"
                />
              </div>
            </div>
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                شماره همراه
              </span>
              <Field
                name="phoneNumber"
                className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                type="text"
                placeholder="...شماره همراه "
              />
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="phoneNumber"
                  component={"div"}
                  className="error text-red-500 text-center"
                />
              </div>
            </div>
          </div>

          <div className="  w-1/2 h-full flex flex-col justify-center pt-10  ">
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                شماره ملی
              </span>
              <Field
                name="nationalNumber"
                className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                type="text"
                placeholder="...شماره ملی "
              />
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="nationalNumber"
                  component={"div"}
                  className="error text-red-500 text-center"
                />
              </div>
            </div>
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                استان
              </span>
              <Field
                name="region"
                className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                type="text"
                placeholder="...استان "
              />
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="region"
                  component={"div"}
                  className="error text-red-500 text-center"
                />
              </div>
            </div>
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                شهر
              </span>
              <Field
                name="city"
                className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                type="text"
                placeholder="...شهر "
              />
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="city"
                  component={"div"}
                  className="error text-red-500 text-center"
                />
              </div>
            </div>
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px] px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                ایمیل
              </span>
              <Field
                name="email"
                className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                type="text"
                placeholder="...ایمیل "
              />
              <div className="w-full h-10 flex justify-center items-center">
                <div className="w-full h-10 flex justify-center items-center">
                  <ErrorMessage
                    name="email"
                    component={"div"}
                    className="error text-red-500 text-center"
                  />
                </div>
              </div>
              <Button
                value={"ثبت تغیرات"}
                className={"bg-orange-300 w-[50%] m-auto z-30"}
                type={"submit"}
              />
            </div>

          </div>
        </Form>
      </Formik>
    
  );
};

export { EditProfile };
