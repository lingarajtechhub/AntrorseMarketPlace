import React from "react";
import Login from "./LoginPage/Login";
import OTP from "../Components/OTP";
import SignUp from "./SignUpPage/SignUp";

const LoginRegistration = () => {
  return (
    <div className="flex  flex-col justify-start  items-center h-screen w-full">
      <a
        href="#"
        className="flex flex-col items-center mb-6 gap-2 text-2xl font-semibold text-gray-900 "
      >
        <img
          className="w-48"
          src="https://technosoft.antrorse.org/assets/img/logo.png"
          alt="Antrorse logo"
        />
      </a>
      <div className="flex w-full pt-4 ">
        <SignUp />
        <Login />
      </div>
    </div>
  );
};

export default LoginRegistration;
