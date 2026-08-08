import React, { useState } from "react";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  const totalExpenses = expenses.length;

  // Stores the ID of the currently opened menu
  const [activeMenu, setActiveMenu] = useState(null);

  const handleEdit = (expense) => {
    // Close menu
    setActiveMenu(null);

    // Tell parent which expense should be edited
    onEdit(expense);
  };

  const handleDelete = (expense) => {
    setActiveMenu(null);

    onDelete(expense);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
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
            className="relative flex items-center justify-between border-b border-gray-100 px-6 py-5 transition last:border-b-0 hover:bg-gray-50"
          >
            {/* Left */}
            <div className="flex flex-1 items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                {Icon && <Icon size={22} className="text-gray-700" />}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">{expense.title}</h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
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
            <div className="hidden w-52 md:block">
              <p className="font-medium">{expense.paymentMethod}</p>

              <p className="text-sm text-gray-500">{expense.account}</p>
            </div>

            {/* Amount */}
            <div className="w-28 text-right">
              <p className="text-lg font-semibold">
                ${Number(expense.amount).toFixed(2)}
              </p>
            </div>

            {/* Menu */}
            <div className="relative ml-4">
              <button
                onClick={() =>
                  setActiveMenu(activeMenu === expense.id ? null : expense.id)
                }
                className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-black"
              >
                <MoreVertical size={18} />
              </button>

              {activeMenu === expense.id && (
                <div className="absolute right-0 top-12 z-50 w-40 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                  {/* Edit */}
                  <button
                    onClick={() => handleEdit(expense)}
                    className="flex w-full items-center gap-2 px-4 py-3 text-left hover:bg-gray-50"
                  >
                    <Pencil size={16} />

                    <span>Edit</span>
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(expense)}
                    className="flex w-full items-center gap-2 px-4 py-3 text-left text-red-600 hover:bg-red-50"
                  >
                    <Trash2 size={16} />

                    <span>Delete</span>
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
