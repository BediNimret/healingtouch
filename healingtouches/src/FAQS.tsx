import { faqs } from "./constants";
import Accordion from "./Accordion";
import { useEffect } from "react";

const FAQS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="m-3 flex flex-col items-center text-[#800980] space-y-3 md:px-[75px]">
      <h1 className="text-4xl font-bold">FAQS</h1>
      {faqs.map((faq) => (
        <Accordion service={faq} />
      ))}
    </div>
  );
};

export default FAQS;
