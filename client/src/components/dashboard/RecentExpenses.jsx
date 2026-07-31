import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ExpenseItem from "./ExpenseItem.jsx";
import ExpenseDrawer from "./ExpenseDrawer.jsx";

const initialExpenses = [
  {
    id: 1,
    title: "Whole Foods Market",
    amount: 64.2,
    category: "Groceries",
    paymentMethod: "Card",
    account: "Personal Checking",
    date: "2026-07-30T18:40:00",
    notes: "Weekly grocery shopping.",
    tags: ["groceries", "essentials"],
    receipt: "",
    section: "Today",
  },
  {
    id: 2,
    title: "Uber Trip",
    amount: 18.5,
    category: "Transport",
    paymentMethod: "Card",
    account: "Personal Checking",
    date: "2026-07-30T14:15:00",
    notes: "Ride back from college.",
    tags: ["travel"],
    receipt: "",
    section: "Today",
  },
  {
    id: 3,
    title: "Netflix Subscription",
    amount: 15.99,
    category: "Subscriptions",
    paymentMethod: "Card",
    account: "Personal Checking",
    date: "2026-07-29T09:02:00",
    notes: "Monthly subscription.",
    tags: ["entertainment"],
    receipt: "",
    section: "Yesterday",
  },
  {
    id: 4,
    title: "Cafe Luna",
    amount: 12.75,
    category: "Food & Dining",
    paymentMethod: "Cash",
    account: "Wallet",
    date: "2026-07-29T13:10:00",
    notes: "Coffee with friends.",
    tags: ["coffee"],
    receipt: "",
    section: "Yesterday",
  },
  {
    id: 5,
    title: "Shell Gas Station",
    amount: 41.3,
    category: "Transport",
    paymentMethod: "Card",
    account: "Personal Checking",
    date: "2026-07-26T08:20:00",
    notes: "Fuel refill.",
    tags: ["fuel"],
    receipt: "",
    section: "This Week",
  },
  {
    id: 6,
    title: "Trader Joe's",
    amount: 52.1,
    category: "Groceries",
    paymentMethod: "UPI",
    account: "Savings",
    date: "2026-07-25T17:45:00",
    notes: "Bought fruits and vegetables.",
    tags: ["groceries"],
    receipt: "",
    section: "This Week",
  },
];

export default function RecentExpenses() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const [selectedExpense, setSelectedExpense] = useState(null);

  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    account: "Personal Checkingsss",
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
