import React, { useState } from "react";
import SearchBar from "../components/expense/SearchBar";
import ExpenseNav from "../components/expense/ExpenseNav";
import ExpenseList from "../components/expense/ExpenseList";
import { initialExpenses } from "../data/expenses";

const Expenses = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("newest");

  const filteredExpenses = [...initialExpenses]
    // Search
    .filter((expense) =>
      expense.title.toLowerCase().includes(search.toLowerCase()),
    )

    // Category Filter
    .filter((expense) =>
      filter === "All" ? true : expense.category === filter,
    )

    // Sort
    .sort((a, b) => {
      switch (sort) {
        case "newest":
          return new Date(b.date) - new Date(a.date);

        case "oldest":
          return new Date(a.date) - new Date(b.date);

        case "high":
          return b.amount - a.amount;

        case "low":
          return a.amount - b.amount;

        case "az":
          return a.title.localeCompare(b.title);

        case "za":
          return b.title.localeCompare(a.title);

        default:
          return 0;
      }
    });

  return (
    <>
      <ExpenseNav />

      <SearchBar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

      <ExpenseList expenses={filteredExpenses} />
    </>
  );
};

export default Expenses;
