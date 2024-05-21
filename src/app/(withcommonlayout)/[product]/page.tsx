import AllProductsCard from "@/app/component/Products/AllProductsCard";
import { TProduct } from "@/type/type";
import { getProductByQuery } from "@/utils/getProductByQuery";
import React from "react";

interface TSearch {
  params: {
    product: string;
  };
  searchParams: {
    brand?: string;
    rating?: string;
    minPrice?: number;
    maxPrice?: number;
  };
}

const DynamicBrand = async ({ searchParams }: TSearch) => {
  let searchType = "";
  if (searchParams.brand) {
    searchType = `brand=${searchParams.brand}`;
  }

  if (searchParams.minPrice && searchParams.maxPrice) {
    searchType = `minPrice=${searchParams.minPrice}&maxPrice=${searchParams.maxPrice}`;
  }
  const productAll = await getProductByQuery(searchType);

  return (
    <div className="pt-10">
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-3xl font-semibold">Phones</h1>
        <p>{productAll.length} items found in Phones</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {productAll?.map((item: TProduct) => (
          <AllProductsCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DynamicBrand;
