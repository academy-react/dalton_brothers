import { Field, Form, Formik } from "formik";
import React from "react";

const PanelSearch = () => {
  return (
    <>
      <Formik initialValues={{ PanelSearch: "" }}>
        <Form className="w-full h-full rounded-[30px]">
          <Field
            className="w-full h-[40px] rounded-[30px] px-5 text-right bg-mode-50 font-irSans"
            name="panelSearch"
            placeholder="... جستجو"
          ></Field>
        </Form>
      </Formik>
    </>
  );
};

export { PanelSearch };
