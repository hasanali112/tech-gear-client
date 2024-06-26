import { TProduct } from "@/type/type";
import Image from "next/image";
import Link from "next/link";

const MostPopularCard = ({ productItem }: { productItem: TProduct }) => {
  return (
    <div className="hover:-translate-y-2 duration-500 rounded-lg">
      <Link href={`/mobiles/${productItem._id}`}>
        <div>
          <Image
            src={productItem.image[0]}
            alt="card image
            "
            height={360}
            width={296}
            className="rounded-lg w-full h-[350px] object-cover "
          />
        </div>
        <div className="ml-2">
          <h1 className="text-xl mt-2">{productItem.title}</h1>
          <div className="flex justify-between items-center">
            <p>${productItem.price}</p>
            <button className="rounded-full border border-black text-base w-[26px] font-semibold ">
              +
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MostPopularCard;
