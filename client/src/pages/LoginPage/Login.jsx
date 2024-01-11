import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { useFormik } from "formik";

const Login = () => {
  const initialValues = {
    name: "",
    password: "",
  };
  const loginSchem = Yup.object({
    name: Yup.string().min(2).required("please enter Your username"),
    password: Yup.string().min(6).required("please enter Your password"),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchem,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  // const handleFormSubmit = async (e) => {
  //     e.preventDefault();
  //     const response = await fetch('url/demo', {
  //       method: 'POST',
  //       mode: 'cors',
  //       cache: 'no-cache',
  //       credentials: 'same-origin',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email: userName,
  //         password: password,
  //       }),
  //     });
  //     const json = await response.json();
  //     console.log(json);

  //     if (json.sucess===true) {
  //       localStorage.setItem('token', json.authtoken);
  //       navigate('/'); // Use navigate for navigation
  //     } else {
  //       alert('Invalid credentials');
  //     }

  //   };

  return (
    <div className="bg-gray-50 h-screen  flex-1 ">
      {/* <div className="flex flex-col justify-center items-center bg-cover rounded-lg shadow-2xl w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-4">
        <span className="text-2xl font-semibold mt-7 mb-3">Login</span>

        <form
          className="m-3 flex flex-col w-full p-5 px-"
          onSubmit={handleSubmit}
        >
          <label className="text-md">Username / Mobile</label>
          <input
            className="p-2 bg-white outline-none border-b border-red-400 mb-2"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your username or mobile"
          />
          <label className="text-md mt-2">Password</label>
          <input
            className="p-2 bg-white border-b border-red-400 outline-none mb-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password.."
          />

          {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

          <button
            className="mt-4 mb-3 p-2 from-lightcoral via-lightcoral to-darkcoral border-none text-white rounded-full bg-red-600"
            type="submit"
          >
            Login
          </button>

          <div className="mb-4">
            <NavLink
              to="/forgot-password"
              className="text-sm text-gray-600 hover:underline"
            >
              Forgot Password?
            </NavLink>
          </div>
        </form>

        <h4> or Login with</h4>

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

        <div className="mb-4">
          <span>Create Account ? </span>
          <NavLink
            to="/forgot-password"
            className="text-md text-red-600 hover:underline"
          >
            Sign up
          </NavLink>
        </div>
      </div> */}

      <div className="flex flex-col items-center justify-center  px-6 py-8 mx-auto ">
        <div className="w-full bg-white rounded-lg shadow  sm:max-w-md   ">
          <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Login
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
                  Username
                </label>
                <input
                  type="text"
                  name="name"
                  id="text"
                  className="bg-gray-50 border text-gray-900 sm:text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-slate-600 block w-full p-2.5  "
                  placeholder="username"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />{" "}
                {errors.name && touched.name ? (
                  <p className="text-red-600 text-[0.75rem] capitalize">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              {/* <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className=" text-sm font-medium text-gray-900 "
              >
                Email Number
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border text-gray-900 sm:text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-slate-600 block w-full p-2.5  "
                placeholder="name@company.com "
                value={registerId}
                onChange={(e) => setRegisterId(e.target.value)}
                required
              />
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
                value={registerId}
                onChange={(e) => setRegisterId(e.target.value)}
                required
              />
            </div> */}
              <div className="flex flex-col gap-1">
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
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="text-red-600 text-[0.75rem] capitalize">
                    {errors.password}
                  </p>
                ) : null}
              </div>
              {/* <div className="flex flex-col gap-1">
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
                Login
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100">Or Login with</span>
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
              Dont have an account?{" "}
              <Link to="/signup" className=" text-red-600 hover:underline ">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
