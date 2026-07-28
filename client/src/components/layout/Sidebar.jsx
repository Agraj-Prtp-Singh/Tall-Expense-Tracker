import { useState } from "react";
import { NavLink } from "react-router-dom";
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
    label: "Add Expense",
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

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`relative flex min-h-screen flex-col bg-primary border-r border-white/10 text-secondary transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Collapse Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-4 top-8 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-primary shadow-lg"
      >
        {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      {/* Logo */}
      <div className="border-b border-white/10 px-7 py-8">
        {isOpen ? (
          <>
            <h1 className="text-3xl font-serif">Tally</h1>

            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/70">
              Expense Tracker
            </p>
          </>
        ) : (
          <h1 className="text-2xl font-serif text-center">T</h1>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6">
        {navItems.map(({ id, label, icon: Icon, to }) => (
          <NavLink
            key={id}
            to={to}
            className={({ isActive }) =>
              `
              relative flex items-center
              ${isOpen ? "gap-4 px-8 py-4" : "justify-center py-4"}
              transition-all duration-200

              ${
                isActive
                  ? "bg-white/8 border-l-2 border-white text-white"
                  : "border-l-2 border-transparent text-white/80 hover:bg-white/5 hover:text-white"
              }
            `
            }
          >
            <Icon size={18} strokeWidth={1.8} />

            {isOpen && <span className="text-lg font-medium">{label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-white/10 p-6">
        {isOpen && (
          <>
            <p className="text-sm uppercase tracking-widest text-white/70">
              Jane Doe
            </p>

            <p className="mb-5 text-sm text-white/60">jane@email.com</p>
          </>
        )}

        <button
          className={`flex items-center text-white/80 hover:text-white ${
            isOpen ? "gap-3" : "justify-center w-full"
          }`}
        >
          <LogOut size={18} />

          {isOpen && (
            <span className="text-sm uppercase tracking-wider">Log Out</span>
          )}
        </button>
      </div>
    </aside>
  );
}
