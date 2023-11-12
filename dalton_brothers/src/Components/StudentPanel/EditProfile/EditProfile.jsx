import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button } from "../../Common/buttons";
import { editUSerProfile } from "../../../Core/Services/api/studentPanel/updateProfileInfo/editProfile";
import { editProfileValidation } from "../../../Core/Validation/yup";

import defaultImg from "../../../assets/Images/register-person.png";

const EditProfile = () => {
  const [personImg, setPersonImg] = useState();
  const [gender, setGender] = useState(true);
  const [receiveMessageEvent, setReceiveMessageEvent] = useState(true);

  const onSubmit = async (values) => {
    var userNewObj = new FormData();
    userNewObj.append("LName", values.LName);
    userNewObj.append("FName", values.FName);
    userNewObj.append("UserAbout", values.UserAbout);
    userNewObj.append("LinkdinProfile", values.LinkdinProfile);
    userNewObj.append("TelegramLink", values.TelegramLink);
    userNewObj.append("ReceiveMessageEvent", receiveMessageEvent);
    userNewObj.append("HomeAdderess", values.HomeAdderess);
    userNewObj.append("NationalCode", values.NationalCode);
    userNewObj.append("Gender", gender);
    userNewObj.append("BirthDay", values.BirthDay);
    userNewObj.append("Latitude", "111");
    userNewObj.append("Longitude", "111");

    const user = await editUSerProfile(userNewObj);

    console.log(user);
  };
  return (
    <Formik
      initialValues={{
        FName: "",
        LName: "",
        NationalCode: "",
        TelegramLink: "",
        HomeAdderess: "",
        UserAbout: "",
        LinkdinProfile: "",
        BirthDay: "",
      }}
      onSubmit={onSubmit}
      validationSchema={editProfileValidation}
    >
      <Form className=" w-[900px]   flex flex-col font-irSans">
        <div className="rounded-full cursor-pointer self-center mb-5">
          <label htmlFor="pic" className="cursor-pointer">
            <img
              src={personImg ? URL.createObjectURL(personImg) : defaultImg}
              alt=""
              className="w-[150px]"
            />
          </label>
        </div>
        <div className="flex flex-wrap">
          <div className="  w-1/2  flex flex-col justify-start  ">
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                نام خانوادگی
              </span>
              <Field
                name="LName"
                className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                type="text"
                placeholder="...نام خانوادگی"
              />
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="LName"
                  component={"div"}
                  className="error text-red-500 text-center"
                />
              </div>
            </div>
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                بیوگرافی
              </span>
              <Field
                name="UserAbout"
                className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                type="text"
                placeholder="...بیوگرافی "
              />
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="UserAbout"
                  component={"div"}
                  className="error text-red-500 text-center"
                />
              </div>
            </div>
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                شماره ملی
              </span>
              <Field
                name="NationalCode"
                className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                type="text"
                placeholder="...شماره ملی"
              />
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="NationalCode"
                  component={"div"}
                  className="error text-red-500 text-center"
                />
              </div>
            </div>
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                اطلاع رویداد ها
              </span>
              <select
                name="ReceiveMessageEvent"
                className=" w-[85%] m-auto text-right bg-white text-[#9ca3af] h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5 "
                onChange={() => setReceiveMessageEvent(!receiveMessageEvent)}
              >
                <option className=" font-irSans" value="true">
                  بله
                </option>
                <option className=" font-irSans" value="false">
                  خیر
                </option>
              </select>
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="ReceiveMessageEvent"
                  component={"div"}
                  className="error text-red-500 text-center"
                />
              </div>
            </div>
            <div className="flex flex-col sw-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                ادرس
              </span>
              <Field
                name="HomeAdderess"
                className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                type="text"
                placeholder="...ادرس "
              />
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="HomeAdderess"
                  component={"div"}
                  className="error text-red-500 text-center"
                />
              </div>
            </div>
          </div>
          <div className="  w-1/2  flex flex-col justify-start ">
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                نام
              </span>
              <Field
                name="FName"
                className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                type="text"
                placeholder="...نام "
              />
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="FName"
                  component={"div"}
                  className="error  h-5 text-red-500 text-center "
                />
              </div>
            </div>
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                نام پروفایل
              </span>
              <Field
                name="LinkdinProfile"
                className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                type="text"
                placeholder="...نام پروفایل"
              />
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="LinkdinProfile"
                  component={"div"}
                  className="error text-red-500 text-center"
                />
              </div>
            </div>
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                ادرس تلگرام
              </span>
              <Field
                name="TelegramLink"
                className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                type="text"
                placeholder="...ادرس تلگرام"
              />
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="TelegramLink"
                  component={"div"}
                  className="error text-red-500 text-center"
                />
              </div>
            </div>
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                جنسیت
              </span>
              <select
                name="Gender"
                className="bg-white w-[85%] m-auto text-right h-[50px] text-[#9ca3af] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                onChange={() => setGender(!gender)}
              >
                <option value="true">مرد</option>
                <option value="false">زن</option>
              </select>
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="Gender"
                  component={"div"}
                  className="error text-red-500 text-center"
                />
              </div>
            </div>
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                تاریخ تولد
              </span>
              <Field
                name="BirthDay"
                className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
                type="date"
                placeholder="...تاریخ تولد "
              />
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="BirthDay"
                  component={"div"}
                  className="error text-red-500 text-center"
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          value={"ثبت تغیرات"}
          className={"bg-orange-300 w-[50%] m-auto z-30"}
          type={"submit"}
        />
      </Form>
    </Formik>
  );
};

export { EditProfile };
