import AllProductsCard from "@/app/component/Products/AllProductsCard";
import { TProduct } from "@/type/type";
import { getProductByQuery } from "@/utils/getProductByQuery";

type TProps = {
  params: {
    categoryId: string;
  };
};

const CategoryHome = async ({ params }: TProps) => {
  const productData = await getProductByQuery(params.categoryId);
  return (
    <div>
      <div className="bg-white p-2 rounded-md">
        <h1 className="text-3xl">
          {params.categoryId
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .replace(/^\w|\s\w/g, (char) => char.toUpperCase())}
        </h1>
        <p className="text-base">
          {productData.length} items found in {params.categoryId}{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {productData?.map((item: TProduct) => (
          <AllProductsCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryHome;
