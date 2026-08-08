import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ExpenseItem from "./ExpenseItem.jsx";
import ExpenseDrawer from "./ExpenseDrawer.jsx";
import { initialExpenses } from "../../data/expenses.js";
import { useExpenses } from "../../context/ExpenseContext";

export default function RecentExpenses() {
  const {
    expenses,
    updateExpense,
    deleteExpense: removeExpense,
  } = useExpenses();
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

  const closeDrawer = () => {
    setSelectedExpense(null);
  };

  const saveExpense = () => {
    const updatedExpense = {
      ...form,
      amount: Number(form.amount),
    };

    updateExpense(updatedExpense);

    closeDrawer();
  };

  const deleteExpense = () => {
    removeExpense(form.id);

    closeDrawer();
  };

  // Sort newest first and keep only latest 5
  const recentExpenses = [...expenses]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  // Get unique section names in order
  const sections = [
    ...new Set(recentExpenses.map((expense) => expense.section)),
  ];

  return (
    <>
      <div className="overflow-hidden rounded-md border border-neutral-200 bg-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
          <h2 className="text-lg font-semibold">Recent expenses</h2>

          <Link
            to="/expenses"
            className="text-sm text-neutral-500 transition hover:text-black"
          >
            View all →
          </Link>
        </div>

        {/* Recent Expense Groups */}
        {sections.map((section) => (
          <div key={section}>
            <div className="bg-neutral-50 px-6 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                {section}
              </p>
            </div>

            {recentExpenses
              .filter((expense) => expense.section === section)
              .map((expense) => (
                <ExpenseItem
                  key={expense.id}
                  expense={expense}
                  onClick={() => openDrawer(expense)}
                />
              ))}
          </div>
        ))}
      </div>

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
}
