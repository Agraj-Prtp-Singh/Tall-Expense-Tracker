import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Plus,
  Settings,
  LogOut,
  List,
  FilePenLine,
} from "lucide-react";

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    to: "/dashboard",
  },
  {
    id: "addExpenses",
    label: "Add Expenses",
    icon: Plus,
    to: "/addExpenses",
  },
  {
    id: "categories",
    label: "Categories",
    icon: List,
    to: "/categories",
  },
  {
    id: "monthlyReport",
    label: "Monthly Report",
    icon: FilePenLine,
    to: "/monthlyReport",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    to: "/settings",
  },
];

const Sidebar = () => {
  return (
    <aside>
      <button>Chevron Left & Right</button>
      {/* Logo and branding */}
      <div>
        
      </div>
    </aside>
  );
};

export default Sidebar;
