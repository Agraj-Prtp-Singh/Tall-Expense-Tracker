import React from "react";
import LeftPanel from "./components/auth/LeftPanel";
import RightPanel from "./components/auth/RightPanel";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    // <div className="flex h-screen overflow-hidden">
    //   <LeftPanel />
    //   <RightPanel />
    // </div>
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1">
        <Dashboard />
      </main>
    </div>
  );
};

export default App;
