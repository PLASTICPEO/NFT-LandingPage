import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-violet-900">
      <div className="flex-grow">
        <Header />
        <>{children}</>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
