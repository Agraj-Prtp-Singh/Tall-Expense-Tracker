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
];

// Total spent this month
const totalSpent = categories.reduce(
  (total, category) => total + category.amount,
  0,
);

const SpendByCategory = () => {
  return (
    <div className="w-full max-w-md border border-gray-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
        <h2 className="text-[16px] font-semibold text-black">
          Spend by category
        </h2>

        <button className="text-sm font-ibmMono text-gray-500 transition hover:text-black">
          Manage →
        </button>
      </div>

      {/* Categories */}
      {categories.map((category) => (
        <div
          key={category.id}
          className="border-b border-gray-200 px-6 py-5 last:border-b-0"
        >
          <div className="mb-2 flex items-center justify-between">
            <p className="text-lg font-medium text-black">{category.name}</p>

            <span className="text-lg text-gray-500">${category.amount}</span>
          </div>

          <ProgressBar value={category.amount} max={totalSpent} />

          <p className="mt-2 text-sm text-gray-500">
            {((category.amount / totalSpent) * 100).toFixed(1)}% of total
            spending
          </p>
        </div>
      ))}
    </div>
  );
};

export default SpendByCategory;
