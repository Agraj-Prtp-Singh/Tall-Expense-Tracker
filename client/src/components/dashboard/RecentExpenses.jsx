import { useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, X } from "lucide-react";

const initialExpenses = [
  {
    id: 1,
    title: "Whole Foods Market",
    category: "Groceries",
    date: "Today, 6:40 PM",
    amount: 64.2,
    color: "bg-black",
  },
  {
    id: 2,
    title: "Uber Trip",
    category: "Transport",
    date: "Today, 2:15 PM",
    amount: 18.5,
    color: "bg-neutral-500",
  },
  {
    id: 3,
    title: "Netflix Subscription",
    category: "Subscriptions",
    date: "Yesterday",
    amount: 15.99,
    color: "bg-neutral-300",
  },
  {
    id: 4,
    title: "Cafe Luna",
    category: "Food & Dining",
    date: "Yesterday",
    amount: 12.75,
    color: "bg-black",
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
        <h2 className="text-[18px] font-semibold text-black">
          Recent expenses
        </h2>

        <Link
          to="#"
          className="font-mono text-[14px] text-neutral-600 transition hover:text-black"
        >
          View all →
        </Link>
      </div>

      {/* Expenses */}
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="flex items-center justify-between border-b border-neutral-200 px-6 py-5 last:border-none"
        >
          {/* Left */}
          <div className="flex items-center gap-4">
            <span
              className={`h-3.5 w-3.5 shrink-0 rounded-full ${expense.color}`}
            />

            {editingId === expense.id ? (
              <div className="space-y-2">
                <input
                  className="block w-full rounded border border-neutral-300 px-3 py-2 text-[14px] outline-none focus:border-black"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />

                <input
                  className="block w-full rounded border border-neutral-300 px-3 py-2 text-[14px] outline-none focus:border-black"
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                />

                <input
                  className="block w-full rounded border border-neutral-300 px-3 py-2 text-[14px] outline-none focus:border-black"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />

                <input
                  type="number"
                  className="block w-full rounded border border-neutral-300 px-3 py-2 text-[14px] outline-none focus:border-black"
                  value={form.amount}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      amount: Number(e.target.value),
                    })
                  }
                />

                <button
                  onClick={saveEdit}
                  className="rounded bg-black px-4 py-2 text-[14px] text-white transition hover:bg-neutral-800"
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-[16px] font-semibold leading-none text-black">
                  {expense.title}
                </h3>

                <p className="mt-1 text-[14px] text-neutral-500">
                  {expense.category} • {expense.date}
                </p>
              </div>
            )}
          </div>

          {/* Right */}
          {editingId !== expense.id && (
            <div className="flex items-center gap-3">
              <h4 className="w-24 text-right font-mono text-[18px] font-semibold text-black">
                $
                {expense.amount.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </h4>

              <button
                onClick={() => startEdit(expense)}
                className="flex h-10 w-10 items-center justify-center border border-neutral-200 transition hover:bg-neutral-100"
              >
                <Pencil size={16} strokeWidth={1.8} />
              </button>

              <button
                onClick={() => deleteExpense(expense.id)}
                className="flex h-10 w-10 items-center justify-center border border-neutral-200 transition hover:bg-red-50 hover:text-red-500"
              >
                <X size={18} strokeWidth={1.8} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
