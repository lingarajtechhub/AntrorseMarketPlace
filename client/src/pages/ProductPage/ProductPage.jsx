import React, { useState } from "react";

import image1 from "../../assets/women/women1.png";
import image2 from "../../assets/women/women2.jpg";
import image3 from "../../assets/women/women3.jpg";
import image4 from "../../assets/women/women4.jpg";
import StarRating from "../../Components/StartRating/StartRating";

const ProductPage = () => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const categories = ["women", "T-shirt", "Crop Top"];
  const tags = ["Modern", "Latest"];
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-6xl shadow-md  p-4  mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className=" flex gap-5">
            {/* Small Product Images */}
            <div className="flex flex-col w-1/4 gap-2">
              <img
                src={image1}
                alt="Product 1"
                className="flex-1 w-24 bg-white object-cover shadow rounded-md cursor-pointer"
              />
              <img
                src={image2}
                alt="Product 2"
                className="flex-1 w-24 bg-white object-cover shadow rounded-md cursor-pointer"
              />
              <img
                src={image3}
                alt="Product 3"
                className="flex-1 w-24 bg-white object-cover shadow rounded-md cursor-pointer"
              />
              <img
                src={image4}
                alt="Product 4"
                className="flex-1 w-24 bg-white object-cover shadow rounded-md cursor-pointer"
              />
              <img
                src={image4}
                alt="Product 4"
                className="flex-1 w-24 bg-white object-cover shadow rounded-md cursor-pointer"
              />
            </div>

            {/* Large Product Image */}
            <img
              src={image2}
              alt="Product"
              className=" w-[30rem] h-[80vh] bg-white flex-1 rounded-md"
            />
          </div>
          <div className="w-[30rem] mt-4 md:mt-0 md:ml-4">
            {/* Product Details */}
            <div className="flex flex-col gap-6">
              <p className="text-3xl font-bold mb-2">
                Men greeen Solid Zippered full slim fit bomber jacket
              </p>

              <div className="flex items-center gap-2">
                <StarRating rating={4} />
                {`(${15})`}
              </div>

              <p className="flex font-bold  gap-2 items-center">
                <span className="text-xl">₹89,999</span>
                <span className="line-through">₹96,999</span>
                <span className="text-green-600 text-sm">7% off</span>
              </p>

              <p className="text-gray-600 mb-4">
                Product description goes here. Add any relevant details about
                the product.
              </p>

              <div>
                <p className="text-gray-600 ">Select Size</p>
                <div className="flex justify-start gap-2 w-full mt-2">
                  {sizes.map((size) => (
                    <span
                      key={size}
                      onClick={() => handleSizeClick(size)}
                      className={`p-2 text-center cursor-pointer w-16 border rounded-md ${
                        selectedSize === size
                          ? " ring-2 ring-blue-500"
                          : "bg-gray-200"
                      }`}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <button className="bg-red-600  w-[15rem] text-white py-2 px-4 rounded-md hover:bg-red-700">
                Add to Cart
              </button>

              <div className="mt-8">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-lg ">Category:</span>
                  <div className="flex justify-start gap-2 w-full text-md capitalize">
                    {categories.map((Category, index) => (
                      <span key={index}>
                        {`${Category} ${
                          categories.length - 1 === index ? "" : ","
                        }`}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-lg ">Tags:</span>
                  <div className="flex justify-start gap-2 w-full text-md capitalize">
                    {tags.map((tag, index) => (
                      <span key={index}>
                        {`${tag} ${tag.length - 1 === index ? "" : ","}`}
                      </span>
                    ))}
                  </div>
                </div>
              </div>    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
