import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { registerS3 } from "../../../../Core/Services/api/register/register.step3/register.step3";
import { Title } from "../../../Common/Title/Title";
import { Input } from "../../../Common/Inputs/Input";
import { Button } from "../../../Common/buttons";
import { NavLinks } from "../../../Common/Links/NavLinks/NavLinks";

import { TbEye, TbEyeOff } from "react-icons/tb";
import defaultImg from "../../../../assets/Images/register-person.png";
import {
  getItem,
  setItem,
} from "../../../../Core/Services/common/storage.services";
import { registerS3Validation } from "../../../../Core/Validation/yup";
const RegisterStep3 = () => {
  const [show, setShow] = useState(false);
  const [personImg, setPersonImg] = useState();
  const navigate = useNavigate();

  const handleToggle = async (value) => {
    const userDetail = {
      password: value.registerPassword,
      gmail: value.registerUserName,
      phoneNumber: JSON.parse(getItem("userPhone")),
    };
    const user = await registerS3(userDetail);
    if (!user.success) {
      alert("از این ایمیل قبلا استفاده شده است");
      return;
    }
    navigate("/signIn");
  };

  // validation................................

  return (
    <div
      className={` w-[100%] relative flex flex-row justify-center items-center font-irSans`}
    >
      <Formik
        initialValues={{
          registerUserName: "",
          registerPassword: "",
          registerPasswordRepeat: "",
        }}
        onSubmit={handleToggle}
        validationSchema={registerS3Validation}
      >
        <Form className=" w-[100%] flex flex-col justify-center items-center  gap-[30px] px-10 rounded-[30px]">
          <Title
            topic={"صفحه ایجاد حساب"}
            style={"leading-3 self-center text-[20px] h-auto "}
          />
          <div className="rounded-full cursor-pointer self-center">
            <label htmlFor="pic" className="cursor-pointer">
              <img
                src={personImg ? URL.createObjectURL(personImg) : defaultImg}
                alt=""
                className="w-[150px]"
              />
            </label>
            <Field
              type="file"
              name="pic"
              id="pic"
              className="hidden"
              onChange={(e) => setPersonImg(e.target.files[0])}
            />
          </div>
          <div className="min-[500px]:w-[90%] w-full">
            <Input
              topic={"ایمیل"}
              className={"rounded-full max-[500px]:w-[90%] w-full"}
              placeHolder={"... ایمیل خود را وارد کنید"}
              type={"text"}
              name={"registerUserName"}
              as={"input"}
            />
          </div>
          <div className="relative min-[500px]:w-[90%] w-full">
            <Input
              topic={"رمز عبور"}
              className=" rounded-full w-full"
              placeHolder={"... رمز عبور خود را وارد کنید"}
              type={show ? "text" : "password"}
              name={"registerPassword"}
              as={"input"}
            />
            <div className="w-[25px] absolute left-[6%] top-[14%]">
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
          <div className="min-[500px]:w-[90%] w-full">
            <Input
              topic={" تکرار رمز عبور "}
              className={"rounded-full"}
              placeHolder={"... رمز عبور خود را تکرار وارد کنید"}
              type={"text"}
              name={"registerPasswordRepeat"}
              as={"input"}
            />
          </div>
          <div className="flex flex-row justify-around w-full gap-[20px]">
            <Button
              type={"submit"}
              className={
                "bg-[#fcbf49] text-[#595959] font-irSans text-[17px] py-[5px]"
              }
              value={"ایجاد حساب"}
            />
            <NavLinks
              className={
                "bg-[#fcbf49] w-[30%] py-[5px] text-[13px] font-irSans text-lg  text-[#595959]"
              }
              Children={"خانه"}
              path={"/"}
            />
          </div>
          <div className="self-center flex flex-row-reverse items-center ">
            <span className="text-[#313131] font-thin text-[14px] font-irSans">
              ایا حساب فعال دارید؟
            </span>
            <NavLinks
              Children={"ثبت نام"}
              className="text-[#fcbf49] font-thin text-[14px] font-irSans p-[0]"
              path={"/signIn"}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { RegisterStep3 };
