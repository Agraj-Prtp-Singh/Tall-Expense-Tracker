import React from "react";

const ExpenseNav = () => {
  return (
    <div className="flex justify-between font-newsreader">
      {/* Header*/}
      <div className="pl-8 pt-2">
        <h1 className="block text-[30px] font-semibold">Expenses</h1>
        <p className="block text-[15.5px] text-[#75746E]">
          Manage and Review all your transactions
        </p>
      </div>
    </div>
  );
};

export default ExpenseNav;
