import { TProduct } from "@/type/type";
import Image from "next/image";
import React from "react";

const FlashSaleCard = ({ saleItem }: { saleItem: TProduct }) => {
  return (
    <div className="hover:-translate-y-2 duration-500 rounded-lg">
      <div>
        <Image
          src={saleItem.image[0]}
          alt="card image
              "
          height={360}
          width={296}
          className="rounded-lg w-full h-[350px] object-cover "
        />
      </div>
      <div className="ml-2">
        <h1 className="text-xl mt-2">{saleItem.title.slice(0, 20)}</h1>
        <div className="flex justify-between items-center">
          <p>${saleItem.price}</p>
          <button className="rounded-full border border-black text-base w-[26px] font-semibold ">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCard;
