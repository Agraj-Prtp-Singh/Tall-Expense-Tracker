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
      {/* Text Part */}
      <div className="p-8 ">
        <p className="block text-[30px] ">
          Good Evening,
          {user.map((person) => (
            <span key={person.email}> {person.name}</span>
          ))}
        </p>
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
