import React from "react";
import ExpenseNav from "../components/expense/ExpenseNav";
import SearchBar from "../components/expense/SearchBar";

const Expense = () => {
  return (
    <div>
      <ExpenseNav />
      <SearchBar />
    </div>
  );
};

export default Expense;
