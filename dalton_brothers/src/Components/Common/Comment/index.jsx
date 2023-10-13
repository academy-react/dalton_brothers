import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";

import { Button } from "../Buttons";
import { Input } from "../Inputs/Input";
import { Title } from "../Title/Title";

const CommentPlace = () => {
  // validation................................
  const validation = yup.object().shape({
    name: yup.string().required("این فیلد اجباریست"),
    comment: yup.string().required("این فیلد اجباریست"),
  });

  const onSubmit = (values) => {
    const obj = {
      name: values.name,
      comment: values.comment,
    };
    console.log(obj);
  };

  return (
    <div>
      <Title topic={"ارتباط با ما"} style={"text-[#6d6b6b] text-center"} />
      <Formik
        initialValues={{
          name: "",
          comment: "",
        }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validation}
      >
        <Form className="flex flex-col items-center gap-[40px] mt-[45px]">
          <Input
            topic={"نام کاربر"}
            style={"rounded-[999px]"}
            placeHolder={"...نام کاربری"}
            type={"text"}
            name={"name"}
            as={""}
          />
          <Input
            topic={"پیام شما"}
            style={"min-h-[120px] max-h-[150px] rounded-[20px]"}
            placeHolder={"...متن پیام"}
            type={"text"}
            name={"comment"}
            as={"textarea"}
          />
          <Button
            style={"bg-[#fcbf49] hover:bg-[#c89c44] text-[#fff]"}
            type={"submit"}
            text={"ثبت"}
          />
        </Form>
      </Formik>
    </div>
  );
};

export { CommentPlace };
