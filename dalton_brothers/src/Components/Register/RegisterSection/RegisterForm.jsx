import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

import { Title } from "../../Common/Title/Title";
import { Input } from "../../Common/Inputs/Input";
import { Button } from "../../Common/buttons";
import { NavLinks } from "../../Common/Links/NavLinks";

import { TbEye, TbEyeOff } from "react-icons/tb";
import person from "../../../assets/Images/register-person.png";
const RegisterForm = ({ zIndex, setToggle, toggle }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  // validation................................
  const validation = yup.object().shape({
    logInPassword: yup.string().required("این فیلد اجباریست"),
    logInUserName: yup.string().required("این فیلد اجباریست"),
    loginPhoneNumber: yup.string().required("این فیلد اجباریست"),
  });

  return (
    <div
      className={`xl:w-[50%] lg:w-[50%] md:w-[80%] w-full ${zIndex} relative`}
    >
      <Formik
        initialValues={{ logInPassword: "", logInUserName: "" }}
        onSubmit={handleToggle}
        validationSchema={validation}
      >
        <Form className="w-[70%] m-auto flex flex-col justify-center gap-[30px] items-end px-10 rounded-[30px]">
          <Title
            topic={"صفحه ایجاد حساب"}
            style={"leading-3 self-center text-[20px] h-auto "}
          />
          <picture className="rounded-full cursor-pointer self-center">
            <img src={person} alt="" />
          </picture>
          <div className="w-[90%]">
            <Input
              topic={"نام کاربر"}
              style={"rounded-full w-[90%]"}
              placeHolder={"... نام کاربری خود را انتخاب کنید"}
              type={"text"}
              name={"logInPassword"}
              as={"input"}
            />
          </div>
          <div className="relative w-[90%]">
            <Input
              topic={"رمز عبور"}
              style={"rounded-full w-full"}
              placeHolder={"www..example.com"}
              type={show ? "text" : "password"}
              name={"logInUserName"}
              as={"input"}
            />
            <div className="w-[25px] absolute left-[6%] top-[25%]">
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
          <div className="w-[90%]">
            <Input
              topic={"شماره تلفن"}
              style={"rounded-full"}
              placeHolder={"... شماره ی خود را وارد کنید"}
              type={"text"}
              name={"loginPhoneNumber"}
              as={"input"}
            />
          </div>
          <div className="pr-[20px] flex flex-row-reverse items-center gap-[10px]">
            <input type="radio" name="" id="remember" className="hidden" />

            <label
              htmlFor="remember"
              className="font-irSans font-thin text-[#5c5c5c] text-sm"
            >
              مرا به خاطر بسپار
            </label>
          </div>

          <div className="flex flex-row justify-around w-full gap-[20px]">
            <Button
              type={"submit"}
              style={
                "bg-[#fcbf49] text-[18px] text-[#595959] font-irSans text-[17px] py-[5px]"
              }
              text={"ایجاد حساب"}
            />
          </div>
          <div className="self-center flex flex-row-reverse items-center ">
            <span className="text-[#313131] font-thin text-[14px] font-irSans">
              ایا حساب فعال دارید؟
            </span>
            <NavLinks
              text={"ثبت نام"}
              style={"text-[#fcbf49] font-thin text-[14px] font-irSans p-[0]"}
              path={"/"}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { RegisterForm };
