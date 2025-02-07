import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2 w-screen mt-20 ">
        <div className="flex justify-center items-center gap-4  z-1">
          <h1 className="text-lg">404 Not found</h1>
          <Link to="/">
            <button className="button rounded-lg text-md px-3 py-1 font-semibold">
              Go Back to homepage
            </button>
          </Link>
        </div>
        <img src={"/Scarecrow.png"} />
      </div>
    </div>
  );
};

export default Error;
