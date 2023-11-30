import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";

import {
  clearStorage,
  getItem,
  setItem,
} from "../../../Core/Services/common/storage.services";
import { loginAPI } from "../../../Core/Services/api/Login/auth";
import { Title } from "../../Common/Title/Title";
import { Input } from "../../Common/Inputs/Input";
import { Button } from "../../Common/buttons";
import { NavLinks } from "../../Common/Links/NavLinks/NavLinks";
import { onTokenChange } from "../../../Redux/token";
import { loginValidation } from "../../../Core/Validation/yup";

import { TbEye, TbEyeOff } from "react-icons/tb";

const SignInForm = () => {
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(remember);

  const handleToggle = async (value) => {
    // ---------------- send to API ----------------
    const userObj = {
      phoneOrGmail: value.logInUserName,
      password: value.logInPassword,
      rememberMe: remember,
    };

    const user = await loginAPI(userObj);

    if (user.success) {
      if (remember) {
        setItem("token", user.token);
        setItem("userId", user.id);
        setItem("userRole", user.roles);
        dispatch(onTokenChange(getItem("token")));
      } else {
        setItem("token", user.token);
        setItem("userId", user.id);
        setItem("userRole", user.roles);
        dispatch(onTokenChange(user.token));
        window.onbeforeunload = function () {
          clearStorage();
        };
      }
    }
    if (!user.success) {
      alert("حسابی با این مشخصات وجود ندارد");
      return;
    }
    navigate("/");
  };

  // validation................................

  return (
    <div
      className={`2xl:w-[40%] xl:w-1/2 lg:w-3/5 md:w-[80%] w-full relative flex flex-row justify-center items-center`}
    >
      <Formik
        initialValues={{
          logInPassword: "",
          logInUserName: "",
          remember: remember,
        }}
        onSubmit={handleToggle}
        validationSchema={loginValidation}
      >
        <Form className=" w-full flex flex-col justify-center items-center  gap-[20px] px-10 rounded-[30px]">
          <Title
            topic={"صفحه ورود"}
            style={"leading-3 text-[20px] self-center text-[#9a9a9a]"}
          />
          <div className="min-[500px]:w-[80%] w-full">
            <Input
              topic={"شماره تلفن یا ایمیل"}
              className="rounded-full"
              placeHolder={""}
              type={"text"}
              name={"logInUserName"}
              as={"input"}
            />
          </div>
          <div className="relative min-[500px]:w-[80%] w-full flex justify-end group ">
            <Input
              topic={"رمز عبور"}
              className={"rounded-full"}
              placeHolder={""}
              type={show ? "text" : "password"}
              name={"logInPassword"}
              id={"logInPassword"}
              as={"input"}
            />
            <label
              htmlFor="logInPassword"
              className="w-[25px] absolute left-[8%] top-[14%] group-focus:text-[#fcbf49]"
            >
              {show ? (
                <TbEye
                  onClick={() => setShow(!show)}
                  className="w-full h-full opacity-50"
                />
              ) : (
                <TbEyeOff
                  onClick={() => setShow(!show)}
                  className="w-full h-full opacity-50 "
                />
              )}
            </label>
          </div>
          <div className="mx-auto mb-[20px] flex flex-row-reverse items-center self-end gap-[10px] h-12">
            <input
              type="checkbox"
              name="remember"
              id="rememberMe"
              className="hidden peer/remember"
              as={"input"}
              onClick={() => setRemember(!remember)}
            />
            <label
              htmlFor="rememberMe"
              className="font-irSans font-thin text-[#939393] text-sm whitespace-nowrap pb-1 px-1 cursor-pointer transition-all hover:text-[#696969] peer-checked/remember:text-[#5c5c5c] peer-checked/remember:border-b-2 peer-checked/remember:border-b-[#fcbf49]"
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
