import React from "react";
import { MoreVertical } from "lucide-react";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="mt-7 px-7">
      <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
        {expenses.map((expense) => {
          const Icon = expense.icon;

          return (
            <div
              key={expense.id}
              className="flex items-center justify-between px-6 py-5 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition"
            >
              {/* Left */}
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Icon size={22} className="text-gray-700" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {expense.title}
                  </h3>

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

                    {expense.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="ml-2 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
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
              <button className="ml-4 text-gray-500 hover:text-black">
                <MoreVertical size={18} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseList;
