import Link from "next/link";

const CategorySidebar = () => {
  return (
    <div className="space-y-5">
      <div className="border border-gray-300 flex flex-col items-center gap-5 rounded-md bg-white">
        <h1 className="mt-4">Price Range</h1>
        <ul className="space-y-5 pb-6">
          <li>$100 - $300</li>
          <li>$100 - $300</li>
          <li>$100 - $300</li>
        </ul>
      </div>
      <div className="border border-gray-300 flex flex-col items-center gap-5 rounded-md bg-white">
        <h1 className="mt-4">Brand</h1>
        <ul className="space-y-5 pb-6">
          <Link href="">
            {" "}
            <li>Samsung</li>
          </Link>
          <li>Samsung</li>
          <li>Samsung</li>
        </ul>
      </div>
      <div className="border border-gray-300 flex flex-col items-center gap-5 rounded-md bg-white">
        <h1 className="mt-4">Rating</h1>
        <ul className="space-y-5 pb-6">
          <li>1 Star</li>
          <li>2 Star</li>
          <li>3 Star</li>
        </ul>
      </div>
    </div>
  );
};

export default CategorySidebar;
