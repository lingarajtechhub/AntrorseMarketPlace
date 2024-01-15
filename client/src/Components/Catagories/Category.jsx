
import CategoryCard from './CategoryCard'
const CategoryData = [
  {
    img: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/smart-watches.png',
    name: "Smart Watch"
  },
  {
    img: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/wireless-earphone.png',
    name: "Wireless Earphone"
  },
  {
    img: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/wireless-headphone.png',
    name: "Headphone"
  },
  {
    img: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/smart-phones.png',
    name: "Smart Phone"
  },
  {
    img: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/runnies-shoes.png',
    name: "Running Shoos"
  },
  {
    img: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/leather-items.png',
    name: "Leather Items"
  }
]
const Category = () => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4  lg:grid-cols-6 gap-0 place-items-center my-6 mb-9 ">
        {
          CategoryData.map((item, index) => (<CategoryCard key={index} data={item} />))
        }

      </div>
    </div>
  )
}

export default Category