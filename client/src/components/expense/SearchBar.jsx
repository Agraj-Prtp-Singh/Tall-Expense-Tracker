import React, { useState } from "react";
import { Search } from "lucide-react";
import { initialExpenses } from "../../data/expenses";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const filteredExpenses = initialExpenses.filter((initialExpenses) =>
    initialExpenses.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className=" mt-4 pl-7">
      <div className="flex items-center gap-3 w-full max-w-md border bg-[#F5F9FF] border-gray-200 rounded-xl px-4 py-3">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Expenses..."
          className="flex-1  outline-none text-sm placeholder:text-gray-400 bg-transparent"
        />
      </div>
      {filteredExpenses.map((initialExpenses) => (
        <div key={initialExpenses.id}>{initialExpenses.title}</div>
      ))}
    </div>
  );
};

export default SearchBar;
