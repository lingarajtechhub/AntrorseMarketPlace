import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import TodayOfferProducts from "../../Components/TodayOfferProducts/TodayOfferProducts";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
  };
  const signUpSchema = Yup.object({
    name: Yup.string().min(3).required("please enter your username"),
    email: Yup.string().email().required("please enter your email"),
    mobile: Yup.number()
      .typeError("That doesn't look like a phone number")
      .negative("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10)
      .max(13)
      .required("A phone number is required"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div className="flex flex-col">
      <section className="bg-gray-50 h-screen flex-1 ">
        <div className="flex flex-col items-center justify-center  px-6 py-8 mx-auto ">
          {/* <a
          href="#"
          className="flex flex-col items-center mb-6 gap-2 text-2xl font-semibold text-gray-900 "
        >
          <img
            className="w-48"
            src="https://technosoft.antrorse.org/assets/img/logo.png"
            alt="Antrorse logo"
          />
        </a> */}
          <div className="w-full bg-white rounded-lg shadow  sm:max-w-md ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Create your Account
              </h1>

              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="text"
                    className=" text-sm font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="text"
                    className="bg-gray-50 border text-gray-900 sm:text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-slate-600 block w-full p-2.5  "
                    placeholder="John Doe"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? (
                    <p className="text-red-600 text-[0.75rem] capitalize">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className=" text-sm font-medium text-gray-900 "
                  >
                    Email ID (optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border text-gray-900 sm:text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-slate-600 block w-full p-2.5  "
                    placeholder="name@company.com "
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="text-red-600 text-[0.75rem] capitalize">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="mobile"
                    className=" text-sm font-medium text-gray-900 "
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    className="bg-gray-50 border text-gray-900 sm:text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-slate-600 block w-full p-2.5  "
                    placeholder="+911234567890"
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.mobile && touched.mobile ? (
                    <p className="text-red-600 text-[0.75rem] capitalize">
                      {errors.mobile}
                    </p>
                  ) : null}
                </div>
                {/* <div className="flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className=" text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="confirm-password"
                  className=" text-sm font-medium text-gray-900 "
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div> */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 accent-red-500"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm ">
                    <label htmlFor="terms" className="font-light text-gray-500">
                      I accept the{" "}
                      <a
                        className="font-medium text-red-600 hover:underline "
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-slate-200 bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-100">Or Register with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <FaFacebook fill="blue" size={"1.5rem"} />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <FaXTwitter size={"1.5rem"} />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <FcGoogle size={"1.5rem"} />
                  </a>
                </div>
              </div>

              <p className="text-sm  text-gray-500   font-medium">
                Already have an account?{" "}
                <Link to="/login" className=" text-red-600 hover:underline ">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <TodayOfferProducts />
    </div>
  );
};

export default SignUp;
