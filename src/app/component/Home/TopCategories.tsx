import React from "react";
import Container from "../shared/Container/Container";
import TopCategoryCard from "./TopCategoryCard";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { getCategories } from "@/utils/getCategories";
import { TCategory } from "@/type/type";

const TopCategories = async () => {
  const getTopCategory = await getCategories();
  return (
    <div className="bg-[#e5e7eb] pb-5 pt-7">
      <Container>
        <h1 className="text-center pt-10 text-4xl font-bold">Top Categories</h1>
        <p className="lg:w-[60%] mx-auto text-center py-5">
          Whether you are a tech enthusiast looking for the newest must-have
          device or simply in need of a practical solution for everyday tasks,
          our collection has something for everyone.
        </p>
        <div className="grid grid-cols-12 gap-4">
          <div className="w-full h-[413px]  lg:col-span-4 col-span-12 rounded-lg">
            {getTopCategory.slice(0, 1)?.map((item: TCategory) => (
              <TopCategoryCard
                key={item._id}
                item={item}
                className="h-[413px]"
              />
            ))}
          </div>
          <div className="w-full h-[413px] col-span-12 lg:col-span-4 rounded-lg">
            <div className="grid grid-cols-12 gap-4">
              <div className="w-full h-[200px]  col-span-12 rounded-lg">
                {getTopCategory.slice(1, 2)?.map((item: TCategory) => (
                  <TopCategoryCard
                    key={item._id}
                    item={item}
                    className="h-[200px]"
                  />
                ))}
              </div>
              <div className="w-full h-[200px]  col-span-12 rounded-lg">
                {getTopCategory.slice(2, 3)?.map((item: TCategory) => (
                  <TopCategoryCard
                    key={item._id}
                    item={item}
                    className="h-[200px]"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-[413px]  lg:col-span-4 col-span-12 rounded-lg">
            {getTopCategory.slice(4, 5)?.map((item: TCategory) => (
              <TopCategoryCard
                key={item._id}
                item={item}
                className="h-[413px]"
              />
            ))}
          </div>
        </div>
        <div className=" text-center py-10">
          <Link href="/categories">
            {" "}
            <Button className="bg-black text-white">View All</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TopCategories;
