import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = { name: "", email: "", channel: "", comment: "" };
const onSubmit = (values) => {
  console.log(values);
  alert("The form is Send");
};
const formSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Email Format").required("Required!"),
  channel: Yup.string().required("Required!"),
  comment: Yup.string().required("Required!"),
});

const FormLesson = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={formSchema}
    >
      <Form className="flex">
        <div className=" flex flex-col justify-center items-center h-screen w-[100%] bg-gradient-to-r from-gray-900 to-blue-800 ">
          <div className="bg-white rounded-[10px] w-[550px] p-3 ">
            <h2 className="text-center font-medium font-sans text-4xl ">
              Form
            </h2>
            <div className="flex flex-col font-roleways mt-8 mb-6 ">
              <Field
                type="text"
                name="name"
                placeholder="Enter Name"
                className="p-3 rounded block w-full border-2  focus: outline-none focus:ring focus:border-blue-500 "
              />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div className="flex flex-col font-roleways mt-4 mb-6">
              <Field
                type="email"
                name="email"
                placeholder="Enter Email"
                className="p-3 rounded block w-full border-2 focus: outline-none focus:ring focus:border-blue-500 "
              />
              <ErrorMessage name="email" component={TextError} />
            </div>

            <div className="flex flex-col font-roleways mt-4 mb-6">
              <Field
                type="text"
                name="channel"
                placeholder="Enter Channel"
                className="p-3 rounded block w-full border-2 focus: outline-none focus:ring focus:border-blue-500 "
              />
              <ErrorMessage name="channel" component={TextError} />
            </div>

            <div className="flex flex-col font-roleways mt-4 mb-6">
              <Field
                as="textarea"
                name="comment"
                placeholder="Enter Comments"
                className="p-3 rounded block w-full border-2 focus: outline-none focus:ring focus:border-blue-500 "
              />
              <ErrorMessage name="comment">
                {(errMsg) => {
                  return <div className="text-green-500">{errMsg}</div>;
                }}
              </ErrorMessage>
            </div>

            <button
              type="submit"
              className="p-4 w-[50%] cursor-pointer rounded-md bg-gray-800 text-white mr-auto ml-auto block hover:bg-gray-700 "
            >
              Submit
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default FormLesson;
