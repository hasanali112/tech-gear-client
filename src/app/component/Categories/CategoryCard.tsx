import { TCategory } from "@/type/type";
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import Link from "next/link";

const CategoryCard = ({ categoryItem }: { categoryItem: TCategory }) => {
  return (
    <div>
      <Card>
        <CardHeader className="flex gap-3">
          <Link
            href={`/${categoryItem.title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <p className="text-xl">{categoryItem.title}</p>
          </Link>
        </CardHeader>
        <Divider />
        <Link href="/products">
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
        </Link>
      </Card>
    </div>
  );
};

export default CategoryCard;
