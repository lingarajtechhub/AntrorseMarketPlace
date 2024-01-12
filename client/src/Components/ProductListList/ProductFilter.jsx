
import React, { useState } from 'react';
const ProductFilter = () => {
  

    const [filters, setFilters] = useState({
        categories: [],
        price: '',
        // Add more filters as needed
      });
    
      const allCategories = ['Allen Solly'
        ,'ARROW',
       ' Arrow Newyork',
        'Blackberrys',
        'CHEROKEE',
        'FLYING MACHINE']; 
      const Categories = ['T-shirt'
        ,'Jeans',
       ' Jackets',
        'Shorts',]; 
    
      const handleCheckboxChange = (category) => {
        setFilters((prevFilters) => {
          const updatedCategories = prevFilters.categories.includes(category)
            ? prevFilters.categories.filter((c) => c !== category)
            : [...prevFilters.categories, category];
    
          return { ...prevFilters, categories: updatedCategories };
        });
        //  add logic here to fetch and update your product list based on the filters
      };
    
      return (
        <div className="flex  flex-col space-x-4   p-4 m-6 rounded-sm  shadow-lg gap-3 ">
           
          <div>
            <label className="block  text-black text-2xl font-semibold  mb-2 text-center pb-4">Brands</label>
            {allCategories.map((category) => (
              <div key={category} className="flex text-black p-3 border border-black-200 items-center">
                <input
                  type="checkbox"
                  id={category}
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
                  className="mr-2"
                />
                <label htmlFor={category} className="text-sm">
                  {category}
                </label>
              </div>
            ))}
          </div>
          <div>
          
            <label className="block  text-black text-2xl font-semibold  mb-2 text-center pb-4">Categories</label>
            {Categories.map((category) => (
              <div key={category} className="flex text-black p-3 border border-black-200 items-center">
                <input
                  type="checkbox"
                  id={category}
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
                  className="mr-2"
                />
                <label htmlFor={category} className="text-sm">
                  {category}
                </label>
              </div>
            ))}
          </div>
          <div>
            <label className="block  text-black text-xl font-semibold pt-5">Price Range</label>
            
          </div>
        </div>
      );
    };


 
export default ProductFilter
