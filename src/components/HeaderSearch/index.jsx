import React from "react";

const HeaderSearch = () => {
  return (
    <form className="w-3/4">
      <input
        type="text"
        className="bg-slate-200 h-11 w-full rounded-r-lg pl-4 text-lg hover:h-10 hover:outline hover:outline-2 hover: outline-slate-400 focus:h-10 focus:bg-slate-300 focus:outline-2 focus:outline-purple-500 active:outline"
        placeholder="Search..."
      />
    </form>
  );
};

export default HeaderSearch;
