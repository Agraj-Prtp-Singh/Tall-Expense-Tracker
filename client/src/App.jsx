import React from "react";
import LeftPanel from "./components/auth/LeftPanel";
import RightPanel from "./components/auth/RightPanel";

const App = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default App;
