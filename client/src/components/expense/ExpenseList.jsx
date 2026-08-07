import React, { useState } from "react";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";

const ExpenseList = ({ expenses }) => {
  const totalExpenses = expenses.length;

  // Stores the ID of the currently opened menu
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <div>
          <h2 className="text-xl font-semibold">Expense History</h2>
          <p className="text-sm text-gray-500">{totalExpenses} expenses</p>
        </div>
      </div>

      {/* Expenses */}
      {expenses.map((expense) => {
        const Icon = expense.icon;

        return (
          <div
            key={expense.id}
            className="relative flex items-center justify-between px-6 py-5 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition"
          >
            {/* Left */}
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Icon size={22} className="text-gray-700" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">{expense.title}</h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <span>{expense.category}</span>

                  <span>•</span>

                  <span>
                    {new Date(expense.date).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="hidden md:block w-52">
              <p className="font-medium">{expense.paymentMethod}</p>
              <p className="text-sm text-gray-500">{expense.account}</p>
            </div>

            {/* Amount */}
            <div className="w-28 text-right">
              <p className="text-lg font-semibold">
                ${expense.amount.toFixed(2)}
              </p>
            </div>

            {/* Menu */}
            <div className="relative ml-4">
              <button
                onClick={() =>
                  setActiveMenu(activeMenu === expense.id ? null : expense.id)
                }
                className="text-gray-500 hover:text-black p-2 rounded-lg hover:bg-gray-100"
              >
                <MoreVertical size={18} />
              </button>

              {activeMenu === expense.id && (
                <div className="absolute right-0 top-12 w-40 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                  <button className="w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-50">
                    <Pencil size={16} />
                    Edit
                  </button>

                  <button className="w-full flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50">
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseList;
