import React from "react";
import ProductListList from "../../Components/ProductListList/ProductListList";
import ProductFilter from "../../Components/ProductListList/ProductFilter";
import Navbar from "../../Components/Navbar/Navbar";

const ProductListPage = () => {
  useEffect(() => {
    console.log("here");

    fetch("../../data/mockData.json")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <div className=" w-1/4">
          <ProductFilter />
        </div>

        <div className="w-3/4">
          <ProductListList />
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
