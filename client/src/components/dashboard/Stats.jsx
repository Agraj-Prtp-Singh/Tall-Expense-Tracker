import React from "react";

const dashboardStats = [
  {
    id: 1,
    title: "Spent this month",
    value: "$2,148",
    subtitle: "↑ 12% vs June",
  },
  {
    id: 2,
    title: "Budget remaining",
    value: "$852",
    subtitle: "of $3,000 monthly budget",
  },
  {
    id: 3,
    title: "Top category",
    value: "Food & Dining",
    subtitle: "$614 · 28% of spend",
  },
  {
    id: 4,
    title: "Daily average",
    value: "$71.60",
    subtitle: "30 days tracked",
  },
];

const Stats = () => {
  return (
    <div>
      <div className="p-8 grid grid-cols-4 justify-center ">
        {dashboardStats.map((stats) => (
          <div
            key={stats.id}
            className="border border-black/20 p-4 items-center  text-center"
          >
            <p className="font-ibmMono uppercase text-[14px] text-[#75746E]  text-center">
              {stats.title}
            </p>
            <h2
              className={`mt-2 font-ibmMono text-[20px] text-center font-bold ${stats.id == 2 ? "text-green-500" : ""}`}
            >
              {stats.value}
            </h2>
            <p className="mt-2 font-inter text-[14px] text-[#75746E]">
              {stats.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
