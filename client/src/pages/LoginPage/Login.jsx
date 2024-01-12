import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

  const handleCancel = () => {
    
    navigate("/");
  };



  return (
    <div className="bg-gray-50   flex-1 mb-14 ">
      

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
         

                     <div className=" flex justify-end space-x-1 ">

                <div>
                <Link to={'/forgetpassword'} className="text-blue-700 text-sm underline">forgot password</Link>
                </div>
                <span> / </span>
                <div>
                <Link to={'/forgetpassword'} className="text-blue-700 text-sm underline">forgot username</Link>
                </div>
              </div>

              {/* <div className="flex items-start">
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
              </div> */}

              
              {/* <button
                type="submit"
                className="w-full text-slate-200 bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"
              >
                Login
              </button> */}



                        
                <div className="flex flex-row space-x-3 items-center justify-center">
                  <div className="w-3/4 flex items-center justify-center">
                    <button
                      type="submit"
                      className="w-full text-slate-200 bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"
                    >
                      Login
                    </button>
                  </div>

                  <div className="w-1/4 flex items-center justify-center">
                    <button
                      type="submit"
                      className="w-full text-black bg-gray-200 focus:ring-3 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>


            

              <div className="flex">
                {/* <span> or </span> */}
                <Link to={'/OTP'} className="text-blue-700 text-sm underline">Login with OTP</Link>
              </div>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100">or Login with</span>
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
              Don't have an account?{" "}
              <Link to="/signup" className=" text-red-600 hover:underline ">
                Sign Up
              </Link>
            </p>
          </div>
        {/* <div className=" flex justify-end mb-3 p-2">

<button
  type="submit"
  className=" text-black bg-gray-200  focus:ring-3 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 "
  onClick={handleCancel}
  >
  cancel
</button>
  </div> */}
      </div>
   </div>
    </div>
  );
};

export default Login;
