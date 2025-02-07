import { useState } from "react";
import {
  AiFillPhone,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGoogleCircle,
  AiTwotoneMail,
} from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { BiMap } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import SmallScreenMenu from "./SmallScreenMenu";
import DropDown from "./dropdown/Dropdown";
import { IconBaseProps } from "react-icons";

function TopBar() {
  const [icon, updateIcon] = useState(false);

  const iconChange = () => {
    updateIcon(!icon);
  };
  const FirstThreeIconClass =
    "flex  justify-center items-center space-x-1 hover:text-black font-medium";
  const CustomIcon = (
    props: IconBaseProps & { style?: React.CSSProperties }
  ) => <AiFillPhone {...props} />;
  const CustomIconGoogle = (
    props: IconBaseProps & { size?: number; className?: string }
  ) => <AiFillGoogleCircle {...props} />;
  const CustomIconLinkedin = (
    props: IconBaseProps & { size?: number; className?: string }
  ) => <AiFillLinkedin {...props} />;
  const CustomIconFacebook = (
    props: IconBaseProps & { size?: number; className?: string }
  ) => <AiFillFacebook {...props} />;
  return (
    <div>
      <div className="colorLink hidden  sm:flex h-8 justify-between  w-screen bg-[#E8B5BC] text-[#800980] px-4 ">
        <div className="flex flex-row justify-center items-center space-x-4 ">
          <div className={FirstThreeIconClass}>
            <CustomIcon style={{ transform: "rotate(100deg)" }} />
            <Link to="tel:+919910305345">9910305345</Link>
          </div>
          <div className={FirstThreeIconClass}>
            <BiMap />
            <a
              href="https://www.google.com/maps/place/Healing+Touches/@28.5647387,77.3359873,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x390ce5ca1e19a7fb:0x70d86ec8e12d6171!2sHealing+Touches!8m2!3d28.5647387!4d77.338176!3m4!1s0x390ce5ca1e19a7fb:0x70d86ec8e12d6171!8m2!3d28.5647387!4d77.338176"
              id="smallLinkButton"
            >
              House No 239, Sec-37, Noida, UP, India
            </a>
          </div>
          <div className={FirstThreeIconClass}>
            <AiTwotoneMail />
            <Link to="mailto:nimretbedi@gmail.com">Aman Bedi</Link>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center space-x-2 text-xl ">
          <Link
            target="_blank"
            to="https://www.facebook.com/healingtouches12/?ref=bookmarks"
          >
            <CustomIconFacebook className={"hover:text-black"} />
          </Link>
          <Link
            target="_blank"
            to="https://www.google.com/search?ludocid=8131370936267792753&hl=en&q=Healing%20Touches%20239%2C%20Shaheed%20Smarak%20Marg%20Arun%20Vihar%2C%20Sector%2037%20Noida%2C%20Gautam%20Buddh%20Nagar%2C%20Uttar%20Pradesh%20201303&_ga=2.219032539.334278116.1541166174-2025119042.1514981300#trex=m_t:lcl_akp,rc_ludocids:8131370936267792753,rc_q:Healing%2520Touches%2520239%252C%2520Shaheed%2520Smarak%2520Marg%2520Arun%2520Vihar%252C%2520Sector%252037%2520Noida%252C%2520Gautam%2520Buddh%2520Nagar%252C%2520Uttar%2520Pradesh%2520201303,ru_gwp:0%252C7,ru_q:Healing%2520Touches%2520239%252C%2520Shaheed%2520Smarak%2520Marg%2520Arun%2520Vihar%252C%2520Sector%252037%2520Noida%252C%2520Gautam%2520Buddh%2520Nagar%252C%2520Uttar%2520Pradesh%2520201303,trex_id:KgSbXe"
          >
            <CustomIconGoogle className={"hover:text-black"} />
          </Link>
          <Link target="_blank" to="https://www.linkedin.com/in/amansbedi/">
            <CustomIconLinkedin className={"hover:text-black mr-3"} />
          </Link>
        </div>
      </div>

      <div className="colorLink hidden bg-gradient-to-b from-[#E8B5BC] to-[#EDCEC5] md:flex h-17 justify-between items-center w-screen    text-[#800980] px-4 ">
        <div className="flex  items-end px-4">
          <Link to="/">
            <img src={"/capture.png"}></img>
          </Link>
          <h1 className="text-4xl lg:text-5xl font-freestyle mb-1 text-[#800980]  font-semibold">
            HEALING TOUCHES
          </h1>
        </div>
        <div className="flex justify-center items-center space-x-4 mr-4">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>

          <DropDown />

          <NavLink to="/faqs">FAQS</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
      <div className=" flex justify-end  items-center w-screen bg-[#E8B5BC] text-[#800980] px-4 md:hidden">
        <div className="flex  text-[#800980] text-4xl    p-1">
          {!icon && (
            <div onClick={iconChange}>
              <AiOutlineMenu />
            </div>
          )}
          {icon && (
            <div onClick={iconChange}>
              <ImCross />{" "}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-end  space-y-1 mt-1 w-full  bg-slate-500 justify-self-end md:hidden">
        {icon && (
          <SmallScreenMenu>
            <NavLink to="/home">Home</NavLink>
          </SmallScreenMenu>
        )}
        {icon && (
          <SmallScreenMenu>
            <NavLink to="/about">About</NavLink>
          </SmallScreenMenu>
        )}
        {icon && (
          <SmallScreenMenu>
            <DropDown />
          </SmallScreenMenu>
        )}
        {icon && (
          <SmallScreenMenu>
            <NavLink to="/faqs">FAQS</NavLink>
          </SmallScreenMenu>
        )}
        {icon && (
          <SmallScreenMenu>
            <NavLink to="/contact">Contact</NavLink>
          </SmallScreenMenu>
        )}
      </div>
    </div>
  );
}

export default TopBar;
