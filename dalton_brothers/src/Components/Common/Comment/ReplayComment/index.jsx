import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { Input } from "../../Inputs/Input";
import { Button } from "../../buttons";
import { commentValidation } from "../../../../Core/Validation/yup";
import { replayComment } from "../../../../Core/Services/api/replayComment";

const ReplayComment = ({
  setReplay,
  comment,
  replayedCommentId,
  setEmotion,
  emotion,
}) => {
  const [selComment, setSelComment] = useState({});
  const getComment = () => {
    if (replayedCommentId) {
      const selectedComment = comment.find((el) => el.id === replayedCommentId);
      setSelComment(selectedComment);
    }
  };
  const handleReplay = async (values) => {
    var formdata = new FormData();
    formdata.append("CommentId", selComment.id);
    formdata.append("CourseId", selComment.courseId);
    formdata.append("Title", values.title);
    formdata.append("Describe", values.describe);

    const result = await replayComment(formdata);
    result.success === true && setEmotion(!emotion);
    result.success === true && setReplay(false);
  };
  useEffect(() => {
    getComment();
  }, []);
  return (
    <div className="w-[60%] py-[40px] rounded-3xl border-2 absolute top-[20%] left-[20%] z-10 bg-[#6c63ff]">
      <div
        className="absolute top-0 right-0 w-[40px] h-[40px] flex justify-center items-center border-2 border-[#272268] rounded-tr-3xl"
        onClick={() => setReplay(false)}
      >
        x
      </div>
      <div className=" w-[1000px] m-auto flex justify-evenly">
        <Formik
          initialValues={{
            title: "",
            describe: "",
          }}
          validationSchema={commentValidation}
          onSubmit={(values) => handleReplay(values)}
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

export { ReplayComment };
