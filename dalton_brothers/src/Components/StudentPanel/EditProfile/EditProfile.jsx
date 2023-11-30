import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button } from "../../Common/buttons";
import { editUSerProfile } from "../../../Core/Services/api/studentPanel/updateProfileInfo/editProfile";
import { editProfileValidation } from "../../../Core/Validation/yup";

import defaultImg from "../../../assets/Images/register-person.png";
import { PanelInps } from "../../Common/Inputs/PanelInputs";
import { addPic } from "../../../Core/Services/api/studentPanel/addImg";

const EditProfile = () => {
  const [personImg, setPersonImg] = useState();
  const onSubmit = async (values) => {
    console.log("triggered");
    var userNewObj = new FormData();
    userNewObj.append("LName", values.LName);
    userNewObj.append("FName", values.FName);
    userNewObj.append("UserAbout", values.UserAbout);
    userNewObj.append("LinkdinProfile", "https://linkedin.com");
    userNewObj.append("TelegramLink", "https://t.me");
    userNewObj.append("ReceiveMessageEvent", values.ReceiveMessageEvent);
    userNewObj.append("HomeAdderess", values.HomeAdderess);
    userNewObj.append("NationalCode", values.NationalCode);
    userNewObj.append("Gender", values.Gender);
    userNewObj.append("BirthDay", values.BirthDay);
    userNewObj.append("Latitude", "0");
    userNewObj.append("Longitude", "53.05821549859579");

    const user = await editUSerProfile(userNewObj);

    var formdata = new FormData();
    formdata.append("formFile", personImg);

    const newImg = await addPic(formdata);
  };
  const rightArrayInps = [
    {
      title: "نام خانوادگی",
      name: "LName",
      placeholder: "...نام خانوادگی",
    },
    {
      title: "بیوگرافی",
      name: "UserAbout",
      placeholder: "...بیوگرافی",
    },
    {
      title: "ادرس",
      name: "HomeAdderess",
      placeholder: "              ...ادرس",
    },
  ];
  const leftArrayInps = [
    {
      title: "نام",
      name: "FName",
      placeholder: "...نام ",
    },
    {
      title: "شماره ملی",
      name: "NationalCode",
      placeholder: "...شماره ملی",
    },
    {
      title: "تاریخ تولد",
      name: "BirthDay",
      type: "date",
      placeholder: "...تاریخ تولد ",
    },
  ];
  return (
    <Formik
      initialValues={{
        Gender: true,
        ReceiveMessageEvent: false,
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
          <label htmlFor="pic2" className="cursor-pointer">
            <img
              src={personImg ? URL.createObjectURL(personImg) : defaultImg}
              alt=""
              className="w-[150px]"
            />
          </label>
          <input
            className="hidden"
            type="file"
            id="pic2"
            onChange={(e) => setPersonImg(e.target.files[0])}
          />
        </div>
        <div className="flex flex-wrap">
          <div className="  w-1/2  flex flex-col justify-start  ">
            {rightArrayInps.map((el, index) => (
              <PanelInps {...el} key={index} />
            ))}
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                اطلاع رویداد ها
              </span>
              <Field
                as="select"
                name="ReceiveMessageEvent"
                className=" w-[85%] m-auto text-right bg-white text-[#9ca3af] h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5 "
              >
                <option className=" font-irSans" value="true">
                  بله
                </option>
                <option className=" font-irSans" value="false">
                  خیر
                </option>
              </Field>
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="ReceiveMessageEvent"
                  component={"div"}
                  className="error text-red-500 text-center"
                />
              </div>
            </div>
          </div>
          <div className="  w-1/2  flex flex-col justify-start ">
            {leftArrayInps.map((el, index) => (
              <PanelInps {...el} key={index} />
            ))}
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                جنسیت
              </span>
              <Field
                as="select"
                name="Gender"
                className="bg-white w-[85%] m-auto text-right h-[50px] text-[#9ca3af] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
              >
                <option value="true">مرد</option>
                <option value="false">زن</option>
              </Field>
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="Gender"
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
