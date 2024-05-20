import CategoryCard from "@/app/component/Categories/CategoryCard";
import Container from "@/app/component/shared/Container/Container";
import { TCategory } from "@/type/type";
import { getCategories } from "@/utils/getCategories";
import React from "react";

const Categories = async () => {
  const cateGoriesData = await getCategories();
  return (
    <div className="bg-[#e5e7eb]">
      <Container>
        <h1 className="text-4xl py-10">Features Categories</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {cateGoriesData?.map((categoryItem: TCategory) => (
            <CategoryCard key={categoryItem._id} categoryItem={categoryItem} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
