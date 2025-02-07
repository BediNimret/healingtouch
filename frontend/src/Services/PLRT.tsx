import { useEffect } from "react";
import { services } from "../constants";

const PLRT = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="flex justify-center items-center flex-col my-4 mx-4 md:mx-24 bg-[#EDDECA] p-4 shadowClassOuter ">
        <h1 className="text-3xl font-semibold text-[#800980]">
          {services[0].heading}
        </h1>
        <div>
          {services[0].qa.map((child) => (
            <>
              <h1 className="pt-6 pb-3 text-[#800980] font-semibold">
                {child.heading}
              </h1>
              <div className="text-md sm:text-lg space-y-2 text-black">
                {child.text.map((subText) =>
                  typeof subText === "string" ? (
                    <p>{subText}</p>
                  ) : (
                    subText.map((t) => (
                      <p className="italic flex flex-col justify-center items-center space-y-0">
                        {t}
                      </p>
                    ))
                  )
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default PLRT;
