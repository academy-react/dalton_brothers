import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "../../Common/buttons";
import { editUSerProfile } from "../../../Core/Services/api/studentPanel/updateProfileInfo/editProfile";

import defaultImg from "../../../assets/Images/register-person.png";

const EditProfile = () => {
  const [personImg, setPersonImg] = useState();

  const validation = yup.object().shape({
    fName: yup.string().required("این فیلد اجباریست"),
    lName: yup.string().required("این فیلد اجباریست"),
    nationalCode: yup.string().required("این فیلد اجباریست"),
    telegramId: yup.string().required("این فیلد اجباریست"),
    region: yup.string().required("این فیلد اجباریست"),
    bio: yup.string().required("این فیلد اجباریست"),
  });
  const onSubmit = async (values) => {
    const userNewObj = {
      FName: values.fName,
      LName: values.lName,
      NationalCode: values.nationalCode,
      TelegramLink: values.telegramId,
      HomeAdderess: values.region,
      UserAbout: values.bio,
    };
    const user = await editUSerProfile(userNewObj);

    console.log(user);
    console.log(userNewObj);
  };
  return (
    <Formik
      initialValues={{
        fName: "",
        lName: "",
        nationalCode: "",
        telegramId: "",
        region: "",
        bio: "",
      }}
      onSubmit={onSubmit}
      validationSchema={validation}
    >
      <Form className=" w-[900px]  h-full flex flex-row-reverse font-irSans">
        <div className="  w-1/2 h-full flex flex-col justify-center  ">
          <div className="rounded-full cursor-pointer self-center mb-5">
            <label htmlFor="pic" className="cursor-pointer">
              <img
                src={personImg ? URL.createObjectURL(personImg) : defaultImg}
                alt=""
                className="w-[150px]"
              />
            </label>
          </div>
          <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
            <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
              نام
            </span>
            <Field
              name="fName"
              className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
              type="text"
              placeholder="...نام "
            />
            <div className="w-full h-10 flex justify-center items-center">
              <ErrorMessage
                name="fName"
                component={"div"}
                className="error  h-5 text-red-500 text-center "
              />
            </div>
          </div>
          <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
            <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
              نام خانوادگی
            </span>
            <Field
              name="lName"
              className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
              type="text"
              placeholder="...نام خانوادگی"
            />
            <div className="w-full h-10 flex justify-center items-center">
              <ErrorMessage
                name="lName"
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
              name="nationalCode"
              className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
              type="text"
              placeholder="...شماره ملی"
            />
            <div className="w-full h-10 flex justify-center items-center">
              <ErrorMessage
                name="nationalCode"
                component={"div"}
                className="error text-red-500 text-center"
              />
            </div>
          </div>
        </div>
        <div className="  w-1/2 h-full flex flex-col justify-end pt-10  ">
          <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
            <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
              ادرس تلگرام
            </span>
            <Field
              name="telegramId"
              className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
              type="text"
              placeholder="...ادرس تلگرام"
            />
            <div className="w-full h-10 flex justify-center items-center">
              <ErrorMessage
                name="telegramId"
                component={"div"}
                className="error text-red-500 text-center"
              />
            </div>
          </div>
          <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
            <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
              ادرس
            </span>
            <Field
              name="region"
              className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
              type="text"
              placeholder="...ادرس "
            />
            <div className="w-full h-10 flex justify-center items-center">
              <ErrorMessage
                name="region"
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
              name="bio"
              className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
              type="text"
              placeholder="...بیوگرافی "
            />
            <div className="w-full h-10 flex justify-center items-center">
              <ErrorMessage
                name="bio"
                component={"div"}
                className="error text-red-500 text-center"
              />
            </div>
          </div>
          <Button
            value={"ثبت تغیرات"}
            className={"bg-orange-300 w-[50%] m-auto z-30"}
            type={"submit"}
          />
        </div>
      </Form>
    </Formik>
  );
};

export { EditProfile };
