import React from "react";
import CarousalCard from "./CarousalCard";
import Container from "../shared/Container/Container";

const Hero = () => {
  return (
    <Container>
      <h1 className="text-4xl font-bold text-center pt-20 lg:w-[60%] mx-auto">
        Welcome to Tech Gear
      </h1>
      <p className=" text-center mt-2 lg:w-[70%] mx-auto">
        Your ultimate destination for the latest in mobile technology. Whether
        you are a tech enthusiast, a gadget lover, or simply in search of the
        perfect device, Tech Gear has everything you need.
      </p>
      <div>
        <CarousalCard />
      </div>
    </Container>
  );
};

export default Hero;
