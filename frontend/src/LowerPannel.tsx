import { IconBaseProps } from "react-icons";
import GoogleReview from "./GoogleReview";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";

const LowerPannel = () => {
  const CustomIcon = (
    props: IconBaseProps & { style?: React.CSSProperties }
  ) => <AiFillPhone {...props} />;

  const FirstThreeIconClass =
    "flex  justify-center font-medium items-center hover:text-[#BA55D3] text-[#800980] text-[15px] space-x-4  ";
  return (
    <div className=" flex md:px-[80px]  w-screen items-center justify-center mb-2">
      <div className=" flex flex-col py-4 large:py-0 large:flex-row bg-[#E5D2C4] w-[100%] sm:w-[98%] mt-2  text-[#800980]  underline decoration-[#E5D2C4] justify-evenly ">
        <div className="w-[full] large:w-[450px] px-4  flex flex-col items-center justify-evenly  ">
          <h1 className="text-[32px] text-[#800980] font-semibold">ABOUT US</h1>
          <p className="font-medium   no-underline leading-normal">
            After serving the Indian Army for 21 years Aman entered the
            corporate world for a new beginning. There was a realization
            regarding how cut off is today's human from the real world. To
            understand the human psychic and the human brain he did MA in
            Psychology, became a certified coach and a master trainer and
            facilitator.He realised that the mind was all powerful and hence did
            Past Life Regression Therapy, Hypnotherapy, Reiki and Prana Healing.
          </p>

          <Link to={"/about"}>
            <button className="button rounded-lg">
              <span className="text-sm mx-2 ">Read More</span>
            </button>
          </Link>
        </div>
        <div className="flex justify-start items-center flex-col mr-0 lg:mr-2">
          <h1 className="text-[32px] text-[#800980] font-semibold mt-2">
            TESTIMONIALS
          </h1>
          <GoogleReview></GoogleReview>
        </div>
        <div className="flex justify-start items-center flex-col mt-2">
          <h1 className="text-[32px] text-[#800980] font-semibold">
            CONTACT US
          </h1>
          <div className="flex flex-col justify-evenly items-baseline h-full mb-2 mr-2 ">
            <div className="flex flex-col justify-start items-start  ">
              <div className={FirstThreeIconClass}>
                <CustomIcon style={{ transform: "rotate(90deg)" }} />
                <Link to="tel:+919910305345">9910305345</Link>
              </div>
              <div className={FirstThreeIconClass}>
                <BiMap />
                <a
                  href="https://www.google.com/maps/place/Healing+Touches/@28.5647387,77.3359873,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x390ce5ca1e19a7fb:0x70d86ec8e12d6171!2sHealing+Touches!8m2!3d28.5647387!4d77.338176!3m4!1s0x390ce5ca1e19a7fb:0x70d86ec8e12d6171!8m2!3d28.5647387!4d77.338176"
                  id="smallLinkButton"
                >
                  House No 239, Sec-37, Noida
                </a>
              </div>
              <div className={FirstThreeIconClass}>
                <AiTwotoneMail />
                <Link to="mailto:nimretbedi@gmail.com">Aman Bedi</Link>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center  ">
              <img src={"/contact.png"} className=" h-fit w-96 flex m-5"></img>
              <Link to={"/contact"}>
                <button className="button rounded-lg">
                  <span className="text-sm mx-2 ">Book Now</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LowerPannel;
