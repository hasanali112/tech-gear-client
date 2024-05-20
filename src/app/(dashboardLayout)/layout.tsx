import { ReactNode } from "react";
import SideBarForBoard from "../component/Dashboard/SideBarForBoard";

type TProps = {
  children: ReactNode;
};

const layout = ({ children }: TProps) => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <SideBarForBoard />
        </div>
        <div className="col-span-10">{children}</div>
      </div>
    </div>
  );
};

export default layout;
