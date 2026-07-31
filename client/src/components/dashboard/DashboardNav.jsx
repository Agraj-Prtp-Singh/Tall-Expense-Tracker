import React from "react";

const user = [
  {
    name: "Jane Doe",
    email: "jane@email.com",
    month: "July",
  },
];

const DashboardNav = () => {
  return (
    <div className=" flex justify-between font-newsreader">
      {/* Header */}
      <div className="pl-8 pt-2">
        <h1 className="block text-[30px] font-semibold">
          Good Evening,
          {user.map((person) => (
            <span key={person.email}> {person.name}</span>
          ))}
        </h1>
        <p className="block text-[15.5px] text-[#75746E]">
          Here's what's happening with your money this{" "}
          {user.map((person) => (
            <span key={person.email}>{person.month}</span>
          ))}
        </p>
      </div>
      {/* Add expense button */}
      <div className="p-8">
        <button className="border w-fit p-4 font-inter bg-black text-white hover:bg-white hover:text-black">
          + Add Expense
        </button>
      </div>
    </div>
  );
};

export default DashboardNav;
