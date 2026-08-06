import React, { useState } from "react";
import { Search, SlidersHorizontal, ArrowUpDown, Plus } from "lucide-react";
import { initialExpenses } from "../../data/expenses";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const filteredExpenses = initialExpenses.filter((expense) =>
    expense.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mt-4 px-7">
      {/* Top Controls */}
      <div className="flex items-center gap-4 flex-wrap">
        {/* Search */}
        <div className="flex items-center flex-1 min-w-[250px] border border-gray-200 bg-[#F5F9FF] rounded-xl px-4 py-3">
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
        <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-5 py-3 bg-white hover:bg-gray-50 transition">
          <SlidersHorizontal size={18} />
          <span className="text-sm font-medium">Filter</span>
        </button>

        {/* Sort */}
        <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-5 py-3 bg-white hover:bg-gray-50 transition">
          <ArrowUpDown size={18} />
          <span className="text-sm font-medium">Sort: Date (Newest)</span>
        </button>

        {/* Add Expense */}
        <button className="flex items-center gap-2 bg-black text-white rounded-xl px-6 py-3 hover:bg-gray-900 transition">
          <Plus size={18} />
          <span className="text-sm font-medium">Add Expense</span>
        </button>
      </div>

      {/* Search Results */}
      <div className="mt-6 space-y-2">
        {filteredExpenses.map((expense) => (
          <div
            key={expense.id}
            className="rounded-lg border border-gray-200 p-3"
          >
            {expense.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
