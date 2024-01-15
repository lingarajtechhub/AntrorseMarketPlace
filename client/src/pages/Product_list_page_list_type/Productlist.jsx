import React, { useEffect } from "react";
// import shirt from '../../assets/shirt/shirt.png'
// import shirt2 from '../../assets/shirt/shir2.png'
// import shirt3 from '../../assets/shirt/shir3.png'

import image1 from "../../assets/women/women1.png";
import image2 from "../../assets/women/women2.jpg";
import image3 from "../../assets/women/women3.jpg";
import image4 from "../../assets/women/women4.jpg";

import shirt from "../../assets/shirt/shirt.png";
import shirt2 from "../../assets/shirt/shirt2.png";
import shirt3 from "../../assets/shirt/shirt3.png";
import Navbar from "../../Components/Navbar/Navbar";
import { FaRegHeart } from "react-icons/fa";
import StarRating from "../../Components/StartRating/StartRating";
import products from "../../Components/Products/Products";
import Hero from "../../components/Hero/Hero";

import ProductFilter from "../../Components/ProductListList/ProductFilter";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/Cart/CartSlice";

export default function Productlist() {
  const dispatch = useDispatch();

  const itemsInCart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    console.log(itemsInCart);
  }, [itemsInCart]);

  const addProduct = (product) => {
    dispatch(addToCart(product));
  };
  // const sizes = ["XS", "S", "M", "L", "XL"];
  // const products = [
  //   {
  //     id: 1,
  //     productName: "Denim Shirt",
  //     productImage: image1,
  //     specifications: ["Size:M", "Color: Blue", "Material: Cotton"],
  //     price: 599.99,
  //     oldprice: 899,
  //     rating: 4.5,
  //     rating_review: "82,384 Rating & 5,459 Review",
  //     numberOfRatings: 120,
  //     sizes: ["XS", "S", "M", "L", "XL"],
  //   },
  //   {
  //     id: 2,
  //     productName: "Denim Shirt",
  //     productImage: image2,
  //     specifications: ["Size:M", "Color: Blue", "Material: Cotton"],
  //     price: 1299.99,
  //     oldprice: 2099,
  //     rating: 4.8,
  //     numberOfRatings: 80,
  //     rating_review: "82,384 Rating & 5,459 Review",
  //     sizes: ["XS", "S", "M", "L", "XL"],
  //   },
  //   {
  //     id: 3,
  //     productName: "Denim Shirt",
  //     productImage: image3,
  //     specifications: ["Size:M", "Color: Blue", "Material: Cotton"],
  //     price: 79.99,
  //     oldprice: 2899,
  //     rating: 4.2,
  //     numberOfRatings: 150,
  //     rating_review: "82,384 Rating & 5,459 Review",
  //     sizes: ["XS", "S", "M", "L", "XL"],
  //   },
  //   {
  //     id: 4,
  //     productName: "Denim Shirt",
  //     productImage: image4,
  //     specifications: ["Size:M", "Color: Blue", "Material: Cotton"],
  //     price: 79.99,
  //     oldprice: 4899,
  //     rating: 4.2,
  //     numberOfRatings: 150,
  //     rating_review: "82,384 Rating & 5,459 Review",
  //     sizes: ["XS", "S", "M", "L", "XL"],
  //   },
  //   {
  //     id: 5,
  //     productName: "Denim Shirt",
  //     productImage: image1,
  //     specifications: ["Size:M", "Size:M", "cotton shirt", "cotton shirt"],
  //     price: 79.99,
  //     oldprice: 1899,
  //     rating: 4.2,
  //     numberOfRatings: 150,
  //     rating_review: "82,384 Rating & 5,459 Review",
  //     sizes: ["XS", "S", "M", "L", "XL"],
  //   },
  //   {
  //     id: 6,
  //     productName: "Denim Shirt",
  //     productImage: image1,
  //     specifications: ["Size:M", "Size:M", "cotton shirt", "cotton shirt"],
  //     price: 79.99,
  //     oldprice: 1899,
  //     rating: 4.2,
  //     numberOfRatings: 150,
  //     rating_review: "82,384 Rating & 5,459 Review",
  //     sizes: ["XS", "S", "M", "L", "XL"],
  //   },

  //   // Add more products as needed
  // ];

const products = [
  {
    "_id": { "$oid": "5fb8d1a5c7dd740001d6b4a4" },
    "id": 1,
    "images": {
      "small": {
        "url": "../assets/women/women1.png",
        "width": "120",
        "height": "150"
      },
      "medium": {
        "url": "http://example.com/men_clothing_medium.jpg",
        "width": "300",
        "height": "375"
      },
      "large": {
        "url": "http://example.com/men_clothing_large.jpg",
        "width": "600",
        "height": "750"
      },
  
      "allView": [
        "../assets/women/women1.png",
        "../assets/women/women2.png",
        "../assets/women/women3.png",
        "../assets/women/women4.png"
      ]
    },
    "description": ["Classic Slim Fit Denim Jeans"],
    "brand": "UrbanDenim",
    "color": "Blue",
    "sizes": ["XS", "S", "M", "L", "XL"],
    "material": "Denim",
    "style": "Casual",
    "price": 20000,
    "currency": "INR",
    "gender": "Male",
    "category": "Clothing/Jeans",
    "rating": 4.5,
    "numreviews": 92
  },
  {
  "_id": { "$oid": "5fb8d1a5c7dd740001d6b4a4" },
  "id": 1,
  "images": {
    "small": {
      "url": "../assets/women/women1.png",
      "width": "120",
      "height": "150"
    },
    "medium": {
      "url": "http://example.com/men_clothing_medium.jpg",
      "width": "300",
      "height": "375"
    },
    "large": {
      "url": "http://example.com/men_clothing_large.jpg",
      "width": "600",
      "height": "750"
    },

    "allView": [
      "../assets/women/women1.png",
      "../assets/women/women2.png",
      "../assets/women/women3.png",
      "../assets/women/women4.png"
    ]
  },
  "description": ["Classic Slim Fit Denim Jeans"],
  "brand": "UrbanDenim",
  "color": "Blue",
  "sizes": ["XS", "S", "M", "L", "XL"],
  "material": "Denim",
  "style": "Casual",
  "price": 20000,
  "currency": "INR",
  "gender": "Male",
  "category": "Clothing/Jeans",
  "rating": 4.5,
  "numreviews": 92
}

  
]
  

  //   const [selectedSize, setSelectedSize] = useState("");

  //     const handleSizeClick = (size) => {
  //         setSelectedSize(size);
  //     };

  return (
    <div>
      <Navbar />

      <div className="flex flex-row">
        <div className="xs:hidden">
          <ProductFilter />
        </div>

        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-2">
          {/* <Filter/> */}
          {products.map((product) => (
            <div
              key={product.id}
              className=" product-container p-4 border rounded-md border-solid border-gray-300 flex flex-col items-center justify-around"
            >
              <div className=" flex flex-row cursor-pointer ">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className=" rounded-sm w-full h-56 object-cover"
                />

                <div
                  className="flex-end  cursor-pointer "
                  onClick={() => addProduct(product)}
                >
                  <FaRegHeart />
                </div>
              </div>

              <div className="product-info font-bold text-2xl text-slate-600  items-start cursor-pointer ">
                <h2 className="">{product.productName}</h2>

                <div className="flex items-center gap-2 text-sm cursor-pointer">
                  <StarRating rating={4} />
                  {`(${15})`}
                </div>
              </div>

              <div className="price-container flex flex-row space-between space-x-4 ">
                <p className="text-xl text-bold cursor-pointer">
                  ${product.price.toFixed(2)}
                </p>
                <p className="line-through cursor-pointer">
                  ${product.oldprice.toFixed(2)}
                </p>
              </div>

              <div className="w-full mt-2">
                <ul className="p-2 flex flex-row gap-3 text-center cursor-pointer">
                  {product.sizes.map((size, index) => (
                    <li
                      className="bg-gray-300 w-20 border border-gray-200 rounded-md"
                      key={index}
                    >

                      {size}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
