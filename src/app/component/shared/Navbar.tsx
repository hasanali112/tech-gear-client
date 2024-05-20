import Link from "next/link";
import DropdownMenus from "./DropdownMenus";

const Navbar = () => {
  return (
    <div className="bg-black text-white h-[75px] p-5 ">
      <nav className="flex flex-row justify-between lg:justify-start lg:gap-32 items-center w-full max-w-[1220px] lg:px-[20px] mx-auto">
        <Link href="/">
          {" "}
          <span className="text-3xl font-bold">
            Tech <span className="text-purple-500">Gear</span>
          </span>
        </Link>
        <div className="hidden lg:block">
          <ul className="flex gap-10">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/categories">
              <li>Categories</li>
            </Link>
            <Link href="/products">
              <li>Products</li>
            </Link>
            <Link href="/flash-sale">
              <li>Flash Sale</li>
            </Link>
            <Link href="/about">
              <li>About Us</li>
            </Link>
            <li>Contact Us</li>
            <Link href="/dashboard">
              <li>Dashboard</li>
            </Link>
          </ul>
        </div>
        <ul className="lg:hidden">
          <DropdownMenus />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
