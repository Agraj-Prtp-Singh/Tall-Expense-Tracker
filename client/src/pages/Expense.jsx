import React, { useState } from "react";
import SearchBar from "../components/expense/SearchBar";
import ExpenseNav from "../components/expense/ExpenseNav";
import ExpenseList from "../components/expense/ExpenseList";
import { AnimatePresence } from "framer-motion";

import { initialExpenses } from "../data/expenses";

const Expenses = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("newest");

  // Currently Selected Expenses
  const [selectedExpense, setSelectedExpense] = useState(null);

  //Drawer form state

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

  const openDrawer = (expense) => {
    setSelectedExpense(expense);
    setForm({ ...expense });
  };

  const closeDrawer = () => {
    setSelectedExpense(null);
  };

  // Save Expenses

  const saveExpense = () => {
    const updatedExpense = {
      ...form,
      amount: Number(form.amount),
    };

    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense,
      ),
    );

    closeDrawer();
    /*
      LATER WITH BACKEND:

      await fetch(`/api/expenses/${updatedExpense.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedExpense),
      });

      Then update local state after successful response.
    */
  };

  // Delete Expenses
  const deleteExpense = () => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== form.id),
    );

    closeDrawer();

    /*
      LATER WITH BACKEND:

      await fetch(`/api/expenses/${form.id}`, {
        method: "DELETE",
      });
    */
  };

  // Filter + Search + Sort

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

      <ExpenseList
        expenses={filteredExpenses}
        onEdit={openDrawer}
        onDelete={(expense) => {
          setExpenses((prevExpenses) =>
            prevExpenses.filter((item) => item.id !== expense.id),
          );
        }}
      />

      {/* Reusable Expense Drawer */}
      <AnimatePresence>
        {selectedExpense && (
          <ExpenseDrawer
            form={form}
            setForm={setForm}
            onClose={closeDrawer}
            onSave={saveExpense}
            onDelete={deleteExpense}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Expenses;
