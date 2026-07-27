import React from "react";

const Divider = () => {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-gray-300"></div>

      <span className="font-ibmMono text-sm uppercase tracking-widest text-[#75746E] whitespace-nowrap">
        Or Continue With
      </span>

      <div className="flex-1 h-px bg-gray-300"></div>
    </div>
  );
};

export default Divider;
