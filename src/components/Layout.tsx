import { ReactNode } from "react";
import Logo from "./Logo.tsx";
import Conditions from "./Conditions.tsx";
import bg from "../assets/img/bg.png";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="relative overflow-hidden bg-no-repeat bg-cover"
      style={{backgroundImage: `url(${bg})`,}}
    >
      {children}
      <div className="mt-40 2xl:mt-0 flex flex-col">
        <Logo />
        <Conditions />
      </div>
    </div>
  );
};

export default Layout;
