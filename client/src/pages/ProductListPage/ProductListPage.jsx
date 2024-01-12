import{useState} from 'react'
import ProductListList from '../../Components/ProductListList/ProductListList'
import ProductFilter from '../../Components/ProductListList/ProductFilter';
import ProductListgrid from "../../components/productListGrid/Productlistgrid";
const ProductListPage = () => {
  const [list, setList] = useState(false);
 

  const handleViewChange = () => {
    setList(!list);
  };
 
  return (
    <>
   
    <div className='flex flex-row'>
<div className=' w-1/4'>
     <ProductFilter/>
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

