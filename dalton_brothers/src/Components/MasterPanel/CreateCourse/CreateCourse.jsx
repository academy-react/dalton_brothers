import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button } from "../../Common/buttons";
import { editProfileValidation } from "../../../Core/Validation/yup";
import { createCourse } from "../../../Core/Services/api/masterPanel/createCourse";

import defaultImg from "../../../assets/Images/register-person.png";
import { PanelInps } from "../../Common/Inputs/PanelInputs";

const CreateCourse = () => {
  const [personImg, setPersonImg] = useState();

  const onSubmit = async (values) => {
    var formdata = new FormData();
    // formdata.append("Title", values.Title);
    // formdata.append("Describe", values.Describe);
    // formdata.append("MiniDescribe", "<string>");
    // formdata.append("Capacity", values.Capacity);
    formdata.append("CourseTypeId", "<integer>");
    // formdata.append("SessionNumber", values.SessionNumber);
    // formdata.append("CurrentCoursePaymentNumber", "<integer>");
    formdata.append("TremId", "<integer>");
    formdata.append("ClassId", "<integer>");
    formdata.append("CourseLvlId", "<integer>");
    // formdata.append("Cost", values.Cost);
    // formdata.append("UniqeUrlString", "<string>");
    // formdata.append("Image", "<string>");
    // formdata.append("StartTime", values.StartTime);
    // formdata.append("EndTime", values.EndTime);
    // formdata.append("GoogleSchema", "<string>");
    // formdata.append("GoogleTitle", "<string>");
    formdata.append("CoursePrerequisiteId", "<uuid>");
    // formdata.append("ShortLink", "<string>");
    // formdata.append("TumbImageAddress", "<string>");
    // formdata.append("ImageAddress", "<string>");

    const user = await createCourse(userNewObj);

    console.log(user);
  };
  const rightArrayInps = [
    {
      title: "عنوان",
      name: "Title",
      placeholder: "...عنوان",
    },
    {
      title: "توضیحات کلی",
      name: "Describe",
      placeholder: "...توضیحات کلی",
    },
    {
      title: "ظرفیت",
      name: "Capacity",
      placeholder: "...ظرفیت",
    },
    {
      title: "تعداد سرفصل ها",
      name: "SessionNumber",
      placeholder: "...تعداد سرفصل ها",
    },
  ];
  const leftArrayInps = [
    {
      title: "قیمت",
      name: "Cost",
      placeholder: "...قیمت ",
    },
    {
      title: "تاریخ شروع",
      name: "StartTime",
      type: "date",
      placeholder: "...تاریخ شروع",
    },
    {
      title: "تاریخ پایان",
      name: "EndTime",
      type: "date",
      placeholder: "...تاریخ پایان",
    },
  ];
  return (
    <Formik
      initialValues={{
        Gender: "true",
        ReceiveMessageEvent: "false",
        Title: "",
        Describe: "",
        Capacity: "",
        SessionNumber: "",
        Cost: "",
        StartTime: "00/00/0000",
        EndTime: "00/00/0000",
      }}
      onSubmit={onSubmit}
      // validationSchema={editProfileValidation}
    >
      <Form className=" w-[900px]  h-[900px] overflow-scroll flex flex-col font-irSans">
        <div className="rounded-full cursor-pointer self-center mb-5">
          <label htmlFor="pic1" className="cursor-pointer">
            <img
              src={personImg ? URL.createObjectURL(personImg) : defaultImg}
              alt=""
              className="w-[150px]"
            />
          </label>
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

export { CreateCourse };
