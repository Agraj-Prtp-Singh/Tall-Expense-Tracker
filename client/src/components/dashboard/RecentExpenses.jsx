import { useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const initialExpenses = [
  {
    id: 1,
    title: "Whole Foods Market",
    category: "Groceries",
    date: "Today, 6:40 PM",
    amount: 64.2,
  },
  {
    id: 2,
    title: "Uber Trip",
    category: "Transport",
    date: "Today, 2:15 PM",
    amount: 18.5,
  },
  {
    id: 3,
    title: "Netflix Subscription",
    category: "Subscriptions",
    date: "Yesterday",
    amount: 15.99,
  },
  {
    id: 4,
    title: "Cafe Luna",
    category: "Food & Dining",
    date: "Yesterday",
    amount: 12.75,
  },
];

export default function RecentExpenses() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({});

  const startEdit = (expense) => {
    setEditingId(expense.id);
    setForm({ ...expense });
  };

  const saveEdit = () => {
    setExpenses((prev) =>
      prev.map((item) => (item.id === editingId ? form : item)),
    );
    setEditingId(null);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full overflow-hidden rounded-md border border-neutral-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
        <h2 className="text-[18px] font-semibold">Recent expenses</h2>

        <Link
          to="#"
          className="font-mono text-[14px] text-neutral-600 transition hover:text-black"
        >
          View all →
        </Link>
      </div>

      {expenses.map((expense) => (
        <AnimatePresence mode="wait" key={expense.id}>
          {editingId === expense.id ? (
            <motion.div
              key="edit"
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="border-b border-neutral-200 bg-neutral-50 p-8 last:border-none"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Edit Expense</h3>

                <p className="mt-1 text-sm text-neutral-500">
                  Modify the expense details below.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    Title
                  </label>

                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    className="w-full rounded-lg border border-neutral-300 px-5 py-3 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    Category
                  </label>

                  <input
                    type="text"
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                    className="w-full rounded-lg border border-neutral-300 px-5 py-3 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    Date
                  </label>

                  <input
                    type="text"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-lg border border-neutral-300 px-5 py-3 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    Amount
                  </label>

                  <input
                    type="number"
                    value={form.amount}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        amount: Number(e.target.value),
                      })
                    }
                    className="w-full rounded-lg border border-neutral-300 px-5 py-3 outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-4 border-t border-neutral-200 pt-6">
                <button
                  onClick={() => setEditingId(null)}
                  className="rounded-lg border border-neutral-300 px-5 py-2.5 hover:bg-neutral-100"
                >
                  Cancel
                </button>

                <button
                  onClick={saveEdit}
                  className="rounded-lg bg-black px-5 py-2.5 text-white hover:bg-neutral-800"
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-between border-b border-neutral-200 px-6 py-5 last:border-none"
            >
              <div>
                <h3 className="text-[16px] font-semibold">{expense.title}</h3>

                <p className="mt-1 text-[14px] text-neutral-500">
                  {expense.category} • {expense.date}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <h4 className="w-24 text-right font-mono text-[18px] font-semibold">
                  $
                  {expense.amount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </h4>

                <button
                  onClick={() => startEdit(expense)}
                  className="flex h-10 w-10 items-center justify-center border border-neutral-200 hover:bg-neutral-100"
                >
                  <Pencil size={16} />
                </button>

                <button
                  onClick={() => deleteExpense(expense.id)}
                  className="flex h-10 w-10 items-center justify-center border border-neutral-200 hover:bg-red-50 hover:text-red-500"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
}
