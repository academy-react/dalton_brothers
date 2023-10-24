import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import React from "react";
import { Button } from "../../Common/buttons";

const EditProfile = () => {
  const validation = yup.object().shape({
    name: yup.string().required("این فیلد اجباریست"),
    userName: yup.string().required("این فیلد اجباریست"),
    phoneNumber: yup.string().required("این فیلد اجباریست"),
    nationalNumber: yup.string().required("این فیلد اجباریست"),
    region: yup.string().required("این فیلد اجباریست"),
    city: yup.string().required("این فیلد اجباریست"),
    email: yup.string().required("این فیلد اجباریست"),

  });
  const onSubmit = (values) => {
    const ooo = {
    name : values.name,
    userName : values.userName,
    phoneNumber : values.phoneNumber,
    nationalNumber : values.nationalNumber,
    region : values.region,
    city : values.city,
    email : values.email, 
    }
    console.log(ooo);

  }
  return (
    <Formik
      initialValues={{
        userName: "",
        name: "",
        phoneNumber: "",
        nationalNumber: "",
        region: "",
        city: "",
        email:""
      }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validation}
    >
      <Form className=" w-full h-full flex flex-row-reverse">
        <div className="  w-1/2 h-full flex flex-col justify-center  ">
          <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[30px] mb-[30px] px-[40px]">
            <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
              نام کاربری
            </span>
            <Field
              name="userName"
              className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-[#949494] border-[2px] peer px-5"
              type="text"
              placeholder="...نام کاربری"
            />
            <ErrorMessage name="userName" component={"div"} className="error" />
          </div>
          <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[30px] mb-[30px] px-[40px]">
            <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
              نام
            </span>
            <Field
              name="name"
              className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-[#949494] border-[2px] peer px-5"
              type="text"
              placeholder="...نام "
            />
            <ErrorMessage name="name" component={"div"} className="error" />
          </div>
          <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[30px] mb-[30px] px-[40px]">
            <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
              شماره همراه
            </span>
            <Field
              name="phoneNumber"
              className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-[#949494] border-[2px] peer px-5"
              type="text"
              placeholder="...شماره همراه "
            />
            <ErrorMessage
              name="phoneNumber"
              component={"div"}
              className="error"
            />
          </div>
          <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[30px] mb-[30px] px-[40px]">
            <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
              شماره ملی
            </span>
            <Field
              name="nationalNumber"
              className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-[#949494] border-[2px] peer px-5"
              type="text"
              placeholder="...شماره ملی "
            />
            <ErrorMessage
              name="nationNumber"
              component={"div"}
              className="error"
            />
          </div>
          <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[30px] mb-[30px] px-[40px]">
            <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
              استان
            </span>
            <Field
              name="region"
              className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-[#949494] border-[2px] peer px-5"
              type="text"
              placeholder="...استان "
            />
            <ErrorMessage name="region" component={"div"} className="error" />
          </div>
        </div>
        <div className="  w-1/2 h-full flex flex-col justify-center  ">
          <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[30px] mb-[30px] px-[40px]">
            <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
              شهر
            </span>
            <Field
              name="city"
              className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-[#949494] border-[2px] peer px-5"
              type="text"
              placeholder="...شهر "
            />
            <ErrorMessage name="city" component={"div"} className="error" />
          </div>
          <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[30px] mb-[30px] px-[40px]">
            <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
               ایمیل
            </span>
            <Field
              name="email"
              className=" w-[85%] m-auto text-right h-[50px] rounded-full outline-none border-[#949494] border-[2px] peer px-5"
              type="text"
              placeholder="...ایمیل "
            />
            <ErrorMessage name="email" component={"div"} className="error" />
          </div>
          <Button text={'ثبت تغیرات'} style={'bg-orange-300 w-[50%] m-auto z-30'} type={'submit'}/>
        </div>
      </Form>
    </Formik>

  );
};

export { EditProfile };
