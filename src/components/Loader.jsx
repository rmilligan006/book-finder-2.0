import React from "react";
import loader from "../images/loading.gif";

const Loader = () => {
  return (
    <div className="flex items-center justify-center p-16">
      <img src={loader} alt="" className="w-[120px]" />
    </div>
  );
};

export default Loader;
