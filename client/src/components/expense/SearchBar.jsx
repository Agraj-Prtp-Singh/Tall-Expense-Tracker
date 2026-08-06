import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  Plus,
  MoreVertical,
} from "lucide-react";
import { initialExpenses } from "../../data/expenses";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const filteredExpenses = initialExpenses.filter((expense) =>
    expense.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mt-6 px-7">
      {/* Top Controls */}
      <div className="flex items-center gap-4 flex-wrap">
        {/* Search */}
        <div className="flex items-center flex-1 min-w-[260px] border border-gray-200 bg-[#F8FAFC] rounded-xl px-4 py-3">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search expenses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 ml-3 bg-transparent outline-none text-sm placeholder:text-gray-400"
          />
        </div>

        {/* Filter */}
        <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-5 py-3 hover:bg-gray-50">
          <SlidersHorizontal size={18} />
          <span className="text-sm font-medium">Filter</span>
        </button>

        {/* Sort */}
        <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-5 py-3 hover:bg-gray-50">
          <ArrowUpDown size={18} />
          <span className="text-sm font-medium">Sort: Date (Newest)</span>
        </button>

        {/* Add Expense */}
        <button className="flex items-center gap-2 bg-black text-white rounded-xl px-6 py-3 hover:bg-neutral-800">
          <Plus size={18} />
          <span className="text-sm font-medium">Add Expense</span>
        </button>
      </div>

      {/* Expense List */}
      <div className="mt-7 border border-gray-200 rounded-2xl overflow-hidden bg-white">
        {filteredExpenses.map((expense) => {
          const Icon = expense.icon;

          return (
            <div
              key={expense.id}
              className="flex items-center justify-between px-6 py-5 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition"
            >
              {/* Left */}
              <div className="flex items-center gap-4 flex-1">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Icon size={22} className="text-gray-700" />
                </div>

                {/* Expense Details */}
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

                    {/* Tags */}
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

export default SearchBar;
