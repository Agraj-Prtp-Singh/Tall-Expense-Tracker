import React from "react";

const aiInsight = {
  title: "AI Insight",
  insight:
    "Setting a $15/day cap could save you roughly $90 this month. Dining spend is running 34% above your 3-month average — mostly weekday lunches.",
};

const Insight = () => {
  return (
    <div className="p-8">
      <div className="border border-black/20 flex p-4 items-center bg-[#FAFAF8]">
        <p className="border w-[100px] p-[2px] text-center text-[14px] mr-4 font-ibmMono bg-primary text-secondary">
          {aiInsight.title}
        </p>
        <p className="text-[15px] font-light font-inter">{aiInsight.insight}</p>
      </div>
    </div>
  );
};

export default Insight;
