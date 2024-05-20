import React from "react";
import CarousalCard from "./CarousalCard";
import Container from "../shared/Container/Container";

const Hero = () => {
  return (
    <Container>
      <h1 className="text-4xl font-bold text-center pt-20 lg:w-[60%] mx-auto">
        Welcome to Tech Hub to Discover the Future of Gadgets
      </h1>
      <p className=" text-center mt-2 lg:w-[70%] mx-auto">
        Step into the world of innovation and excitement with our unparalleled
        selection of cutting-edge electronic gadgets. At ElectroEnclave, we
        bring you the latest in technology, blending sleek design with unmatched
        functionality.{" "}
      </p>
      <div>
        <CarousalCard />
      </div>
    </Container>
  );
};

export default Hero;
