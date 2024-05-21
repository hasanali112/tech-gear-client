import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

type TCategory = {
  className: string;
  image: string;
  title: string;
};

const TopCategoryCard = ({ className, image, title }: TCategory) => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none w-full h-full ">
      <Image
        alt="Woman listing to music"
        className={`object-cover bg-center w-full  ${className}`}
        src={`${image}`}
        width={500}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-md text-white/80">{`${title}`}</p>
        <Link href="/mobile">
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Visit Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TopCategoryCard;
