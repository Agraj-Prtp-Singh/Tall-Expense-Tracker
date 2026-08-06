import { motion } from "framer-motion";
import { Paperclip, CalendarDays, X } from "lucide-react";
import { categories } from "../../data/categories";

const paymentMethods = ["Card", "Cash", "Bank Transfer", "UPI"];

export default function ExpenseDrawer({
  form,
  setForm,
  onClose,
  onSave,
  onDelete,
}) {
  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black"
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.35 }}
        className="fixed right-0 top-0 z-50 h-screen w-[490px] overflow-y-auto bg-[#faf9f7] shadow-2xl"
      >
        {/* Header */}
        <div className="border-b border-neutral-300 px-10 pt-8 pb-7">
          <div className="flex items-start justify-between">
            <h2 className="text-[44px] font-serif leading-none">
              {form.title || "Expense"}
            </h2>

            <button
              onClick={onClose}
              className="text-neutral-500 transition hover:text-black"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mt-10 flex gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                Created
              </p>

              <p className="mt-1 text-[15px]">{new Date().toLocaleString()}</p>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                Last Edited
              </p>

              <p className="mt-1 text-[15px]">{new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="px-10 py-8">
          {/* Amount */}
          <div>
            <input
              type="number"
              step="0.01"
              value={form.amount}
              onChange={(e) =>
                setForm({
                  ...form,
                  amount: e.target.value,
                })
              }
              className="
    w-full
    bg-transparent
    border-none
    outline-none
    p-0
    font-mono
    text-6xl
    font-bold
    tracking-tight
  "
            />

            <div className="mt-6 border-b border-black" />
          </div>

          {/* Description */}
          <div className="mt-8">
            <label className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
              Description
            </label>

            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="mt-2 w-full border border-neutral-400 bg-white px-2 py-1 outline-none"
            />
          </div>

          {/* Category + Date */}
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <label className="text-[14px]">Category</label>

              <select
                className="w-full border border-neutral-500 bg-white px-2 py-2 outline-none"
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value,
                  })
                }
              >
                {" "}
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[14px]">Date</label>

              <div className="relative mt-3">
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      date: e.target.value,
                    })
                  }
                  className="w-full border border-neutral-500 bg-white px-2 py-2 outline-none"
                />

                <CalendarDays
                  size={18}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>

          {/* Account + Payment */}
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <label className="text-[14px]">Account</label>

              <input
                value={form.account || "Personal Checking"}
                onChange={(e) =>
                  setForm({
                    ...form,
                    account: e.target.value,
                  })
                }
                className="mt-3 w-full border-b border-black bg-transparent py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-[14px]">Payment Method</label>

              <div className="mt-3 flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <button
                    key={method}
                    onClick={() =>
                      setForm({
                        ...form,
                        paymentMethod: method,
                      })
                    }
                    className={`border px-4 py-2 text-sm transition ${
                      form.paymentMethod === method
                        ? "border-black bg-black text-white"
                        : "border-neutral-400 bg-white"
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-10">
            <label className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
              Notes
            </label>

            <textarea
              rows={4}
              value={form.notes || ""}
              onChange={(e) =>
                setForm({
                  ...form,
                  notes: e.target.value,
                })
              }
              placeholder="Add any extra context (optional)"
              className="mt-3 w-full resize-none border border-neutral-300 bg-white p-4 outline-none"
            />
          </div>

          {/* Receipt */}
          <div className="mt-10">
            <label className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
              Receipt Attachment
            </label>

            <label className="mt-3 flex h-16 cursor-pointer items-center justify-center gap-3 border border-dashed border-neutral-500 bg-white">
              <Paperclip size={18} />

              <span className="text-sm text-neutral-500">
                Click to attach a receipt image or PDF
              </span>

              <input type="file" className="hidden" />
            </label>
          </div>

          {/* Tags */}
          <div className="mt-10">
            <div className="flex items-center gap-2">
              <label className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                Tags
              </label>

              <span className="text-xs text-neutral-500">optional</span>
            </div>

            <div className="mt-3 flex gap-3">
              <input
                placeholder="Add a tag and press Enter"
                className="flex-1 border-b border-black bg-transparent py-2 outline-none"
              />

              <button className="border border-black px-6">Add</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex items-center justify-between border-t bg-[#faf9f7] px-8 py-6">
          <button
            onClick={onDelete}
            className="border border-red-500 px-5 py-3 text-red-500 transition hover:bg-red-50"
          >
            Delete
          </button>

          <div className="flex gap-3">
            <button onClick={onClose} className="border px-5 py-3">
              Cancel
            </button>

            <button onClick={onSave} className="bg-black px-5 py-3 text-white">
              Save
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
