import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ExpenseItem from "./ExpenseItem.jsx";
import ExpenseDrawer from "./ExpenseDrawer.jsx";

const initialExpenses = [
  {
    id: 1,
    title: "Whole Foods Market",
    category: "Groceries",
    date: "Today, 6:40 PM",
    amount: 64.2,
    section: "Today",
  },
  {
    id: 2,
    title: "Uber Trip",
    category: "Transport",
    date: "Today, 2:15 PM",
    amount: 18.5,
    section: "Today",
  },
  {
    id: 3,
    title: "Netflix Subscription",
    category: "Subscriptions",
    date: "Yesterday, 9:02 AM",
    amount: 15.99,
    section: "Yesterday",
  },
  {
    id: 4,
    title: "Cafe Luna",
    category: "Food & Dining",
    date: "Yesterday, 1:10 PM",
    amount: 12.75,
    section: "Yesterday",
  },
  {
    id: 5,
    title: "Shell Gas Station",
    category: "Transport",
    date: "Jul 26 8:20 AM",
    amount: 41.3,
    section: "This Week",
  },
  {
    id: 6,
    title: "Trader Joe's",
    category: "Groceries",
    date: "Jul 25 5:45 PM",
    amount: 52.1,
    section: "This Week",
  },
];

export default function RecentExpenses() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const [selectedExpense, setSelectedExpense] = useState(null);

  const [form, setForm] = useState({});

  const openDrawer = (expense) => {
    setSelectedExpense(expense);
    setForm({ ...expense });
  };

  const closeDrawer = () => {
    setSelectedExpense(null);
  };

  const saveExpense = () => {
    setExpenses((prev) =>
      prev.map((expense) => (expense.id === form.id ? form : expense)),
    );

    closeDrawer();
  };

  const deleteExpense = () => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== form.id));

    closeDrawer();
  };

  const sections = ["Today", "Yesterday", "This Week"];

  return (
    <>
      <div className="overflow-hidden rounded-md border border-neutral-200 bg-white">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
          <h2 className="text-lg font-semibold">Recent expenses</h2>

          <Link
            to="#"
            className="text-sm text-neutral-500 transition hover:text-black"
          >
            View all →
          </Link>
        </div>

        {/* Expense Groups */}

        {sections.map((section) => (
          <div key={section}>
            <div className="bg-neutral-50 px-6 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                {section}
              </p>
            </div>

            {expenses
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
