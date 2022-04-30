import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = { name: "", email: "", channel: "" };
const onSubmit = (values) => {
  console.log(values);
  alert("The form is Send");
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "♦ This is required";
  }
  if (!values.email) {
    errors.email = "♦ This is required";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = "♦ Invalid Email Format";
  }
  if (!values.channel) {
    errors.channel = "♦ This is required";
  }
  return errors;
};
const formSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Email Format").required("Required!"),
  channel: Yup.string().required("Required!"),
});

const OldForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: formSchema,
  });
  // console.log("Error", formik.errors);
  // console.log("Visited", formik.touched);
  return (
    <>
      <form className="flex" onSubmit={formik.handleSubmit}>
        <div className=" flex flex-col justify-center items-center h-screen w-[100%] bg-gradient-to-r from-gray-900 to-blue-800 ">
          <div className="bg-white rounded-[10px] w-[550px] p-3 ">
            <h2 className="text-center font-medium font-sans text-6xl ">
              Form
            </h2>
            <div className="flex flex-col font-roleways mt-8 mb-6 ">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="p-3 rounded block w-full border-2  focus: outline-none focus:ring focus:border-blue-500 "
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-400 flex flex-row">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col font-roleways mt-4 mb-6">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="p-3 rounded block w-full border-2 focus: outline-none focus:ring focus:border-blue-500 "
              />

              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-400">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="flex flex-col font-roleways mt-4 mb-6">
              <input
                type="text"
                name="channel"
                placeholder="Enter Channel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.channel}
                className="p-3 rounded block w-full border-2 focus: outline-none focus:ring focus:border-blue-500 "
              />
              {formik.touched.channel && formik.errors.channel ? (
                <div className="text-red-400">{formik.errors.channel}</div>
              ) : null}
            </div>

            <input
              type="submit"
              className="p-4 w-[50%] cursor-pointer rounded-md bg-gray-800 text-white mr-auto ml-auto block hover:bg-gray-700 "
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default OldForm;
