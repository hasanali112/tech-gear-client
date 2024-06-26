import { ReactNode } from "react";
type Tcontainer={
    children:ReactNode,
    className?:string
}

const Container = ({children, className}:Tcontainer) => {
    return (
        <div className={`w-full max-w-[1220px] px-[20px] mx-auto ${className}`}>
            {children}
        </div>
    );
};

export default Container;