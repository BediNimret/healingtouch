import React from "react";
import { useFormik } from "formik";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";

import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IconBaseProps } from "react-icons";
import { Select, Space } from "antd";

const Contact = () => {
  const [style, setStyle] = React.useState(false);
  const [optionValue, setOptionValue] = React.useState(0);
  const [submit, setSubmit] = React.useState(false);
  const FirstThreeIconClass =
    "flex  justify-center items-center space-x-1 hover:text-black text-sm";
  const CustomIcon = (
    props: IconBaseProps & { style?: React.CSSProperties }
  ) => <AiFillPhone {...props} />;
  const lableStyle = {
    top: "-22px",
    bottom: "0px",
    left: "12px",
    fontSize: "18px",
    opacity: "1",
    color: "#800980",
  };
  const handleChange = (value: string | any[]) => {
    formik.setFieldValue("service", value);
    setOptionValue(value.length);
    value.length === 0 && setStyle(false);
    console.log(value.length);
  };

  const options = [
    {
      label: "PLRT",
      value: "PLRT",
    },
    {
      label: "hypnotherapy".toUpperCase(),
      value: "hypnotherapy".toUpperCase(),
    },
    {
      label: "Pranic".toUpperCase(),
      value: "Pranic".toUpperCase(),
    },
    {
      label: "Reiki".toUpperCase(),
      value: "Reiki".toUpperCase(),
    },
    {
      label: "OCD".toUpperCase(),
      value: "OCD".toUpperCase(),
    },
    {
      label: "Bach Flower".toUpperCase(),
      value: "Bach Flower".toUpperCase(),
    },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      desc: "",
      service: [],
    },
    onSubmit: (values) => {
      setSubmit(true);
      if (formik.values.phone.length === 12) {
        alert(JSON.stringify(values));
      }
    },
  });
  return (
    <div className=" bg-gradient-to-b from-[#EDCEC5] to-[#E8B5BC] flex flex-col large:flex-row w-[100%] justify-end large:justify-evenly items-center p-4 gap-2">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col justify-center items-center w-[38vh] xl:w-[75vh] sm:w-[50vh] md:w-[60vh] large:w-[65vh] bg-[#EDCEC5] px-6 py-3 gap-6  shadowClassContact">
          <h1 className="flex  justify-center text-2xl">Appointment Request</h1>
          <div className="floating-label-group  ">
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control w-[35vh]  sm:w-[45vh] md:w-[55vh]  h-[40px]"
              required
            />
            <label className="floating-label" htmlFor="name">
              Name <span className="text-red-700">*</span>
            </label>
          </div>
          <div className="floating-label-group  ">
            <PhoneInput
              country={"in"}
              value={formik.values.phone}
              onChange={(phone) => formik.setFieldValue("phone", phone)}
            />

            <label style={lableStyle} className="floating-label" htmlFor="num">
              Number <span className="text-red-700">*</span>
            </label>
            {formik.values.phone.length !== 12 && submit && (
              <label htmlFor="num">
                <span className="text-red-700 text-sm font-semibold">
                  Enter Valid Number{" "}
                </span>
              </label>
            )}
          </div>
          <div className="floating-label-group  ">
            <input
              id="email"
              name="email"
              type="email"
              onChange={(e) => {
                formik.setFieldValue("email", e.target.value);
                console.log(e.target.value);
              }}
              value={formik.values.email}
              className="form-control w-[35vh]  sm:w-[45vh] md:w-[55vh]  h-[40px]"
              required
            />
            <label
              className="floating-label "
              style={formik.values.email ? lableStyle : { color: "" }}
              htmlFor="email"
            >
              Email <span className="text-red-700">*</span>
            </label>
          </div>
          <div className="floating-label-group  " style={{ border: "none" }}>
            <Select
              id="service"
              mode="multiple"
              showSearch={false}
              className="form-control w-[35vh]  sm:w-[45vh] md:w-[55vh]  "
              defaultValue={[]}
              onFocus={() => setStyle(true)}
              onBlur={() => optionValue === 0 && setStyle(false)}
              onChange={(value) => handleChange(value)}
              options={options}
              allowClear
              optionRender={(option) => <Space>{option.data.label}</Space>}
            />
            <label
              className="floating-label "
              style={style ? lableStyle : { color: "#8b888c" }}
              htmlFor="service"
            >
              Select Services <span className="text-red-700">*</span>
            </label>
          </div>
          <div className="floating-label-group  ">
            <textarea
              id="desc"
              name="desc"
              onChange={formik.handleChange}
              value={formik.values.desc}
              className="form-control w-[35vh]  sm:w-[45vh] md:w-[55vh] "
              required
            />
            <label className="floating-label " htmlFor="desc">
              Brief Description
            </label>
            <div className=" flex justify-center items-center">
              <button
                type="submit"
                className="button rounded-lg text-lg px-3 py-1 font-semibold"
                disabled={optionValue ? false : true}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="flex flex-col bg-[#EDCEC5] mt-4 large:mt-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112133.37258210013!2d77.26813573325566!3d28.564720722050794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5ca1e19a7fb%3A0x70d86ec8e12d6171!2sHealing+Touches!5e0!3m2!1sen!2sin!4v1519718073150"
          className=" h-[300px] large:h-[470px]  xl:w-[85vh] sm:w-[50vh] md:w-[60vh] large:w-[75vh]  w-[38vh]"
        ></iframe>
        <div className="sm:flex flex-row justify-evenly items-center space-x-2 hidden ">
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
              House No 239, Sec-37, Noida
            </a>
          </div>
          <div className={FirstThreeIconClass}>
            <AiTwotoneMail />
            <Link to="mailto:nimretbedi@gmail.com">Aman Bedi</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
