import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";

import {
  getItem,
  setItem,
} from "../../../Core/Services/common/storage.services";
import { loginAPI } from "../../../Core/Services/api/auth";
import { Title } from "../../Common/Title/Title";
import { Input } from "../../Common/Inputs/Input";
import { Button } from "../../Common/buttons";
import { NavLinks } from "../../Common/Links/NavLinks/NavLinks";
import { onTokenChange } from "../../../Redux/token";

import { TbEye, TbEyeOff } from "react-icons/tb";

const SignInForm = () => {
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggle = async (value) => {
    // ---------------- send to API ----------------
    const userObj = {
      phoneOrGmail: value.logInUserName,
      password: value.logInPassword,
      rememberMe: true,
    };
    const user = await loginAPI(userObj);

    if (user.token) {
      setItem("token", user.token);
      dispatch(onTokenChange(getItem("token")));
    }
    if (!user.success) {
      alert("درست وارد کن خره");
      return;
    }
    navigate("/");
  };

  // validation................................
  const validation = yup.object().shape({
    logInUserName: yup
      .string()
      .email("ایمیل وارد کن خره")
      .required("این فیلد اجباریست"),
    logInPassword: yup
      .number()
      .positive()
      .integer()
      .required("این فیلد اجباریست"),
  });

  return (
    <div
      className={`2xl:w-[40%] xl:w-1/2 lg:w-3/5 md:w-[80%] w-full relative flex flex-row justify-center items-center`}
    >
      <Formik
        initialValues={{
          logInPassword: "",
          logInUserName: "",
          remember: "true",
        }}
        onSubmit={handleToggle}
        validationSchema={validation}
      >
        <Form className=" w-full flex flex-col justify-center items-center  gap-[20px] px-10 rounded-[30px]">
          <Title
            topic={"صفحه ورود"}
            style={"leading-3 text-[20px] self-center text-[#9a9a9a]"}
          />
          <div className="min-[500px]:w-[80%] w-full">
            <Input
              topic={"شماره تلفن یا ایمیل"}
              className={"rounded-full"}
              placeHolder={""}
              type={"text"}
              name={"logInUserName"}
              as={"input"}
            />
          </div>
          <div className="relative min-[500px]:w-[80%] w-full flex justify-end">
            <Input
              topic={"رمز عبور"}
              className={"rounded-full"}
              placeHolder={""}
              type={show ? "text" : "password"}
              name={"logInPassword"}
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
          <div className="pr-[70px] flex flex-row-reverse items-center self-end gap-[10px] h-12">
            <Input
              type={"checkbox"}
              name={"remember"}
              id="remember"
              className="w-5 h-5 justify-center "
              as={"input"}
              onClick={() => setRemember(!remember)}
            />
            <label
              htmlFor="remember"
              className="font-irSans font-thin text-[#939393] text-sm whitespace-nowrap"
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
          />
          <NavLinks
            className={
              "bg-[#fcbf49] w-[60%] py-[5px] text-[13px] font-irSans text-lg  text-[#595959]"
            }
            Children={"خانه"}
            path={"/"}
          />
          <div className="self-end pr-[30px] sm:pr-[80px] whitespace-nowrap flex flex-row-reverse items-center ">
            <span className="text-[#868686] font-thin text-[14px] font-irSans">
              ایا رمز عبور خود را فراموش کردبد؟
            </span>
            <NavLinks
              Children={"بلی"}
              className="text-[#fcbf49] font-thin text-[14px] font-irSans py-[0]"
              path={"/forget"}
            />
          </div>
          <div className="self-end pr-[30px] sm:pr-[80px] whitespace-nowrap flex flex-row-reverse items-center ">
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
