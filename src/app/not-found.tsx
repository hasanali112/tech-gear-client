import Image from "next/image";
import React from "react";

const CustomsErrorPage = () => {
  return (
    <div>
      <Image
        src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=996&t=st=1716376689~exp=1716377289~hmac=b7dc72562fd30c1044b24eb2da71a24bace8206c2e22cd1b01954b8f7b2bd8cc"
        alt="404"
        width={500}
        height={500}
        className="w-[50%] h-screen mx-auto"
      />
    </div>
  );
};

export default CustomsErrorPage;
