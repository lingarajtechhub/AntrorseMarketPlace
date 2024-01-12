
import ProductListList from '../../Components/ProductListList/ProductListList'
import ProductFilter from '../../Components/ProductListList/ProductFilter';


const ProductListPage = () => {
  return (
    <>

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
