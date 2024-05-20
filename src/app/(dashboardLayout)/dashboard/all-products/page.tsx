import DashboardTable from "@/app/component/Dashboard/DashboardTable";
import { getAllProductDataFromDb } from "@/utils/getAllProducts";

const AllProducts = async () => {
  const getAllProducts = await getAllProductDataFromDb();
  return (
    <div>
      <div>
        <div className="bg-gray-200 flex justify-end p-5 sticky top-0">
          <h1 className="mr-10">User</h1>
        </div>
        <div className="mt-10 px-3">
          <h1 className="text-4xl mb-3">All Products</h1>
          <DashboardTable getAllProducts={getAllProducts} />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
