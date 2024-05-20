import { TProduct } from "@/type/type";
import { Card, CardBody, Image } from "@nextui-org/react";

const AllProductsCard = ({ item }: { item: TProduct }) => {
  return (
    <Card className=" h-[432px] w-full lg:w-[286px] hover:-translate-y-1 duration-500 mt-10">
      <CardBody className="overflow-visible ">
        <Image
          alt="Card background"
          className="object-cover rounded-xl h-[250px]  lg:w-[286px]"
          src={item.image}
        />
      </CardBody>
      <div className="pb-6 pt-2 px-4 flex-col items-start">
        <p className="text-large uppercase ">{item.title}</p>
        <small className="text-default-500">${item.price}</small>
        <h4 className=" text-tany">{item.category}</h4>
        <h4 className="text-tany mb-3">{item.brand}</h4>
      </div>
    </Card>
  );
};

export default AllProductsCard;
