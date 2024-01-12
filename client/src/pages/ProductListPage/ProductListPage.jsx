import React, { useState } from 'react';
import ProductListList from '../../Components/ProductListList/ProductListList';
import ProductFilter from '../../Components/ProductListList/ProductFilter';
import Navbar from '../../Components/Navbar/Navbar';

// import Productlistgrid from '../Product_list_page_list_type/Productlistgrid';
import ProductListgrid from '../../Components/productListGrid/Productlistgrid'

const ProductListPage = () => {
  const [list, setList] = useState(false);
 

  const handleViewChange = () => {
    setList(!list);
  };
 
  return (
    <>
      {/* <Navbar /> */}
       {/* Assuming Navbar is supposed to be rendered */}

      <div className='flex flex-col lg:flex-row'> {/* Use flex-col for mobile and lg:flex-row for larger screens */}
        <div className='lg:w-1/4'> {/* Use lg:w-1/4 for larger screens */}
       
          <ProductFilter />
           {/* Conditionally render based on showFilter */}
        </div>

        <div className='lg:w-3/4'>
          <div className='mb-4'>
            <label htmlFor='viewSelect'>Select View:</label>
            <select
              id='viewSelect'
              onChange={handleViewChange}
              value={list ? 'list' : 'grid'}
              className='ml-2 p-2 border rounded'
            >
              <option value='list'>List View</option>
              <option value='grid'>Grid View</option>
            </select>
          </div>
          {list ? <ProductListgrid /> : <ProductListList />}
        </div>
      </div>
    </>
  );
};

export default ProductListPage;

