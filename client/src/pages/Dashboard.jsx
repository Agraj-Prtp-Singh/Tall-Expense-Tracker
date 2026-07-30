import React from "react";
import DashboardNav from "../components/dashboard/DashboardNav";
import Stats from "../components/dashboard/Stats";
import Insight from "../components/dashboard/Insight";
import RecentExpenses from "../components/dashboard/RecentExpenses";
import SpendByCategory from "../components/dashboard/SpendByCategory";

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
