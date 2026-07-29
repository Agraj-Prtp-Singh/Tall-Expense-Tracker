import React from "react";
import DashboardNav from "./DashboardNav";
import Stats from "./Stats";
import Insight from "./Insight";
import RecentExpenses from "./RecentExpenses";
import SpendByCategory from "./SpendByCategory";

const Dashboard = () => {
  return (
    <div>
      <DashboardNav />
      <Stats />
      <Insight />

      <div className="mt-10 grid grid-cols-12 gap-6">
        <div className="col-span-7 p-8">
          <RecentExpenses />
        </div>

        <div className="col-span-5 p-8">
          <SpendByCategory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
