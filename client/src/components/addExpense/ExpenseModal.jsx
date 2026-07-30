import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";
import DatePicker from "react-datepicker";

const categories = [
  "Food & Dining",
  "Transport",
  "Shopping",
  "Bills & Utilities",
  "Entertainment",
  "Health",
  "Other",
];

const paymentMethods = ["Card", "Cash", "Bank Transfer", "UPI"];

export default function ExpenseModal({ onClose }) {
  const [expense, setExpense] = useState({
    amount: "",
    description: "",
    category: "Food & Dining",
    paymentMethod: "Card",
  });

  const [date, setDate] = useState(new Date());

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log({
      ...expense,
      date,
    });

    // axios.post(...)
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[720px] rounded-xl bg-white p-8 shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b pb-6">
          <h2 className="text-3xl font-semibold">New Expense</h2>

          <button onClick={onClose}>
            <IoClose size={28} />
          </button>
        </div>

        <form onSubmit={submitHandler} className="space-y-8 mt-8">
          {/* Amount */}

          <div>
            <label className="text-sm uppercase tracking-widest text-gray-500">
              Amount
            </label>

            <div className="mt-3 flex items-center justify-end border-b pb-4">
              <span className="text-6xl font-bold">$</span>

              <input
                type="number"
                step="0.01"
                name="amount"
                value={expense.amount}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full text-right text-6xl font-bold outline-none"
              />
            </div>
          </div>

          {/* Description */}

          <div>
            <label className="text-sm uppercase tracking-widest text-gray-500">
              Description
            </label>

            <input
              type="text"
              name="description"
              value={expense.description}
              onChange={handleChange}
              placeholder="e.g. Lunch at Cafe Luna"
              className="mt-3 w-full border-b pb-3 text-xl outline-none"
            />
          </div>

          {/* Category + Date */}

          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="text-sm uppercase tracking-widest text-gray-500">
                Category
              </label>

              <select
                name="category"
                value={expense.category}
                onChange={handleChange}
                className="mt-3 w-full border-b pb-3 text-xl outline-none"
              >
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm uppercase tracking-widest text-gray-500">
                Date
              </label>

              <div className="mt-3 flex items-center border-b pb-3">
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  className="w-full text-xl outline-none"
                />

                <FiCalendar size={22} />
              </div>
            </div>
          </div>

          {/* Payment */}

          <div>
            <label className="text-sm uppercase tracking-widest text-gray-500">
              Payment Method
            </label>

            <div className="mt-4 flex flex-wrap gap-3">
              {paymentMethods.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() =>
                    setExpense({
                      ...expense,
                      paymentMethod: item,
                    })
                  }
                  className={`rounded border px-5 py-2 transition

                  ${
                    expense.paymentMethod === item
                      ? "bg-black text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* AI Suggestion */}

          <div className="rounded-lg border p-5">
            <div className="flex gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-black text-white font-bold">
                AI
              </div>

              <p className="text-gray-700">
                Based on
                <strong> "Cafe Luna"</strong>, I suggest
                <strong> Food & Dining</strong>. Merchant recognized from your
                previous expenses.
              </p>
            </div>
          </div>

          {/* Footer */}

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded border px-10 py-3 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded bg-black px-10 py-3 text-white hover:bg-gray-800"
            >
              Save Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
