import React from "react";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { Input } from "../../../Common/Inputs/Input";
import { Button } from "../../../Common/buttons";
import { NavLinks } from "../../../Common/Links/NavLinks/NavLinks";
import { Title } from "../../../Common/Title/Title";
import { registerS1 } from "../../../../Core/Services/api/register/register.step1/register.step1";
import { setItem } from "../../../../Core/Services/common/storage.services";
import { registerS1Validation } from "../../../../Core/Validation/yup";

const RegisterStep1 = () => {
  const navigate = useNavigate();

  const handleToggle = async (value) => {
    navigate("/register/step2");

    const number = {
      phoneNumber: value.loginPhoneNumber,
    };
    setItem("userPhone", number.phoneNumber);
    const user = await registerS1(number);
    // console.log(user);
  };

  return (
    <div
      className={` w-[100%] mt-52 relative flex flex-row justify-center items-center font-irSans`}
    >
      <Formik
        initialValues={{
          loginPhoneNumber: "",
        }}
        onSubmit={handleToggle}
        validationSchema={registerS1Validation}
      >
        <Form className=" w-[100%] flex flex-col justify-center items-center  gap-[30px] px-10 rounded-[30px]">
          <Title
            topic={"صفحه ایجاد حساب"}
            style={"leading-3 self-center text-[20px] h-auto "}
          />
          <div className="min-[500px]:w-[90%] w-full h-52 flex items-center">
            <Input
              topic={"شماره تلفن"}
              className={"rounded-full "}
              placeHolder={"... شماره ی خود را وارد کنید"}
              type={"text"}
              name={"loginPhoneNumber"}
              as={"input"}
            />
          </div>

          <div className="flex flex-row justify-around w-full gap-[20px]">
            <Button
              type={"submit"}
              className={
                "bg-[#fcbf49] text-[#595959] font-irSans text-[17px] py-[5px]"
              }
              value={" ارسال رمز "}
            />
            <NavLinks
              className={
                "bg-[#fcbf49] w-[30%] py-[5px] text-[13px] font-irSans text-lg  text-[#595959]"
              }
              Children={"خانه"}
              path={"/"}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { RegisterStep1 };
