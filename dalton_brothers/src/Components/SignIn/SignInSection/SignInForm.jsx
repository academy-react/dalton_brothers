import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { Title } from "../../Common/Title/Title";
import { Input } from "../../Common/Inputs/Input";
import { Button } from "../../Common/buttons";
import { NavLinks } from "../../Common/Links/NavLinks";

import { TbEye, TbEyeOff } from "react-icons/tb";

const SignInForm = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    navigate("/");
  };

  // validation................................
  const validation = yup.object().shape({
    logInPassword: yup.string().required("این فیلد اجباریست"),
    logInUserName: yup.string().required("این فیلد اجباریست"),
  });

  return (
    <div
      className={`2xl:w-[40%] xl:w-[50%] lg:w-[60%] md:w-[80%] w-[100%] relative flex flex-row justify-center items-center`}
    >
      <Formik
        initialValues={{ logInPassword: "", logInUserName: "" }}
        onSubmit={handleToggle}
        validationSchema={validation}
      >
        <Form className=" w-[100%] flex flex-col justify-center items-center  gap-[20px] px-10 rounded-[30px]">
          <Title
            topic={"صفحه ورود"}
            style={"leading-3 text-[20px] self-center text-[#9a9a9a]"}
          />
          <div className="w-[80%]">
            <Input
              topic={"نام کاربر"}
              style={"rounded-full"}
              placeHolder={"... نام کاربری خود را وارد کنید"}
              type={"text"}
              name={"logInPassword"}
              as={"input"}
            />
          </div>
          <div className="relative w-[80%] flex justify-end">
            <Input
              topic={"رمز عبور"}
              style={"rounded-full"}
              placeHolder={""}
              type={show ? "text" : "password"}
              name={"logInUserName"}
              as={"input"}
            />
            <div className="w-[25px] absolute left-[8%] top-[14%]">
              {show ? (
                <TbEye
                  onClick={() => setShow(!show)}
                  className="w-full h-full opacity-50"
                />
              ) : (
                <TbEyeOff
                  onClick={() => setShow(!show)}
                  className="w-full h-full opacity-50"
                />
              )}
            </div>
          </div>
          <div className="pr-[80px] flex flex-row-reverse items-center self-end gap-[10px]">
            <input type="radio" name="" id="remember" className="hidden" />
            <label
              htmlFor="remember"
              className="font-irSans font-thin text-[#939393] text-sm "
            >
              مرا به خاطر بسپار
            </label>
          </div>
          <Button
            type={"submit"}
            className={
              "bg-[#fcbf49] w-[60%] py-[5px] text-[13px] font-irSans text-[#595959]"
            }
            value={"ورود"}
            onClick={() => navigate("/")}
          />
          <div className="self-end pr-[80px] flex flex-row-reverse items-center ">
            <span className="text-[#868686] font-thin text-[14px] font-irSans">
              ایا رمز عبور خود را فراموش کردبد؟
            </span>
            <NavLinks
              Children={"بلی"}
              className="text-[#fcbf49] font-thin text-[14px] font-irSans py-[0]"
              path={"/forget"}
            />
          </div>
          <div className="self-end pr-[80px] flex flex-row-reverse items-center ">
            <span className="text-[#868686] font-thin text-[14px] font-irSans">
              حساب فعال ندارید؟
            </span>
            <NavLinks
              Children={"ایجاد حساب"}
              className="text-[#fcbf49] font-thin text-[14px] font-irSans py-[0]"
              path={"/register"}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { SignInForm };
