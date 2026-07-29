const ProgressBar = ({ value = 0, max = 100 }) => {
  const percentage =
    max > 0 ? Math.max(0, Math.min((value / max) * 100, 100)) : 0;

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100"
    >
      <div
        className="h-full bg-black transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
