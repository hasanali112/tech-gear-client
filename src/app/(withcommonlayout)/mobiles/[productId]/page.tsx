import Container from "@/app/component/shared/Container/Container";
import { getSingleProductFromDB } from "@/utils/getSingleProduct";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";

interface TProps {
  params: {
    productId: string;
  };
}

const SingleProductDetails = async ({ params }: TProps) => {
  const getSingleProduct = await getSingleProductFromDB(params.productId);
  console.log(getSingleProduct);

  return (
    <div className="bg-[#e5e7eb] ">
      <div className="bg-white pt-10">
        <Container>
          <div className="grid grid-cols-12 gap-16 h-[650px]">
            <div className="col-span-8   w-full h-[532px] ">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-3  w-full h-[532px]">
                  <div className="flex flex-col  gap-4">
                    <div className="  w-full h-[166px]">
                      <Image
                        src={getSingleProduct.image[2]}
                        alt="card1"
                        height={166}
                        width={166}
                        className="h-full w-full rounded-lg"
                      />
                    </div>
                    <div className="  w-full h-[166px]">
                      <Image
                        src={getSingleProduct.image[1]}
                        alt="card1"
                        height={166}
                        width={166}
                        className="h-full w-full rounded-lg"
                      />
                    </div>
                    <div className="w-full h-[167px]">
                      <Image
                        src={getSingleProduct.image[0]}
                        alt="card1"
                        height={166}
                        width={166}
                        className="h-full w-full rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-9  w-full h-[532px]">
                  <Image
                    src={getSingleProduct.image[0]}
                    alt="card1"
                    height={166}
                    width={166}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4  w-full h-[532px] pt-4">
              <h1 className="text-3xl">{getSingleProduct.title}</h1>
              <div className="flex  items-center gap-3">
                <p className="text-xl mt-3">${getSingleProduct.price}</p>
                <p className="text-xl mt-3">({getSingleProduct.ratings})</p>
              </div>
              <Divider className="my-10" />
              <div>
                <p>{getSingleProduct.description.slice(0, 240)}.</p>
                <p className="mt-3">Brand: {getSingleProduct.brand}</p>
                <p className="inline-flex items-center gap-3 mt-5">
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
                      className="lucide lucide-truck"
                    >
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                      <path d="M15 18H9" />
                      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                      <circle cx="17" cy="18" r="2" />
                      <circle cx="7" cy="18" r="2" />
                    </svg>
                  </span>
                  Free worldwide shipping on $100
                </p>
                <p className="inline-flex gap-3 items-center">
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
                      className="lucide lucide-package"
                    >
                      <path d="m7.5 4.27 9 5.15" />
                      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                      <path d="m3.3 7 8.7 5 8.7-5" />
                      <path d="M12 22V12" />
                    </svg>
                  </span>
                  Delivers in: 3-7 Working Days
                </p>
              </div>
              <Button variant="bordered" className="w-full mt-4  ">
                Add To Cart
              </Button>
              <Button className="w-full mt-3 bg-black text-white">
                Buy Now
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="pt-20 h-[400px]">
          <h1 className="text-4xl">Description</h1>
          <p className="mt-4">{getSingleProduct.description}</p>
        </div>
      </Container>
    </div>
  );
};

export default SingleProductDetails;
