import React from "react";
import LeftPanel from "./components/auth/LeftPanel";
import RightPanel from "./components/auth/RightPanel";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Expense from "./pages/Expense";

import "react-datepicker/dist/react-datepicker.css";

import { Routes, Route } from "react-router-dom";
import { ExpenseProvider } from "./context/ExpenseContext";

const App = () => {
  return (
    <ExpenseProvider>
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/expenses" element={<Expense />} />
          </Routes>
        </main>
      </div>
    </ExpenseProvider>
  );
};

export default App;
