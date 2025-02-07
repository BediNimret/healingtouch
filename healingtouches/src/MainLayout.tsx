import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";
import Home from "./Home";
import { Element } from "react-scroll";
import { useLocation } from "react-router-dom";
import LowerPannel from "./LowerPannel";

function MainLayout() {
  let location = useLocation();

  return (
    <div className="relative bg-gradient-to-b from-[#F0E7DA] to-[#EDDECA] flex flex-col ">
      <div>
        <Element name="topBar" className="section">
          <TopBar></TopBar>
        </Element>
      </div>
      <div className=" bg-gradient-to-b from-[#EDDECA] to-[#F0E7DA]  ">
        {location.pathname === "/" ? <Home /> : <Outlet />}
      </div>
      <div>
        <h1 className="text-3xl bg-gradient-to-b from-[#F0E7DA] to-[#E8B5BC]  font-bold underline flex justify-center items-center ">
          {location.pathname !== "/contact" && <LowerPannel />}
        </h1>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MainLayout;
