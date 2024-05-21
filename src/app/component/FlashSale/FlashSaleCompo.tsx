"use client";
import { TProduct } from "@/type/type";
import FlashSaleCard from "./FlashSaleCard";
import { useState } from "react";
import { Button } from "@nextui-org/react";

type TFlas = {
  getSaleData: TProduct[];
};

const FlashSaleCompo = ({ getSaleData }: TFlas) => {
  const [show, setShowAll] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 pb-10">
        {getSaleData.slice(0, show ? 24 : 12)?.map((flashItem: TProduct) => (
          <FlashSaleCard key={flashItem._id} flashItem={flashItem} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          className="bg-black text-white "
          onClick={() => setShowAll(!show)}
        >
          {show ? "Show Less" : "Show All"}
        </Button>
      </div>
    </div>
  );
};

export default FlashSaleCompo;
