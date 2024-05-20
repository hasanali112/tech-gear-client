import CategorySidebar from "@/app/component/Categories/CategorySidebar";
import Container from "@/app/component/shared/Container/Container";
import { ReactNode } from "react";

type TChildren = {
  children: ReactNode;
};

const layout = ({ children }: TChildren) => {
  return (
    <div className="bg-[#e5e7eb]">
      <Container className="py-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-2">
            <CategorySidebar />
          </div>
          <div className="col-span-9">{children}</div>
        </div>
      </Container>
    </div>
  );
};

export default layout;
