import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

const categories = [
  {
    id: 1,
    name: "Food & Dining",
    amount: 614,
  },
  {
    id: 2,
    name: "Transport",
    amount: 402,
  },
  {
    id: 3,
    name: "Shopping",
    amount: 318,
  },
  {
    id: 4,
    name: "Bills & Utilities",
    amount: 510,
  },
  {
    id: 5,
    name: "Subscriptions",
    amount: 304,
  },
  {
    id: 6,
    name: "Entertainment",
    amount: 220,
  },
  {
    id: 7,
    name: "Health",
    amount: 180,
  },
];

const totalSpent = categories.reduce(
  (total, category) => total + category.amount,
  0,
);

const INITIAL_VISIBLE = 3;

const SpendByCategory = () => {
  const [expanded, setExpanded] = useState(false);

  const visibleCategories = expanded
    ? categories
    : categories.slice(0, INITIAL_VISIBLE);

  return (
    <div className="w-full max-w-md border rounded border-gray-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
        <h2 className="text-[16px] font-semibold text-black">
          Spend by category
        </h2>

        {categories.length > INITIAL_VISIBLE && (
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="text-sm font-ibmMono text-gray-500 transition hover:text-black"
          >
            {expanded ? "Show less ←" : "Show more →"}
          </button>
        )}
      </div>

      <AnimatePresence initial={false}>
        {visibleCategories.map((category) => (
          <motion.div
            key={category.id}
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-gray-200 last:border-b-0"
          >
            <div className="px-6 py-5">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-lg font-medium text-black">
                  {category.name}
                </p>

                <span className="text-lg text-gray-500">
                  ${category.amount}
                </span>
              </div>

              <ProgressBar value={category.amount} max={totalSpent} />

              <p className="mt-2 text-sm text-gray-500">
                {((category.amount / totalSpent) * 100).toFixed(1)}% of total
                spending
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SpendByCategory;
