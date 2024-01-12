

const CategoryBanner = () => {
  return (
    <section
    className="h-3/4 bg-Hero bg-cover
    font-[Poppins] md:bg-top bg-center"
  >
    <div className="flex flex-col justify-center text-center items-center h-3/4">
      <h2 className="text-white text-2xl font-medium ">Fashion Tips</h2>
      <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
      MEDAL WORTHY BRANDS TO BAG
      </h1>
      <div className="text-xl">
       <button className="bg-primary text-white  px-6 py-2 rounded-full">
        Get Started
       </button>
      </div>
    </div>
  </section>
  )
}

export default CategoryBanner;