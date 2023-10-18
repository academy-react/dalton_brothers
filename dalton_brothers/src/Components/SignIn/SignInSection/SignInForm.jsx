import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

import { Title } from "../../Common/Title/Title";
import { Input } from "../../Common/Inputs/Input";
import { Button } from "../../Common/buttons";
import { SignLinks } from "../../Common/Links/SignLinks";

import { TbEye, TbEyeOff } from "react-icons/tb";

const SignInForm = ({
  zIndex,
  setToggle,
  toggle,
  reg,
  setReg,
  setForget,
  forget,
}) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  // validation................................
  const validation = yup.object().shape({
    logInPassword: yup.string().required("این فیلد اجباریست"),
    logInUserName: yup.string().required("این فیلد اجباریست"),
  });

  return (
    <div
      className={`xl:w-[40%] lg:w-[50%] md:w-[80%] relative flex flex-row justify-center items-center ${zIndex}`}
    >
      <Formik
        initialValues={{ logInPassword: "", logInUserName: "" }}
        onSubmit={handleToggle}
        validationSchema={validation}
      >
        <Form className=" w-[100%] items-end h-[500px] flex flex-col justify-center gap-[30px] px-10 rounded-[30px]">
          <Title
            topic={"صفحه ورود"}
            style={"leading-3 font-vaz text-[20px] self-center text-[#595959]"}
          />
          <Input
            topic={"نام کاربر"}
            style={"rounded-full"}
            placeHolder={"... نام کاربری خود را وارد کنید"}
            type={"text"}
            name={"logInPassword"}
            as={"input"}
          />
          <div className="relative w-full flex justify-end">
            <Input
              topic={"رمز عبور"}
              style={"rounded-full"}
              placeHolder={"www..example.com"}
              type={show ? "text" : "password"}
              name={"logInUserName"}
              as={"input"}
            />
            <div className="w-[25px] absolute left-[5%] top-[14%]">
              {show ? (
                <TbEye
                  onClick={() => setShow(!show)}
                  className="w-full h-full"
                />
              ) : (
                <TbEyeOff
                  onClick={() => setShow(!show)}
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
          <SignLinks
            style={"text-blue-400 hover:text-blue-600 mt-[-30px] px-[5px]"}
            text={"فراموشی رمز عبور"}
            state={forget}
            setState={setForget}
          />
          <SignLinks
            style={"text-blue-400 hover:text-blue-600 mt-[-30px] px-[5px]"}
            text={"حساب کاربری ندارم"}
            state={reg}
            setState={setReg}
          />
          <Button
            type={"submit"}
            style={"bg-orange-300 text-[18px] text-[#595959]"}
            text={"ورود"}
          />
        </Form>
      </Formik>
    </div>
  );
};

export { SignInForm };
