import React from "react";
import LeftPanel from "./components/auth/LeftPanel";
import RightPanel from "./components/auth/RightPanel";
import Sidebar from "./components/layout/Sidebar";

const App = () => {
  return (
    // <div className="flex h-screen overflow-hidden">
    //   <LeftPanel />
    //   <RightPanel />
    // </div>
    <div>
      <Sidebar />
    </div>
  );
};

export default App;
