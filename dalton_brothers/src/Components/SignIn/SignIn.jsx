import { Field, Form, Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { IconEye , IconEyeOff } from '@tabler/icons-react';

const SignIn = () => {
  const [show , setShow ] = useState(false)
  return (
    <div className="flex flex-nowrap w-full h-[1080px] ">
      <div className="bg-red-700 w-[56%] hidden lg:block"></div>

      <div className=" lg:w-[44%] w-full">
        <Formik>
          <Form className=" w-1/2 m-auto h-[500px] mt-[250px] flex flex-col justify-evenly items-center px-10 bg-white shadow-xl rounded-xl">
            <h3 className=" w-[250px] text-center text-2xl  leading-3">
              صفحه ورود
            </h3>
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full">
              <Field
                name="logInPassword"
                placeholder="www..example.com"
                className="w-full  h-10 rounded-full border outline-none border-gray-500 peer px-5"
              />
              <span className=" mx-[5%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 ">
                نام کاربر
              </span>
            </div>
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full">
              <Field
                name="logInUserName "
                placeholder="www..example.com"
                type={show ? "text" : "password" }
                className="w-full  h-10 rounded-full border  outline-none border-gray-500 peer px-5"
              />
              <span className=" mx-[5%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000  ">
                رمز عبور
              </span>
              {show ? <IconEye onClick={()=>setShow(!show)} />: <IconEyeOff onClick={()=>setShow(!show)} />}
             
            </div>
            <div className="flex flex-col gap-1 w-full">
              <Link to="/" className="text-blue-400 hover:text-blue-600">
                فراموشی رمز عبور
              </Link>
              <div className="flex justify-between w-full">
                <Link to="/" className="text-blue-400 hover:text-blue-600">
                  {" "}
                  حساب کاربری ندارم{" "}
                </Link>
              </div>
            </div>
            <button className="bg-orange-300  text-md pb-3  h-10 px-10 flex items-center  rounded-full">
              {" "}
              ورود{" "}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export { SignIn };
