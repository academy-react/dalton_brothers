import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

import { Title } from "../../Common/Title/Title";
import { Input } from "../../Common/Inputs/Input";
import NavLinks from "../../Common/Links";
import { Button } from "../../Common/Buttons";

import { IconEye, IconEyeOff } from "@tabler/icons-react";

const SignInForm = ({ zIndex, setToggle, toggle }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setToggle(!toggle);

    // validation................................
    const validation = yup.object().shape({
        logInPassword: yup.string().required("این فیلد اجباریست"),
        logInUserName: yup.string().required("این فیلد اجباریست"),
      });

  return (
    <div className={`lg:w-[44%] w-full relative z-[${zIndex}]`}>
      <Formik
        initialValues={{ logInPassword: "", logInUserName: "" }}
        onSubmit={handleToggle}
        validationSchema={validation}
      >
        <Form className="w-[70%] m-auto h-[500px] flex flex-col justify-center gap-[30px] items-start px-10 border-2 border-[#f9f0df] bg-[#fffaf1] rounded-[30px]">
          <Title
            topic={"صفحه ورود"}
            style={"leading-3 font-vaz text-[20px] self-center text-[#595959]"}
          />
          <Input
            topic={"نام کاربر"}
            style={"rounded-full"}
            placeHolder={"name..."}
            type={"text"}
            name={"logInPassword"}
            as={"input"}
          />
          <Input
            topic={"رمز عبور"}
            style={"rounded-full"}
            placeHolder={"www..example.com"}
            type={show ? "text" : "password"}
            name={"logInUserName"}
            as={"input"}
          />
          {show ? (
            <IconEye onClick={() => setShow(!show)} />
          ) : (
            <IconEyeOff onClick={() => setShow(!show)} />
          )}
          <NavLinks
            path={"/"}
            style={
              "text-blue-400 hover:text-blue-600 my-[0] py-[0] mx-[0] px-[10px]"
            }
            text={"فراموشی رمز عبور"}
          />
          <NavLinks
            path={"/"}
            style={
              "text-blue-400 hover:text-blue-600 my-[0] py-[0] mx-[0] px-[10px]"
            }
            text={"حساب کاربری ندارم"}
          />
          <Button
            style={"bg-orange-300 text-[18px] text-[#595959]"}
            text={"ورود"}
          />
        </Form>
      </Formik>
    </div>
  );
};

export { SignInForm };
