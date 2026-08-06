import React, { useState } from "react";
import SearchBar from "../components/expense/SearchBar";
import ExpenseNav from "../components/expense/ExpenseNav";
import ExpenseList from "../components/expense/ExpenseList";
import { initialExpenses } from "../data/expenses";

const Expenses = () => {
  const [search, setSearch] = useState("");

  const filteredExpenses = initialExpenses.filter((expense) =>
    expense.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <ExpenseNav />
      <SearchBar search={search} setSearch={setSearch} />

      <ExpenseList expenses={filteredExpenses} />
    </>
  );
};

export default Expenses;
