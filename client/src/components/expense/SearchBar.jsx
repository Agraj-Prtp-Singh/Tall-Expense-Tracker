import React, { useState } from "react";
import { Search, SlidersHorizontal, ArrowUpDown, Plus } from "lucide-react";
import { categories } from "../../data/categories";

const SearchBar = ({ search, setSearch, filter, setFilter, sort, setSort }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);

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
        <div className="relative">
          <button
            onClick={() => {
              setShowFilter(!showFilter);
              setShowSort(false);
            }}
            className="flex items-center gap-2 border border-gray-200 rounded-xl px-5 py-3 hover:bg-gray-50"
          >
            <SlidersHorizontal size={18} />
            <span className="text-sm font-medium">
              {filter === "All" ? "All Categories" : filter}
            </span>
          </button>

          {showFilter && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl border bg-white shadow-lg z-50">
              <button
                onClick={() => {
                  setFilter("All");
                  setShowFilter(false);
                }}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100"
              >
                All Categories
              </button>

              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setFilter(category.name);
                    setShowFilter(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Sort */}
        <div className="relative">
          <button
            onClick={() => {
              setShowSort(!showSort);
              setShowFilter(false);
            }}
            className="flex items-center gap-2 border border-gray-200 rounded-xl px-5 py-3 hover:bg-gray-50"
          >
            <ArrowUpDown size={18} />
            <span className="text-sm font-medium">Sort</span>
          </button>

          {showSort && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl border bg-white shadow-lg z-50">
              <button
                onClick={() => {
                  setSort("newest");
                  setShowSort(false);
                }}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100"
              >
                Date (Newest)
              </button>

              <button
                onClick={() => {
                  setSort("oldest");
                  setShowSort(false);
                }}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100"
              >
                Date (Oldest)
              </button>

              <button
                onClick={() => {
                  setSort("high");
                  setShowSort(false);
                }}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100"
              >
                Amount (High → Low)
              </button>

              <button
                onClick={() => {
                  setSort("low");
                  setShowSort(false);
                }}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100"
              >
                Amount (Low → High)
              </button>

              <button
                onClick={() => {
                  setSort("az");
                  setShowSort(false);
                }}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100"
              >
                Title (A-Z)
              </button>

              <button
                onClick={() => {
                  setSort("za");
                  setShowSort(false);
                }}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100"
              >
                Title (Z-A)
              </button>
            </div>
          )}
        </div>

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
