import React, { useState } from "react";
import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: { name: "", email: "", channel: "" },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          values.email
        )
      ) {
        errors.email = "Invalid Email Format";
      }
      if (!values.channel) {
        errors.channel = "Required";
      }
      return errors;
    },
  });
  console.log(formik.errors);
  return (
    <>
      <form
        className="bg-slate-600 flex flex-col h-[100%] justify-evenly"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-row">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className="text-red-400">{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="text-red-400">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label>Channel</label>
          <input
            type="text"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.channel ? (
            <div className="text-red-400">{formik.errors.channel}</div>
          ) : null}
        </div>
        <div>
          <input type="submit" className="bg-gray-400" />
        </div>
      </form>
    </>
  );
};

export default Form;
