import React from 'react'

import shirt from '../../assets/shirt/shirt.png';
import shirt2 from '../../assets/shirt/shirt2.png'; 
import shirt3 from '../../assets/shirt/shirt3.png';
import Navbar from '../../Components/Navbar/Navbar';
import { FaRegHeart } from "react-icons/fa";
// import StarRating from '../StartRating/StartRating';
import image1 from "../../assets/women/women1.png";
import image2 from "../../assets/women/women2.jpg";
import image3 from "../../assets/women/women3.jpg";
import image4 from "../../assets/women/women4.jpg";
import StarRating from "../../Components/StartRating/StartRating";

export default function ProductListList() {
    const products = [
        {
            id: 1,
            productName: 'Denim Shirt',
            productImage: image1,
            specifications: ['Size:M', 'Color: Blue', 'Material: Cotton'],
            price: 599.99,
            oldprice: 899,
            rating: 4.5,
            rating_review:'82,384 Rating & 5,459 Review',
            numberOfRatings: 120,
          }
       ,          
        {
          id: 2,
          productName: 'Denim Shirt',
          productImage: image2,
          specifications: ['Size:M', 'Color: Blue', 'Material: Cotton'],
          price: 1299.99,
          oldprice:2099,
          rating: 4.8,
          numberOfRatings: 80,
          rating_review:'82,384 Rating & 5,459 Review',
        },
        {
          id: 3,
          productName: 'Denim Shirt',
          productImage: image3,
          specifications: ['Size:M', 'Color: Blue', 'Material: Cotton'],
          price: 79.99,
          oldprice:2899,
          rating: 4.2,
          numberOfRatings: 150,
          rating_review:'82,384 Rating & 5,459 Review',
        },
        {
          id: 4,
          productName: 'Denim Shirt',
          productImage: image4,
          specifications: ['Size:M', 'Color: Blue', 'Material: Cotton'],
          price: 79.99,
          oldprice:4899,
          rating: 4.2,
          numberOfRatings: 150,
          rating_review:'82,384 Rating & 5,459 Review',
        },
        {
          id: 5,
          productName: 'Denim Shirt',
          productImage: image3,
          specifications: ['Size:M','cotton shirt'],
          price: 79.99,
          oldprice:1899,
          rating: 4.2,
          numberOfRatings: 150,
          rating_review:'82,384 Rating & 5,459 Review',
        },
        {
          id: 6,
          productName: 'Denim Shirt',
          productImage: shirt2,
          specifications: ['Size:M',  'cotton shirt'],
          price: 79.99,
          oldprice:1899,
          rating: 4.2,
          numberOfRatings: 150,
          rating_review:'82,384 Rating & 5,459 Review',
        }
       
        // Add more products as needed
      ];
      

  return (
    <div>
   



<div className='m-4 flex flex-col sm:flex-row md:flex-col lg:flex-col flex-wrap gap-4 shadow-xl'>
  {products.map((product, index) => (
    <div
      key={index}
      className="product-container p-3 border rounded-md flex items-center justify-around relative"
    >
      {/* Move the heart icon to the top-right corner */}
      <div className="absolute top-0 right-0 mr-4 mt-3 cursor-pointer">
        <FaRegHeart />
      </div>

      <div className="image-container flex-shrink-0 ">
        <img src={product.productImage} alt={product.productName} className="w-[14rem] h-[32vh] rounded-sm" />
      </div>

      <div className="product-info">
        <h2 className="text-lg text-black mb-1 font-bold flex items-center">
          {/* Heart icon is already at the top-right corner */}
          <div>
            <span>{product.productName}</span>
          </div>
        </h2>
        <div className='rating text-center mt-1 text-white '>
          <div className="flex items-center gap-2">
            <StarRating rating={4} />
            {`(${15})`}
          </div>
          <div className='ml-1 text-sm bg-white text-black '>{product.rating_review}</div>
        </div>

        <ul className="list-disc pl-4 text-sm text-gray-500">
          {product.specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>

      <div className="price-container">
        <p className="text-black-600 font-bold text-xl text-green-700">₹{product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500 line-through">₹{product.oldprice.toFixed(2)}</p>
        <span className="text-green-600 text-sm">7% off</span>
      </div>
    </div>
  ))}
</div>

</div>

    // </div>
  );


  
}