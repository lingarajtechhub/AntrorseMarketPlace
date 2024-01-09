import React, { useState } from "react";

import { IoMdInformationCircle } from "react-icons/io";
const numberOfDigits = 6;

const OTP = () => {
  const [otpValues, setOtpValues] = useState(
    new Array(numberOfDigits).fill("")
  );

  const handleChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otpValues.join("");
  };

  return (
    <section className="flex  min-h-screen  items-center justify-center ">
      <div className=" flex w-full max-w-md flex-col gap-8  p-5 bg-white px-6  shadow-2xl  rounded-md ">
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <p className="font-semibold text-2xl">OTP Verification</p>
          <p className="text-sm font-medium text-gray-400">
            Enter the 6 digit verification code recieved on your email
            co**@company.com
          </p>
        </div>

        <div className="flex items-center justify-between text-center gap-2">
          <div className="flex items-center justify-between gap-2">
            <p className="font-medium"> Verification Code </p>
            <IoMdInformationCircle size={"1rem"} />
          </div>
          <p className="text-sm font-medium text-gray-400">Resend OTP</p>
        </div>
        <form action="" method="post">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              {otpValues.map((value, index) => (
                <div key={index} className="w-8 h-8">
                  <input
                    className="w-full h-full text-center outline-none rounded-md border border-gray-200 text-lg ring-1 ring-slate-600 bg-white focus:bg-gray-50 focus:ring-1 focus:ring-blue-700"
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    maxLength="1"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-5">
              <div>
                <button
                  onClick={handleSubmit}
                  className="flex flex-row items-center justify-center text-center w-full border rounded-md outline-none py-2 bg-blue-700 border-none text-white text-sm shadow-sm"
                >
                  Verify Account
                </button>
              </div>

              <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't receive code?</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OTP;
