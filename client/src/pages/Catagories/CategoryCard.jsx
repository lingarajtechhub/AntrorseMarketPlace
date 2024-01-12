

const CategoryCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const{img,name}=props.data;
  return (
    
      <div className="categories-items flex flex-col pt-2 px-4 w-48  rounded-xl bg-[#F4F4F5] hover:bg-white hover:shadow-xl cursor-pointer md:my-2 sm:my-3 ">
        <div className="image p-4">
        <img className='rounded-full border' src={img} alt="" />
        </div>
        <p className='text-center font-bold text-lg pt-1 pb-3'>{name}</p>
      </div>
    
  )
}

export default CategoryCard;