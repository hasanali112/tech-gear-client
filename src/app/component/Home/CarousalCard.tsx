"use client";
import { useRef } from "react";
import HeroCard from "./HeroCard";

const CarousalCard = () => {
  const boxContainer = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (boxContainer.current) {
      const width = boxContainer.current.clientWidth;
      boxContainer.current.scrollTo({
        left: boxContainer.current.scrollLeft + width,
        behavior: "smooth",
      });
    }
  };

  const handlePre = () => {
    if (boxContainer.current) {
      const width = boxContainer.current.clientWidth;
      boxContainer.current.scrollTo({
        left: boxContainer.current.scrollLeft - width,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-3">
      <div
        ref={boxContainer}
        className="flex bg-white gap-5 lg:gap-6 overflow-hidden w-[308px] lg:w-[930px] mx-auto p-3 lg:mt-0 mt-16"
      >
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
      <div className="flex gap-6 justify-between z-10 items-center w-full lg:w-[1040px] mx-auto -translate-y-[550%]">
        <button
          onClick={handlePre}
          className="w-[41px] h-[41px] bg-gray-300 inline-flex items-center justify-center"
        >
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
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="w-[41px] h-[41px] bg-gray-300 inline-flex items-center justify-center"
        >
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
        </button>
      </div>
    </div>
  );
};

export default CarousalCard;
