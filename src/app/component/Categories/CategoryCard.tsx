import { TCategory } from "@/type/type";
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import Link from "next/link";

const CategoryCard = ({ categoryItem }: { categoryItem: TCategory }) => {
  return (
    <div>
      <Link href={`/${categoryItem.title.toLowerCase()}`}>
        <Card>
          <CardHeader className="flex gap-3">
            <p className="text-xl">{categoryItem.brand}</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <Image
              alt="category logo"
              height={200}
              radius="sm"
              src={categoryItem.image}
              width={400}
              className="w-full h-[200px]"
            />
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default CategoryCard;
