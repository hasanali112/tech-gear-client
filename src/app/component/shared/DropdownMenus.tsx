"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";

const DropdownMenus = () => {
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button className="text-white bg-black">
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
              className="lucide lucide-align-justify"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="home">
            <Link href="/">Home</Link>
          </DropdownItem>
          <DropdownItem key="category">
            <Link href="/categories">Categories</Link>
          </DropdownItem>
          <DropdownItem key="product">
            <Link href="/mobile?brand=all-product">Products</Link>
          </DropdownItem>
          <DropdownItem key="flashsale">
            <Link href="/flash-sale">Flash Sale</Link>
          </DropdownItem>
          <DropdownItem key="aboutus">
            {" "}
            <Link href="/about">About Us</Link>
          </DropdownItem>
          <DropdownItem key="contactus">
            <Link href="/contact">Contact Us</Link>
          </DropdownItem>
          <DropdownItem key="dashboard">
            <Link href="/contact">
              <Link href="/dashboard">Dashboard</Link>
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownMenus;
