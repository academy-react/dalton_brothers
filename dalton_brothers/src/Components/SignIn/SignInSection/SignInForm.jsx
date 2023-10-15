import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

import { Title } from "../../Common/Title/Title";
import { Input } from "../../Common/Inputs/Input";
import NavLinks from "../../Common/Links";
import { Button } from "../../Common/Buttons";

import { TbEye, TbEyeOff } from "react-icons/tb";
import SignLinks from "../../Common/Links/SignLinks";

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
    <div className={`lg:w-[44%] w-full ${zIndex} relative`}>
      <Formik
        initialValues={{ logInPassword: "", logInUserName: "" }}
        onSubmit={handleToggle}
        validationSchema={validation}
      >
        <Form className="w-[70%] m-auto h-[500px] flex flex-col justify-center gap-[30px] items-end px-10 border-2 border-[#f9f0df] bg-[#fffaf1] rounded-[30px]">
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
          <div className="relative w-full">
            <Input
              topic={"نام حساب"}
              style={"rounded-full w-full"}
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
