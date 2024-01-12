import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Img1 from "../../assets/women/women4.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";

const initialProducts = [
  {
    id: 1,
    image: Img1,
    brand: "Roadster",
    type: "Men Charcoal Grey Solid Biker Jacket",
    price: 1084,
    discount: 65,
  },
  {
    id: 2,
    image: Img2,
    brand: "Mast & Harbour",
    type: "Men Grey Solid Bomber",
    price: 2799,
    discount: 0,
  },
  {
    id: 3,
    image: Img3,
    brand: "Minions by Kook N Keech MTV",
    type: "Men Purple Printed Round Neck T-shirt",
    price: 494,
    discount: 55,
  },
  {
    id: 4,
    image: Img4,
    brand: "HERE&NOW",
    type: "Men Black Slim Fit Solid Casual Shirt",
    price: 607,
    discount: 60,
  },
  {
    id: 5,
    image: Img1,
    brand: "Roadster",
    type: "Men Charcoal Grey Solid Biker Jacket",
    price: 1084,
    discount: 65,
  },
  {
    id: 6,
    image: Img2,
    brand: "Mast & Harbour",
    type: "Men Grey Solid Bomber",
    price: 2799,
    discount: 0,
  },
  {
    id: 7,
    image: Img3,
    brand: "Minions by Kook N Keech MTV",
    type: "Men Purple Printed Round Neck T-shirt",
    price: 494,
    discount: 55,
  },
  {
    id: 8,
    image: Img4,
    brand: "HERE&NOW",
    type: "Men Black Slim Fit Solid Casual Shirt",
    price: 607,
    discount: 60,
  }, {
    id: 9,
    image: Img1,
    brand: "Roadster",
    type: "Men Charcoal Grey Solid Biker Jacket",
    price: 1084,
    discount: 65,
  },
  {
    id: 10,
    image: Img2,
    brand: "Mast & Harbour",
    type: "Men Grey Solid Bomber",
    price: 2799,
    discount: 0,
  },
  {
    id: 11,
    image: Img3,
    brand: "Minions by Kook N Keech MTV",
    type: "Men Purple Printed Round Neck T-shirt",
    price: 494,
    discount: 55,
  },
  {
    id: 12,
    image: Img4,
    brand: "HERE&NOW",
    type: "Men Black Slim Fit Solid Casual Shirt",
    price: 607,
    discount: 60,
  },
   
  
];


function formatPrice(price) {
  return "Rs." + price.toLocaleString("en-IN");
}

const Wishlist = () => {
  const [products, setProducts] = useState(initialProducts);

  const removeProduct = (id) => {
    setProducts((oldProducts) =>
      oldProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="container mx-auto p-4 sm:px-6 lg:px-8 ">
      <h1 className="text-2xl font-bold my-4 sm:text-3xl">
        My Wishlist {products.length} items
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden relative"
            key={product.type}
          >
            <RxCross2
              className="absolute top-0 right-0 m-2 text-black cursor-pointer z-10"
              size="24px"
              onClick={() => removeProduct(product.id)}
            />
            <div className="img-wrapper">
              <img
                src={product.image}
                alt={product.type}
                className="w-full h-48 object-cover sm:h-64 hover-zoom"
              />
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-700">
                {product.brand}
              </p>
              <p className="text-sm text-gray-600 truncate">{product.type}</p>
              <p className="text-lg font-bold text-gray-900">
                {formatPrice(product.price)}{" "}
                {product.discount > 0 && (
                  <span className="text-sm text-red-500">
                    ({product.discount}% OFF)
                  </span>
                )}
              </p>
              <button className="bg-red-600 text-white py-2 px-4 rounded mt-2">
                MOVE TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;



