const ProgressBar = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="mt-2 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
      <div
        className="h-full bg-black transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
