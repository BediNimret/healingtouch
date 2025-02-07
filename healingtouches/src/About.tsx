import { useEffect } from "react";
import {
  titleAbout1,
  titleAbout2,
  summaryAbout1,
  summaryAbout2,
} from "./constants";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="bg-[#EDDECA] shadowClassOuter flex flex-col text-[#800980] p-3 my-5 md:mx-[90px] gap-4">
      <h1 className="text-2xl sm:text-3xl font-bold  flex justify-center items-center ">
        ABOUT US
      </h1>
      <h2 className="text-lg sm:text-2xl  font-bold  flex justify-start items-center">
        {titleAbout1}
      </h2>
      <p className="text-md text-[#b80db8] text-sm sm:text-[17px] leading-6 flex justify-start items-center">
        {summaryAbout1}
      </p>
      <h2 className="text-lg sm:text-2xl  font-bold  flex justify-start items-center">
        {titleAbout2}
      </h2>
      <div className="flex justify-center space-x-4 items-center">
        <img src="./aman.png" />
        <p className="text-md text-[#b80db8] text-sm sm:text-[17px] leading-6 flex justify-start items-center">
          {summaryAbout2}
        </p>
      </div>
    </div>
  );
}

export default About;
