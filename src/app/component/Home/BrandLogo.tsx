import Image from "next/image";
import Container from "../shared/Container/Container";
import logo1 from "@/assets/1.png";
import logo2 from "@/assets/2.png";
import logo3 from "@/assets/3.png";
import logo4 from "@/assets/4.png";
import logo5 from "@/assets/10.png";

const BrandLogo = () => {
  return (
    <div className="bg-[#e5e7eb] pt-20 pb-2">
      <div className="bg-white p-8">
        <Container>
          <div className="flex lg:flex-row flex-col gap-4 items-center justify-between">
            <Image
              src={logo1}
              alt="card image
            "
              height={50}
              width={200}
              className="hover:-translate-y-2 duration-500 cursor-pointer"
            />
            <Image
              src={logo2}
              alt="card image
            "
              height={50}
              width={200}
              className="hover:-translate-y-2 duration-500 cursor-pointer"
            />
            <Image
              src={logo3}
              alt="card image
            "
              height={50}
              width={200}
              className="w-[150px] h-20 hover:-translate-y-2 duration-500 cursor-pointer"
            />
            <Image
              src={logo4}
              alt="card image
            "
              height={50}
              width={200}
              className="hover:-translate-y-2 duration-500 cursor-pointer"
            />
            <Image
              src={logo5}
              alt="card image
            "
              height={10}
              width={250}
              className="w-[150px] h-10 hover:-translate-y-2 duration-500 cursor-pointer"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BrandLogo;
