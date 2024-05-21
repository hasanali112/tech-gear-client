import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

type THero = {
  image: string;
  title: string;
  price: number;
  brand: string;
};

const HeroCard = ({ image, title, price, brand }: THero) => {
  return (
    <Card className="py-4 min-w-[286px] h-[350px] ">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl h-[200px]"
          src={`${image}`}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{`${title}`}</p>
        <small className="text-default-500">${`${price}`}</small>
        <h4 className="font-bold text-large">{`${brand}`}</h4>
      </CardHeader>
    </Card>
  );
};

export default HeroCard;
