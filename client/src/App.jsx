import React from "react";
import LeftPanel from "./components/auth/LeftPanel";
import RightPanel from "./components/auth/RightPanel";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import "react-datepicker/dist/react-datepicker.css";
import Expense from "./pages/Expense";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    // <div className="flex h-screen overflow-hidden">
    //   <LeftPanel />
    //   <RightPanel />
    // </div>
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/expenses" element={<Expense />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
