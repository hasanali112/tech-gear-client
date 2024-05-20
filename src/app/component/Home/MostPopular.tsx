import { Button } from "@nextui-org/react";
import Container from "../shared/Container/Container";
import MostPopularCard from "./MostPopularCard";
import Link from "next/link";

const MostPopular = () => {
  return (
    <div className="bg-[#e5e7eb] pt-14 pb-12">
      <Container>
        <div className="flex lg:flex-row flex-col gap-4 lg:justify-between items-center">
          <div>
            <h1 className="text-4xl  font-bold text-center">
              Most Popular Products
            </h1>
            <p className="lg:w-[70%] w-full pt-3">
              Each product in our best-sellers list has been chosen by customers
              like you for its performance, style, and reliability.
            </p>
          </div>
          <div>
            <Link href="/products">
              {" "}
              <Button className="inline-flex items-center gap-4 text-base text-white bg-black">
                View All{" "}
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
                    className="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 pt-6">
          <MostPopularCard />
          <MostPopularCard />
          <MostPopularCard />
          <MostPopularCard />
          <MostPopularCard />
          <MostPopularCard />
          <MostPopularCard />
          <MostPopularCard />
        </div>
      </Container>
    </div>
  );
};

export default MostPopular;
