import Countdown from "@/app/component/FlashSale/Countdown";
import FlashSaleCard from "@/app/component/FlashSale/FlashSaleCard";
import FlashSaleCompo from "@/app/component/FlashSale/FlashSaleCompo";
import Container from "@/app/component/shared/Container/Container";
import { Tproduct } from "@/type/type";
import { getFlashSaleData } from "@/utils/getFlashSale";

const FlashSale = async () => {
  const getSaleData = await getFlashSaleData();

  return (
    <div className="bg-[#e5e7eb] pt-10">
      <Countdown />
      <Container>
        <h1 className="text-4xl font-semibold">Flash Sale</h1>
        <p>Deals updated daily</p>
        <div>
          <FlashSaleCompo getSaleData={getSaleData} />
        </div>
      </Container>
    </div>
  );
};

export default FlashSale;
