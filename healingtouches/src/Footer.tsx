import { Link as AdminLink } from "react-scroll";
import { FaAngleUp } from "react-icons/fa";
import { Tooltip } from "antd";
import { IconBaseProps } from "react-icons";

function Footer() {
  const CustomIcon = (
    props: IconBaseProps & { size?: number; className?: string }
  ) => <FaAngleUp {...props} />;

  return (
    <div className=" flex justify-center items-center  flex-col h-fit w-screen bg-[#E8B5BC]  ">
      <AdminLink to="topBar" smooth={true} duration={300}>
        <Tooltip title="TO TOP">
          <CustomIcon size={28} className="test mb-2" />
        </Tooltip>
      </AdminLink>
    </div>
  );
}

export default Footer;
