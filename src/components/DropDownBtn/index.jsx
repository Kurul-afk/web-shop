import React, { useState } from "react";
import Arrow from "../../assets/img/arrow.svg";

const DropDownBtn = () => {
  const [isHidden, setIsHidden] = useState("hidden");
  return (
    <div className="relative">
      <button
        className="bg-purple-500 w-24 h-11 rounded-l-lg text-slate-50"
        onClick={() => setIsHidden((hidden) => (hidden ? "" : "hidden"))}
      >
        Dropdown
      </button>
      <div className={`${isHidden} fixed right-0 top-20 w-full bg-slate-100`}>
        <div className="flex">
          <ul>
            <li>
              <h1>Column 1</h1>
            </li>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
          </ul>
          <ul>
            <li>
              <h1>Column 2</h1>
            </li>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDownBtn;
