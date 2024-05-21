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
        <HeroCard
          image="https://images.unsplash.com/photo-1565263965454-a44e2ede252a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="iPhone 14 Pro Max"
          price={400}
          brand="Apple"
        />
        <HeroCard
          image="https://images.unsplash.com/photo-1529653762956-b0a27278529c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="iPhone 14"
          price={900}
          brand="Apple"
        />
        <HeroCard
          image="https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="iPhone 13 Mini"
          price={670}
          brand="Apple"
        />
        <HeroCard
          image="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Samsung 14 Pro Max"
          price={1000}
          brand="Samsung"
        />
        <HeroCard
          image="https://images.unsplash.com/photo-1583573636255-6a41ff5523d4?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Samsung Galaxy S23 Ultra"
          price={700}
          brand="Samsung"
        />
        <HeroCard
          image="https://images.unsplash.com/photo-1583574333311-3a86605c76b2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Samsung Galaxy A14 5G"
          price={450}
          brand="Samsung"
        />
        <HeroCard
          image="https://images.unsplash.com/photo-1565263965454-a44e2ede252a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="iPhone 14 Pro Max"
          price={400}
          brand="Apple"
        />
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
