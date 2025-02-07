import { NavLink } from "react-router-dom";
import { Dropdown, MenuProps } from "antd";
import { FaCaretDown } from "react-icons/fa";
import "./dropdown.css";

function TopBar() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <NavLink to="/service/plrt" className="">
          PLRT
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink to="/service/hypnotherapy" className=" ">
          {"hypnotherapy".toUpperCase()}
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <NavLink to="/service/pranic" className=" ">
          {"Pranic".toUpperCase()}
        </NavLink>
      ),
    },
    {
      key: "4",
      label: (
        <NavLink to="/service/reiki" className=" ">
          {"Reiki".toUpperCase()}
        </NavLink>
      ),
    },
    {
      key: "5",
      label: (
        <NavLink to="/service/ocd" className=" ">
          {"OCD".toUpperCase()}
        </NavLink>
      ),
    },
    {
      key: "6",
      label: (
        <NavLink to="/service/cleansing" className=" ">
          {"Home cleansing".toUpperCase()}
        </NavLink>
      ),
    },
  ];

  return (
    <div>
      <Dropdown className="smallScreen" menu={{ items }}>
        <div className="flex justify-center items-center cursor-pointer ">
          Services
          <div className="ml-1">
            <FaCaretDown />
          </div>
        </div>
      </Dropdown>
    </div>
  );
}

export default TopBar;
