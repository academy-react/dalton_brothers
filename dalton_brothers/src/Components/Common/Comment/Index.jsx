import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

const CommentPlace = () => {
  return (
    <div>
      <h1 className="text-center py-[40px] font-est text-slate-800 text-lg whitespace-nowrap">
        ارتباط با ما
      </h1>
      <Formik>
        <Form>
          <label>نام کاربری</label>
          <Field
            name="name"
            className="text-right"
            type="text"
            placeholder="نام کاربری..."
          />
          <ErrorMessage name="Title" component={"div"} className="error" />
          <label>پیام شما</label>
          <Field
            name="name"
            className="text-right"
            type="text"
            placeholder="متن پیام..."
          />
          <ErrorMessage name="Describe" component={"div"} className="error" />
        </Form>
      </Formik>
    </div>
  );
};

export default CommentPlace;
