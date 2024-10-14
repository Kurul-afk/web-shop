import React, { useState } from "react";

const DropDownBtn = () => {
  const [isHidden, setIsHidden] = useState("hidden");
  const toggleIsHidden = () => {
    setIsHidden((prevState) => (prevState === "hidden" ? "" : "hidden"));
  };
  return (
    <div>
      <button></button>
      <div></div>
    </div>
  );
};

export default DropDownBtn;
