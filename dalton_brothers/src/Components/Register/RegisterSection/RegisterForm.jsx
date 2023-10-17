import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

import { Title } from "../../Common/Title/Title";
import { Input } from "../../Common/Inputs/Input";
import { Button } from "../../Common/buttons";

import { TbEye, TbEyeOff } from "react-icons/tb";

const RegisterForm = ({ zIndex, setToggle, toggle }) => {
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
        <Form className="w-[70%] m-auto h-[400px] flex flex-col justify-center gap-[30px] items-end px-10 border-2 border-[#f9f0df] bg-[#fffaf1] rounded-[30px]">
          <Title
            topic={"صفحه ثبت نام"}
            style={"leading-3 font-vaz text-[20px] self-center text-[#595959]"}
          />
          <Input
            topic={"نام کاربر"}
            style={"rounded-full"}
            placeHolder={"... نام کاربری خود را انتخاب کنید"}
            type={"text"}
            name={"logInPassword"}
            as={"input"}
          />
          <div className="relative w-full">
            <Input
              topic={"ساخت حساب"}
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

          <div className="flex flex-row justify-around w-full gap-[20px]">
            <Button
              type={"submit"}
              style={"bg-orange-300 text-[18px] text-[#595959]"}
              text={"ثبت نام"}
            />
            <div onClick={() => setToggle(!toggle)}>
              <Button
                type={"button"}
                style={"bg-orange-300 text-[18px] text-[#595959]"}
                text={"بازگشت"}
              />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { RegisterForm };
