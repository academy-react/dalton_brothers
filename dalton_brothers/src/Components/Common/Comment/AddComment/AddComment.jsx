import { Field, Form, Formik } from "formik";
import React from "react";

const AddComment = () => {
    const onSubmit = (values) => {
        console.log(values);

    };
  return (
    <div className=" w-full h-[180px] absolute right-0 bottom- flex ">
      <div className=" w-[1000px] h-full m-auto flex justify-evenly">
        <Formik initialValues={{
            comments : "",
        }}
        onSubmit={(values) => onSubmit(values)}
        
        >
        <Form>
          <Field
            placeholder=" نظر خود را وارد کنید "
            type = "text"
            name = "comments"
            className="xl:w-[900px] lg:w-[800px] md:w-[600px] md:h-[190px] lg:h-[150px] w-[450px] h-[170px] rounded-[60px] border border-gray-700 text-right"></Field>
          <button
            type="submit"
            className=" lg:px-8 lg:py-4 md:px-6 md:py-3 px-4 py-2 text-xl m-auto rounded-[20px] relative xl:left-[252px] xl:bottom-[257px] lg:-left-[572px] lg:bottom-[152px] md:-left-[452px] md:bottom-[167px] -left-[372px] bottom-[152px] bg-green-400 whitespace-nowrap "
          >
            {" "}
            ثبت نظر{" "}
          </button>
        </Form>
        </Formik>
      </div>
    </div>
  );
};

export { AddComment };
