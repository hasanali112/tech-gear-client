import { ReactNode } from "react";
import Navbar from "../component/shared/Navbar";
import Footer from "../component/shared/Footer";
import BrandLogo from "../component/Home/BrandLogo";

type TProps = {
  children: ReactNode;
};

const layout = ({ children }: TProps) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <BrandLogo />
      <Footer />
    </div>
  );
};

export default layout;
