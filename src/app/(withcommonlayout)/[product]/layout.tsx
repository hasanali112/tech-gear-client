import CategorySidebar from "@/app/component/Categories/CategorySidebar";
import Container from "@/app/component/shared/Container/Container";
import { ReactNode } from "react";

interface TType {
  children: ReactNode;
}

const layout = ({ children }: TType) => {
  return (
    <div className="bg-[#e5e7eb]">
      <Container className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <CategorySidebar />
        </div>
        <div className="col-span-9">{children}</div>
      </Container>
    </div>
  );
};

export default layout;
