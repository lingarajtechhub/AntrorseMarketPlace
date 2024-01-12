// import React from 'react'
// import { useState } from 'react';
// // import shirt from '../../assets/shirt/shirt.png'
// // import shirt2 from '../../assets/shirt/shir2.png'
// // import shirt3 from '../../assets/shirt/shir3.png'
// import { GiHamburgerMenu } from "react-icons/gi";

// import image1 from "../../assets/women/women1.png";
// import image2 from "../../assets/women/women2.jpg";
// import image3 from "../../assets/women/women3.jpg";
// import image4 from "../../assets/women/women4.jpg";


// import shirt from '../../assets/shirt/shirt.png';
// import shirt2 from '../../assets/shirt/shirt2.png'; 
// import shirt3 from '../../assets/shirt/shirt3.png';
// import Navbar from '../../Components/Navbar/Navbar';
// import { FaRegHeart } from "react-icons/fa";
// import StarRating from "../../Components/StartRating/StartRating";


// import ProductFilter from "../../Components/ProductListList/ProductFilter"

// export default function Productlistgrid() {
   
//     const products = [
//         {
//             id: 1,
//             productName: 'Denim Shirt',
//             productImage: image1,
//             specifications: ['Size:M', 'Color: Blue', 'Material: Cotton'],
//             price: 599.99,
//             oldprice: 899,
//             rating: 4.5,
//             rating_review:'82,384 Rating & 5,459 Review',
//             numberOfRatings: 120,
//             sizes: ["XS", "S", "M", "L", "XL"]
//           }
//        ,          
//         {
//           id: 2,
//           productName: 'Denim Shirt',
//           productImage: image1,
//           specifications: ['Size:M', 'Color: Blue', 'Material: Cotton'],
//           price: 1299.99,
//           oldprice:2099,
//           rating: 4.8,
//           numberOfRatings: 80,
//           rating_review:'82,384 Rating & 5,459 Review',
//           sizes: ["XS", "S", "M", "L", "XL"]
//         },
//         {
//           id: 3,
//           productName: 'Denim Shirt',
//           productImage: image1,
//           specifications: ['Size:M', 'Color: Blue', 'Material: Cotton'],
//           price: 79.99,
//           oldprice:2899,
//           rating: 4.2,
//           numberOfRatings: 150,
//           rating_review:'82,384 Rating & 5,459 Review',
//           sizes: ["XS", "S", "M", "L", "XL"]
//         },
//         {
//           id: 4,
//           productName: 'Denim Shirt',
//           productImage: image1,
//           specifications: ['Size:M', 'Color: Blue', 'Material: Cotton'],
//           price: 79.99,
//           oldprice:4899,
//           rating: 4.2,
//           numberOfRatings: 150,
//           rating_review:'82,384 Rating & 5,459 Review',
//           sizes: ["XS", "S", "M", "L", "XL"]
//         },
//         {
//           id: 5,
//           productName: 'Denim Shirt',
//           productImage: image1,
//           specifications: ['Size:M', 'Size:M', 'cotton shirt', 'cotton shirt'],
//           price: 79.99,
//           oldprice:1899,
//           rating: 4.2,
//           numberOfRatings: 150,
//           rating_review:'82,384 Rating & 5,459 Review',
//           sizes: ["XS", "S", "M", "L", "XL"]
//         },
//         {
//           id: 6,
//           productName: 'Denim Shirt',
//           productImage: image1,
//           specifications: ['Size:M', 'Size:M', 'cotton shirt', 'cotton shirt'],
//           price: 79.99,
//           oldprice:1899,
//           rating: 4.2,
//           numberOfRatings: 150,
//           rating_review:'82,384 Rating & 5,459 Review',
//           sizes: ["XS", "S", "M", "L", "XL"]
//         }
       
   
//       ];

//     const [showFilter, setShowFilter] = useState(false);

//     const toggleFilter = () => {
//       setShowFilter(!showFilter);
//     };
  
   
      
//     const [hoveredProductId, setHoveredProductId] = useState(null);
//     const handleMouseEnter = (productId) => {
//       setHoveredProductId(productId);
//     };
  
//     const handleMouseLeave = () => {
//       setHoveredProductId(null);
//     };
//       return (
    


//         <div>
//           <div className='flex flex-col lg:flex-row p-1'>
//             {/* Hamburger menu for small devices */}
//             <div className='lg:hidden'>
//               <button onClick={toggleFilter} className='p-2'>
//               <GiHamburgerMenu />
//               </button>
//               {showFilter && <ProductFilter />}
//             </div>
//             {/* Sidebar for larger devices */}
            
//             {/* Product grid */}
//             <div className='lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-2'>
//               {products.map((product) => (
//                <div
//                key={product.id}
//                className={`product-container p-4 border rounded-md border-solid border-gray-300 relative transition-transform ${
//                  hoveredProductId===product.id ? 'transform scale-105' : ''
//                }`}
//                onMouseEnter={() => handleMouseEnter(product.id)}
//               onMouseLeave={handleMouseLeave}
//              >
//                   <div className='absolute top-0 right-0 mt-2 mr-1 cursor-pointer'>
//                     <FaRegHeart />
//                   </div>
//                   <div className='image-container flex-shrink-0 '>
//                     <img
//                       src={product.productImage}
//                       alt={product.productName}
//                       className='w-full h-[200px] object-cover rounded-sm p-3'
//                     />
//                   </div>
//                   <div className='flex-end cursor-pointer text-start mt-2'></div>
//                   <div className='product-info mt-2 space-y-2 cursor-pointer'>
//                     <div className=''>
//                       <h2 className='font-semibold text-lg text-orange-400'>
//                         {product.productName}
//                       </h2>
//                     </div>
//                     <div>
//                       <p className='font-thin text-sm text-gray-500'>
//                         Mens Winter Leather Jackets
//                       </p>
//                     </div>
//                     <div className='flex items-center gap-2 text-sm cursor-pointer'>
//                       <StarRating rating={3} />
//                       {/* {`(${product.numberOfRatings})`} */}
//                     </div>
//                     <div className='price-container flex flex-row space-between space-x-4'>
//                       <p className='text-md text-green-700 font-semibold cursor-pointer'>
//                       ₹{product.price.toFixed(2)}
//                       </p>
//                       <p className='line-through text-md text-gray-500 cursor-pointer'>
//                       ₹{product.oldprice.toFixed(2)}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
    
//       );
      
      

  
// }





import React from 'react'
import { useState } from 'react';
// import shirt from '../../assets/shirt/shirt.png'
// import shirt2 from '../../assets/shirt/shir2.png'
// import shirt3 from '../../assets/shirt/shir3.png'
import { GiHamburgerMenu } from "react-icons/gi";

import image1 from "../../assets/women/women1.png";
import image2 from "../../assets/women/women2.jpg";
import image3 from "../../assets/women/women3.jpg";
import image4 from "../../assets/women/women4.jpg";


import shirt from '../../assets/shirt/shirt.png';
import shirt2 from '../../assets/shirt/shirt2.png'; 
import shirt3 from '../../assets/shirt/shirt3.png';
import Navbar from '../../Components/Navbar/Navbar';
import { FaRegHeart } from "react-icons/fa";
import StarRating from "../../Components/StartRating/StartRating";


import ProductFilter from "../../Components/ProductListList/ProductFilter"

export default function Productlistgrid() {
   
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
            sizes: ["XS", "S", "M", "L", "XL"]
          }
       ,          
        {
          id: 2,
          productName: 'Denim Shirt',
          productImage: image1,
          specifications: ['Size:M', 'Color: Blue', 'Material: Cotton'],
          price: 1299.99,
          oldprice:2099,
          rating: 4.8,
          numberOfRatings: 80,
          rating_review:'82,384 Rating & 5,459 Review',
          sizes: ["XS", "S", "M", "L", "XL"]
        },
        {
          id: 3,
          productName: 'Denim Shirt',
          productImage: image1,
          specifications: ['Size:M', 'Color: Blue', 'Material: Cotton'],
          price: 79.99,
          oldprice:2899,
          rating: 4.2,
          numberOfRatings: 150,
          rating_review:'82,384 Rating & 5,459 Review',
          sizes: ["XS", "S", "M", "L", "XL"]
        },
        {
          id: 4,
          productName: 'Denim Shirt',
          productImage: image1,
          specifications: ['Size:M', 'Color: Blue', 'Material: Cotton'],
          price: 79.99,
          oldprice:4899,
          rating: 4.2,
          numberOfRatings: 150,
          rating_review:'82,384 Rating & 5,459 Review',
          sizes: ["XS", "S", "M", "L", "XL"]
        },
        {
          id: 5,
          productName: 'Denim Shirt',
          productImage: image1,
          specifications: ['Size:M', 'Size:M', 'cotton shirt', 'cotton shirt'],
          price: 79.99,
          oldprice:1899,
          rating: 4.2,
          numberOfRatings: 150,
          rating_review:'82,384 Rating & 5,459 Review',
          sizes: ["XS", "S", "M", "L", "XL"]
        },
        {
          id: 6,
          productName: 'Denim Shirt',
          productImage: image1,
          specifications: ['Size:M', 'Size:M', 'cotton shirt', 'cotton shirt'],
          price: 79.99,
          oldprice:1899,
          rating: 4.2,
          numberOfRatings: 150,
          rating_review:'82,384 Rating & 5,459 Review',
          sizes: ["XS", "S", "M", "L", "XL"]
        }
       
   
      ];

    const [showFilter, setShowFilter] = useState(false);

    const toggleFilter = () => {
      setShowFilter(!showFilter);
    };
  
   
      
    const [hoveredProductId, setHoveredProductId] = useState(null);
    const handleMouseEnter = (productId) => {
      setHoveredProductId(productId);
    };
  
    const handleMouseLeave = () => {
      setHoveredProductId(null);
    };
      return (
    


        <div>
          <div className='flex flex-col lg:flex-row p-1'>
            {/* Hamburger menu for small devices */}
            <div className='lg:hidden'>
              <button onClick={toggleFilter} className='p-2'>
              <GiHamburgerMenu />
              </button>
              {showFilter && <ProductFilter />}
            </div>
            {/* Sidebar for larger devices */}
            
            {/* Product grid */}
            
            <div className='lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-2'>
             
              {products.map((product) => (
               <div
               key={product.id}
               className={`product-container p-4 border rounded-md border-solid border-gray-300 relative transition-transform ${
                 hoveredProductId===product.id ? 'transform scale-105' : ''
               }`}
               onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
             >
                  <div className='absolute top-0 right-0 mt-2 mr-1 cursor-pointer'>
                    <FaRegHeart />
                  </div>
                  <div className='image-container flex-shrink-0 '>
                    <img
                      src={product.productImage}
                      alt={product.productName}
                      className='w-full h-[200px] object-cover rounded-sm p-3'
                    />
                  </div>
                  <div className='flex-end cursor-pointer text-start mt-2'></div>
                  <div className='product-info mt-2 space-y-2 cursor-pointer'>
                    <div className=''>
                      <h2 className='font-semibold text-lg text-orange-400'>
                        {product.productName}
                      </h2>
                    </div>
                    <div>
                      <p className='font-thin text-sm text-gray-500'>
                        Mens Winter Leather Jackets
                      </p>
                    </div>
                    <div className='flex items-center gap-2 text-sm cursor-pointer'>
                      <StarRating rating={3} />
                      {/* {`(${product.numberOfRatings})`} */}
                    </div>
                    <div className='price-container flex flex-row space-between space-x-4'>
                      <p className='text-md text-green-700 font-semibold cursor-pointer'>
                      ₹{product.price.toFixed(2)}
                      </p>
                      <p className='line-through text-md text-gray-500 cursor-pointer'>
                      ₹{product.oldprice.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    
      );
      
      

  
}

