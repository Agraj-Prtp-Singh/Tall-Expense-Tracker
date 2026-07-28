import React from "react";
import DashboardNav from "./DashboardNav";
import Stats from "./Stats";
import Insight from "./Insight";

const Dashboard = () => {
  return (
    <div>
      <DashboardNav />
      <Stats />
      <Insight />
    </div>
  );
};

export default Dashboard;
