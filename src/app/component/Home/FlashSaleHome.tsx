import { Button } from "@nextui-org/react";
import Container from "../shared/Container/Container";
import { getFlashSaleData } from "@/utils/getFlashSale";
import { TProduct } from "@/type/type";
import FlashSaleCard from "./FlashSaleCard";
import Link from "next/link";
import { getFlashSale } from "@/utils/getFlashHome";

const FlashSaleHome = async () => {
  const getSaleDataHome = await getFlashSale();
  return (
    <div className="bg-[#e5e7eb] pt-14 pb-12">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Flash Sale</h1>
          </div>
          <div>
            <Link href="/flash-sale">
              <Button className="inline-flex items-center gap-4 text-base text-white bg-black">
                View All{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5  gap-10 pt-6">
          {getSaleDataHome.slice(0, 4)?.map((saleItem: TProduct) => (
            <FlashSaleCard key={saleItem._id} saleItem={saleItem} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FlashSaleHome;
