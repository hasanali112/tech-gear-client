import Image from "next/image";

const MostPopularCard = () => {
  return (
    <div className="hover:-translate-y-2 duration-500 rounded-lg">
      <div>
        <Image
          src="https://images.unsplash.com/photo-1581591546314-528384aab67c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card image
            "
          height={360}
          width={296}
          className="rounded-lg w-full h-[350px] object-cover "
        />
      </div>
      <div className="ml-2">
        <h1 className="text-xl mt-2">Xiaomi Smart Camera C200</h1>
        <div className="flex justify-between items-center">
          <p>$200.00</p>
          <button className="rounded-full border border-black text-base w-[26px] font-semibold ">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default MostPopularCard;
