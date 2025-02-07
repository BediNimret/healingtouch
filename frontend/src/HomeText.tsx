import { Link } from "react-router-dom";
import {
  titleHome1,
  summaryHome1,
  titleHome2,
  summaryHome2,
} from "./constants";

const homeText = () => {
  return (
    <div className="flex w-full h-full flex-col">
      <div className="bg-gradient-to-b from-[#F0E7DA] to-[#EDDECA] flex justify-center items-center flex-col 2xl:pt-20 xl:pt-8 lg:pt-6 md:pt-4">
        <h2 className="text-[#800980] text-3xl font-bold  sm:py-[20px]">
          SERVICES
        </h2>
        <div className="flex flex-col  large:px-[55px]  md:px-[55px]">
          <div className="flex flex-col large:flex-row w-100">
            <div className=" w-100 flex flex-col justify-start items-center space-x-1 sm:flex-row ">
              <img
                src={"/plr.jpg"}
                className="h-[200px] sm:h-[240px] mt-2 mb-2 ml-0 sm:ml-10"
              ></img>
              <div className="  overflow-hidden max-h-[320px] max-w-[450px] flex flex-col   items-center justify-between mr-0 sm:mr-0 gap-3">
                <h2 className="text-2xl sm:text-3xl text-bold">PLRT</h2>
                <p className="flex text-center text-md ">
                  A unique therapeutic process that helps individuals recall
                  events from previous lifetimes and use that information to
                  effect change and enhance their lives today.
                </p>
                <Link to="/service/plrt">
                  <button className="button rounded-lg mb-4 md:mb-1">
                    <span className="text-sm mx-2 my-1 ">Read More</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className=" w-100 flex flex-col justify-start items-center space-x-1 sm:flex-row ">
              <img
                src={"/hypnotherapy.jpg"}
                className="h-[200px] sm:h-[240px] mt-2 mb-2 ml-0 sm:ml-10"
              ></img>
              <div className="  overflow-hidden max-h-[320px] max-w-[450px] flex flex-col   items-center justify-between mr-0 sm:mr-10 gap-3">
                <h2 className="text-2xl sm:text-3xl text-bold">Hypnotherapy</h2>
                <p className="flex text-center text-md ">
                  Hypnosis uses guided relaxation, intense concentration, and
                  focused attention to achieve a heightened state of awareness
                  that is sometimes called a trance.
                </p>
                <Link to="/service/hypnotherapy">
                  <button className="button rounded-lg mb-4 md:mb-1">
                    <span className="text-sm mx-2 my-1 ">Read More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col large:flex-row w-100">
            <div className=" w-100 flex flex-col justify-start items-center space-x-1 sm:flex-row ">
              <img
                src={"/ocd.jpg"}
                className="h-[200px] sm:h-[240px] mt-2 mb-2 ml-0 sm:ml-10"
              ></img>
              <div className="  overflow-hidden max-h-[320px] max-w-[450px] flex flex-col   items-center justify-between mr-0 sm:mr-10 gap-3">
                <h2 className="text-2xl sm:text-3xl text-bold ">OCD</h2>
                <p className="flex text-center text-md ">
                  Unfortunately, most people see several health professionals
                  and spend years seeking treatment for OCD before they are
                  correctly diagnosed.
                </p>
                <Link to="/service/ocd">
                  <button className="button rounded-lg mb-4 md:mb-1">
                    <span className="text-sm mx-2 my-1 ">Read More</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className=" w-100 flex flex-col justify-start items-center space-x-1 sm:flex-row ">
              <img
                src={"/hocleansing.jpg"}
                className="h-[200px] sm:h-[240px] mt-2 mb-2 ml-0 sm:ml-10"
              ></img>
              <div className="  overflow-hidden max-h-[320px] max-w-[450px] flex flex-col   items-center justify-between mr-0 sm:mr-10 gap-3">
                <h2 className="text-2xl large:text-xl large:font-semibold">
                  Home/Office Cleansing
                </h2>
                <p className="flex text-center text-md ">
                  Have you ever experienced uncomfortable chills when entering a
                  room or being in the presence of someone?
                </p>
                <Link to="/service/cleansing">
                  <button className="button rounded-lg mb-4 md:mb-1">
                    <span className="text-sm mx-2 my-1 ">Read More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col large:flex-row w-100">
            <div className=" w-100 flex flex-col justify-start items-center space-x-1 sm:flex-row ">
              <img
                src={"/pranic.jpg"}
                className="h-[200px] sm:h-[240px] mt-2 mb-2 ml-0 sm:ml-10"
              ></img>
              <div className="  overflow-hidden max-h-[320px] max-w-[450px] flex flex-col   items-center justify-between mr-0 sm:mr-10 gap-3">
                <h2 className="text-2xl sm:text-3xl text-bold">
                  Pranic Healing
                </h2>
                <p className="flex text-center text-md ">
                  This invisible bio-energy or vital energy keeps the body alive
                  and maintains a state of good health.
                </p>
                <Link to="/service/pranic">
                  <button className="button rounded-lg mb-4 md:mb-1">
                    <span className="text-sm mx-2 my-1 ">Read More</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className=" w-100 flex flex-col justify-start items-center space-x-1 sm:flex-row ">
              <img
                src={"/reiki.jpg"}
                className="h-[200px] sm:h-[240px] mt-2 mb-2 ml-0 sm:ml-10"
              ></img>
              <div className="  overflow-hidden max-h-[320px] max-w-[450px] flex flex-col  items-center justify-between mr-0 sm:mr-10 gap-3">
                <h2 className="text-2xl sm:text-3xl text-bold">
                  Reiki Healing
                </h2>
                <p className="flex text-center text-md ">
                  These studies can be found by using one of the professional
                  medical databases such as PubMed or Cochrane Collection.
                </p>
                <Link to="/service/reiki">
                  <button className="button rounded-lg mb-4 md:mb-1">
                    <span className="text-sm mx-2 my-1 ">Read More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col my-4 mx-4 md:mx-24 bg-[#EDDECA] p-4 shadowClassOuter ">
        <h2 className="text-[#800980] text-xl sm:text-3xl font-bold">
          {titleHome1}
        </h2>
        <p className="text-black mt-2  leading-6 text-sm sm:text-[16px] ">
          {summaryHome1}
        </p>
        <h2 className="text-[#800980]  text-xl sm:text-3xl mt-4 font-bold">
          {titleHome2}
        </h2>
        <p className="text-black mt-2 text-sm  leading-6 sm:text-[16px] ">
          {summaryHome2}
        </p>
        <Link to="/about">
          <button className="button rounded-lg mt-4">
            <span className="text-lg mx-3 my-1 font-semibold ">Read More</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default homeText;
