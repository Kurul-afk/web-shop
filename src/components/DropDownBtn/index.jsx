import React, { useState } from "react";
import Arrow from "../../assets/img/arrow.svg";
import { useNavigate } from "react-router-dom";

const DropDownBtn = () => {
  const [isHidden, setIsHidden] = useState("hidden");
  const navigate = useNavigate();
  return (
    <div className="relative">
      <button
        className="bg-purple-500 w-24 h-11 rounded-l-lg text-slate-50"
        onClick={() => setIsHidden((hidden) => (hidden ? "" : "hidden"))}
      >
        Dropdown
      </button>
      <div className={`${isHidden} fixed right-0 top-20 w-full bg-slate-100`}>
        <div className="flex gap-3 w-4/5 mx-auto py-4">
          <ul>
            <li className="mb-4">
              <h1 className="text-xl">Catalogue of products</h1>
            </li>
            <li
              className="bg-slate-200 py-2 px-2 text-sm cursor-pointer hover:text-purple-500"
              onClick={() => navigate("/product-list")}
            >
              Группа продуктов
            </li>
            <li
              className="bg-slate-200 py-2 px-2 text-sm cursor-pointer hover:text-purple-500"
              onClick={() => navigate("/reviews")}
            >
              Обзоры
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDownBtn;
