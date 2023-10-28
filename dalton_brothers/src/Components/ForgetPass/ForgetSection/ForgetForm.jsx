import React from "react";
import { useNavigate } from "react-router-dom";

import { Form, Formik } from "formik";
import * as yup from "yup";


import { Title } from "../../Common/Title/Title";
import { Input } from "../../Common/Inputs/Input";
import { Button } from "../../Common/buttons";
import { NavLinks } from "../../Common/Links/NavLinks";

import logo from "../../../assets/Images/logo.png";

const ForgetForm = () => {
  const navigate = useNavigate();

  const validation = yup.object().shape({
    email: yup.string().required("این فیلد اجباریست"),
  });
  const handleSubmit = () => {
    navigate("/identify");
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        <Form className={`flex flex-col gap-[35px] items-center relative `}>
          <div className="w-[75px]">
            <img src={logo} alt="" className="w-full h-full" />
          </div>
          <Title topic={"فراموشی رمز عبور"} style={"text-[#989898]"} />
          <div className="w-[400px]">
            <Input
              topic={"ایمیل"}
              style={"rounded-full border-[#bcbcbc] border-[2px]"}
              placeHolder={"...ایمیل خود را وارد کنید"}
              type={"text"}
              name={"email"}
              as={"input"}
            />
          </div>
          <Button
            type={"submit"}
            className={
              "py-[7px] px-[60px] bg-[#fcbf49] font-irSans text-[13px] text-[#232323]"
            }
            value={"مرحله بعد"}
            onClick={()=> navigate("/forget")}
          />
          <NavLinks
            style={"font-irSans text-[13px] text-[#989898] mt-[-20px]"}
            text={"بازگشت"}
            path={"/signIn"}
          />
        </Form>
      </Formik>
    </div>
  );
};

export { ForgetForm };
