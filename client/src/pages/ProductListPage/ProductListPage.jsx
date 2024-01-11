import React from 'react'
import ProductListList from '../../Components/ProductListList/ProductListList'
import ProductFilter from '../../Components/ProductListList/ProductFilter';
import Navbar from '../../Components/Navbar/Navbar';

const ProductListPage = () => {
  return (
    <>
      <Navbar />
    <div className='flex flex-row'>
<div className=' w-1/4'>
     <ProductFilter/>
</div>

<div className='w-3/4'>

      <ProductListList/>
</div>
    </div>
   
    </>
  )
}

export default ProductListPage;
