import { Button, Card, CardFooter, Image } from "@nextui-org/react";

const TopCategoryCard = ({ className }: { className: string }) => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none w-full h-full ">
      <Image
        alt="Woman listing to music"
        className={`object-cover bg-center w-full  ${className}`}
        src="https://images.unsplash.com/photo-1505740106531-4243f3831c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={500}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-md text-white/80">Smartphones & Accessories</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Visit Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TopCategoryCard;
