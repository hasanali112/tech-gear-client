import { TCategory } from "@/type/type";
import { getCategories } from "@/utils/getCategories";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const CategorySidebar = async () => {
  const getCategoryData = await getCategories();
  return (
    <div className="space-y-5 pt-10">
      <div className="border border-gray-300 flex flex-col  gap-5 rounded-lg bg-white">
        <h1 className="mt-4 text-center text-xl">Price Range</h1>
        <ul className="pb-6 space-y-2 px-2">
          {getCategoryData?.map((item: TCategory) => (
            <li key={item._id}>
              <Link
                href={`mobile?minPrice=${item.minPrice}&maxPrice=${item.maxPrice}`}
              >
                <Button variant="bordered" className="w-full">
                  {item.minPrice} - {item.maxPrice}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-gray-300 flex flex-col  gap-5 rounded-lg bg-white">
        <h1 className="mt-4 text-center text-xl">Brand</h1>
        <ul className=" pb-6 space-y-2 px-2">
          {getCategoryData?.map((item: TCategory) => (
            <li key={item._id}>
              <Link href={`/mobile?brand=${item.brand.toLowerCase()}`}>
                <Button variant="bordered" className="w-full">
                  {item.brand}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-gray-300 flex flex-col  gap-5 rounded-lg bg-white">
        <h1 className="mt-4 text-center text-xl">Rating</h1>
        <ul className="pb-6 space-y-2 px-2">
          {getCategoryData?.map((item: TCategory) => (
            <li key={item._id}>
              <Link href={`/mobile?rating=${item.rating}`}>
                <Button variant="bordered" className="w-full">
                  {item.rating}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategorySidebar;
