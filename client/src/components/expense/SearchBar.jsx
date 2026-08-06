import React from "react";
import { Search, SlidersHorizontal, ArrowUpDown, Plus } from "lucide-react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="mt-6 px-7">
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
    </div>
  );
};

export default SearchBar;
