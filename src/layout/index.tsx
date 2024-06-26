import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Up from "../components/up";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-[#000000] to-violet-900">
      <div className="flex-grow">
        <Header />
        <>{children}</>
        <Up />
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
