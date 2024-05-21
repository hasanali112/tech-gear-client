import React from "react";
import Container from "../shared/Container/Container";
import TopCategoryCard from "./TopCategoryCard";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const TopCategories = () => {
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
            <TopCategoryCard
              className="h-[413px]"
              image="https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Apple"
            />
          </div>
          <div className="w-full h-[413px] col-span-12 lg:col-span-4 rounded-lg">
            <div className="grid grid-cols-12 gap-4">
              <div className="w-full h-[200px]  col-span-12 rounded-lg">
                <TopCategoryCard
                  className="h-[200px]"
                  image="https://images.unsplash.com/photo-1661347998423-b15d37d6f61e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  title="Samsung"
                />
              </div>
              <div className="w-full h-[200px]  col-span-12 rounded-lg">
                <TopCategoryCard
                  className="h-[200px]"
                  image="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  title="Google"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[413px]  lg:col-span-4 col-span-12 rounded-lg">
            <TopCategoryCard
              className="h-[413px]"
              image="https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-svg-png-icon-download-12.png"
              title="Xiaomi"
            />
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
