import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FaArrowLeftLong, FaCcVisa } from "react-icons/fa6";

import image2 from "../../assets/women/women2.jpg";
import { IoMdInformationCircle } from "react-icons/io";

const CartPage = () => {
  // const cartItems = [
  //   {
  //     image: image2,
  //     title: "Men greeen Solid Zippered full slim fit bomber jacket",
  //     color: "Blue",
  //     size: "S",
  //     quantity: 5,
  //     price: 25000,
  //   },
  //   {
  //     image: image2,
  //     title: "Men greeen Solid Zippered full slim fit bomber jacket",
  //     color: "Blue",
  //     size: "S",
  //     quantity: 10,
  //     price: 25000,
  //   },
  //   {
  //     image: image2,
  //     title: "Men greeen Solid Zippered full slim fit bomber jacket",
  //     color: "Blue",
  //     size: "S",
  //     quantity: 1,
  //     price: 25000,
  //   },
  //   {
  //     image: image2,
  //     title: "Men greeen Solid Zippered full slim fit bomber jacket",
  //     color: "Blue",
  //     size: "S",
  //     quantity: 5,
  //     price: 25000,
  //   },
  //   {
  //     image: image2,
  //     title: "Men greeen Solid Zippered full slim fit bomber jacket",
  //     color: "Blue",
  //     size: "S",
  //     quantity: 10,
  //     price: 25000,
  //   },
  //   {
  //     image: image2,
  //     title: "Men greeen Solid Zippered full slim fit bomber jacket",
  //     color: "Blue",
  //     size: "S",
  //     quantity: 1,
  //     price: 25000,
  //   },
  // ];

  const cartItems = JSON.parse(localStorage.getItem("cart")) ?? [];
  console.log(cartItems, "cartItems");

  return (
    <div className="bg-gray-100 flex  items-center justify-center min-h-screen p-4">
      <div className="max-w-7xl flex flex-1 border-2 border-red-800 min-h-[90vh] shadow-md  p-4  rounded-xl mx-auto">
        <div className="flex flex-col flex-1">
          <span className="flex items-center gap-4 text-sm">
            <FaArrowLeftLong />
            <span>Continue Shopping</span>
          </span>

          <div className="flex items-end gap-4 my-[3rem]">
            <span className="text-3xl font-semibold">Shopping cart</span>
            <span className="text-red-600 font-bold text-sm">{`${cartItems.length} items`}</span>
          </div>

          <div className="flex flex-col gap-4 flex-1 max-h-[30rem] overflow-y-scroll ">
            {cartItems.map((item, index) => {
              return (
                <div className="flex gap-2" key={index}>
                  <img
                    src={item.image}
                    alt="Product 2"
                    className=" w-24 h-24 bg-white object-cover shadow rounded-md cursor-pointer"
                  />

                  <div className="flex flex-col max-w-[40rem] gap-1">
                    <p className=" font-bold text-lg">{item.title}</p>
                    <p className="text-md text-gray-500">
                      {`Color: ${item.specifications.color.toLowerCase()} size: ${item.size.toLowerCase()}`}{" "}
                    </p>
                    <p className="text-md text-gray-500">
                      Qty:
                      <select
                        className="text-md text-gray-500"
                        value={item.quantity}
                      >
                        {/* Assuming you have a predefined set of quantity options, you can map over them */}
                        {Array.from({ length: 5 }, (_, index) => (
                          <option key={index + 1} value={item.quantity + index}>
                            {item.quantity + index}
                          </option>
                        ))}
                      </select>
                    </p>
                  </div>

                  <div className="flex items-start gap-4 px-10 ">
                    <span className="text-lg  ">{`₹${item.price}`}</span>
                    <MdOutlineCancel size={"1rem"} className="pt-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-[35%] bg-slate-200 p-10">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="font-bold text-xl">John Doe</span>
                <span>Triplicane, mountround, Icehouse</span>
                <span>Chennai 600005</span>
                <span>India</span>
              </div>
              <span className="underline text-red-600">Edit</span>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="flex items-center gap-4">
                  <span className="font-bold text-xl"> Payment Method</span>
                  <IoMdInformationCircle size={"1rem"} />
                </p>

                <span>Credit Card</span>
                <p className="flex items-center gap-4">
                  <span> **** **** **** **** </span>

                  <FaCcVisa size={"1rem"} />
                </p>
              </div>
              <span className="underline text-red-600">Edit</span>
            </div>

            <div>
              <span className="font-bold text-lg">
                {" "}
                Do you have any discount Code
              </span>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter discount code"
                  className="bg-slate-100 px-4 py-2 rounded-md border-2 border-slate-600"
                />
                <span className="bg-slate-400 px-4 py-2 rounded-md">Apply</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span>Subtotal (3items) </span>
              <span>$100.00</span>
            </div>
            <div className="flex justify-between items-center ">
              <span className="flex flex-col">
                <span>Total (incl. VAT): </span>
                <span className="text-2xl font-bold">$100.00 </span>
              </span>
              <span className="bg-red-600 px-8 py-2 rounded-md">Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
