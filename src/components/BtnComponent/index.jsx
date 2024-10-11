import React from "react";

const BtnComponent = ({ text, widthSize }) => {
  return (
    <div
      className={`transition ease-in-out bg-purple-500 hover:bg-purple-700 active:bg-purple-600 px-9 py-4 text-center rounded-md w-${widthSize} text-lg font-medium text-slate-100`}
    >
      {text}
    </div>
  );
};

export default BtnComponent;
