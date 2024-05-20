import { Tproduct } from "@/type/type";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const FlashSaleCard = ({ flashItem }: { flashItem: Tproduct }) => {
  return (
    <Card className="py-4 h-[432px] w-full lg:w-[286px] hover:-translate-y-1 duration-500 mt-10">
      <CardBody className="overflow-visible py-1">
        <Image
          alt="Card background"
          className="object-cover rounded-xl h-[300px]  lg:w-[286px]"
          src={flashItem.image}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{flashItem.Title}</p>
        <small className="text-default-500">${flashItem.Price}</small>
        <h4 className="font-bold text-large">{flashItem.Brand}</h4>
      </CardHeader>
    </Card>
  );
};

export default FlashSaleCard;
