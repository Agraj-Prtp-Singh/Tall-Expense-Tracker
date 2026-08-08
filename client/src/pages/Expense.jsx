import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import SearchBar from "../components/expense/SearchBar";
import ExpenseNav from "../components/expense/ExpenseNav";
import ExpenseList from "../components/expense/ExpenseList";
import ExpenseDrawer from "../components/expense/ExpenseDrawer";

import { useExpenses } from "../context/ExpenseContext";

const Expense = () => {
  const { expenses, updateExpense, deleteExpense } = useExpenses();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("newest");

  const [selectedExpense, setSelectedExpense] = useState(null);

  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    account: "Personal Checking",
    paymentMethod: "Card",
    notes: "",
    tags: [],
    receipt: null,
  });

  // Open drawer
  const openDrawer = (expense) => {
    setSelectedExpense(expense);

    setForm({
      ...expense,
      amount: expense.amount ?? "",
      notes: expense.notes ?? "",
      tags: expense.tags ?? [],
      receipt: expense.receipt ?? null,
      account: expense.account ?? "Personal Checking",
      paymentMethod: expense.paymentMethod ?? "Card",
    });
  };

  // Close drawer
  const closeDrawer = () => {
    setSelectedExpense(null);
  };

  // Save edited expense
  const saveExpense = () => {
    const updatedExpense = {
      ...form,
      amount: Number(form.amount),
    };

    updateExpense(updatedExpense);

    closeDrawer();
  };

  // Delete expense
  const handleDelete = () => {
    deleteExpense(form.id);

    closeDrawer();
  };

  // Search + filter + sort
  const filteredExpenses = [...expenses]
    .filter((expense) =>
      expense.title.toLowerCase().includes(search.toLowerCase()),
    )

    .filter((expense) =>
      filter === "All" ? true : expense.category === filter,
    )

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

      <ExpenseList
        expenses={filteredExpenses}
        onEdit={openDrawer}
        onDelete={deleteExpense}
      />

      <AnimatePresence>
        {selectedExpense && (
          <ExpenseDrawer
            form={form}
            setForm={setForm}
            onClose={closeDrawer}
            onSave={saveExpense}
            onDelete={handleDelete}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Expense;
