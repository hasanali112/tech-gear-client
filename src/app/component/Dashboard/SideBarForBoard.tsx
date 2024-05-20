import Link from "next/link";

const SideBarForBoard = () => {
  return (
    <div className="bg-black text-white h-screen sticky top-0 left-0">
      <div className="flex flex-col   py-3">
        <div className="px-8 py-2">
          <Link href="/">
            <span className="text-3xl font-bold">
              Tech <span className="text-purple-500">Gear</span>
            </span>
          </Link>
        </div>
        <hr />
        <ul className="mt-4 mx-4">
          <Link href="/dashboard/all-products">
            <li className="inline-flex gap-2 items-center hover:bg-gray-700 p-3 hover:rounded-lg hover:w-[220px]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-bag"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </span>
              <span className="truncate">All Products</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBarForBoard;
