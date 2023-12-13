import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import {
  addArticleComment,
  addComment,
} from "../../../../Core/Services/api/course/comment/addComment/addComment";
import { Input } from "../../Inputs/Input";
import { Button } from "../../buttons";
import { commentValidation } from "../../../../Core/Validation/yup";
import { basicGet } from "../../../../Core/Services/api/course/courseList/courseList";

const AddArticleComment = ({ newsId }) => {
  // const [Value, setValue] = useState();
  // const [UserInfoo, setUserInfoo] = useState()

  // const getUserInfo = async () => {
  //     const userInfo = await basicGet(`/SharePanel/GetProfileInfo`)
  //     // //console.log(userInfo);
  //     setUserInfoo(userInfo)
  // }
  const onSubmit = async (values) => {
    // setValue(values);
    const obj = {
      newsId: newsId,
      title: values.title,
      describe: values.describe,
    };
    const user = await addArticleComment(obj);
    console.log(user);
    console.log(obj);
    if(user.success==true){
      toast.success("کامنت شما با موفقیت ثبت شد")
    }
    else{
      toast.error("مشکلی در ارسال نظر وجود دارد")
    }
  };

  return (
    <div className=" w-full flex ">
      <div className=" w-[1000px] m-auto flex justify-evenly">
        <Formik
          initialValues={{
            title: "",
            describe: "",
          }}
          validationSchema={commentValidation}
          onSubmit={(values) => onSubmit(values)}
        >
          <Form className=" flex w-full flex-col items-center font-irSans transition-all">
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[30px] mb-[30px] px-[40px]">
              <Input
                topic={"عنوان نظر"}
                className="rounded-[20px]"
                placeHolder={"...عنوان نظر"}
                type={"text"}
                name={"title"}
                as={"input"}
              />
            </div>
            <div className="flex flex-col w-full relative sm:w-3/4 lg:w-full mb-[10px] px-[40px]">
              <Input
                topic={"پیام شما"}
                className="rounded-[20px] min-h-[120px] max-h-[120px] pt-5"
                placeHolder={"...متن پیام"}
                type={"text"}
                name={"describe"}
                as={"textarea"}
              />
            </div>
            <Button
              className="bg-[#fcbf49] hover:bg-[#c89c44] text-[#fff]"
              type={"submit"}
              children={"ثبت"}
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export { AddArticleComment };
