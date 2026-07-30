import { ChevronRight } from "lucide-react";

export default function ExpenseItem({ expense, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center justify-between border-b border-neutral-200 bg-white px-6 py-5 text-left transition hover:bg-neutral-50"
    >
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Status Dot */}
        <div className="h-3 w-3 rounded-full bg-black" />

        <div>
          <h3 className="text-[17px] font-medium text-black">
            {expense.title}
          </h3>

          <p className="mt-1 text-[15px] text-neutral-500">
            {expense.category}
            <span className="mx-2">•</span>
            {expense.date}
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        <p className="font-mono text-[18px] font-semibold">
          $
          {expense.amount.toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}
        </p>

        <ChevronRight
          size={18}
          className="text-neutral-400 transition group-hover:translate-x-1"
        />
      </div>
    </button>
  );
}
