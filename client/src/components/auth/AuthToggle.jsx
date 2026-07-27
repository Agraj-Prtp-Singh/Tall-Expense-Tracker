import React, { useState } from "react";

const AuthToggle = () => {
  const [active, setActive] = useState("login");

  return (
    <div>
      {/* Login-Register Toggle*/}
      <div className="p-8">
        <div className="flex w-fit overflow-hidden border rounded border-black">
          <button
            onClick={() => setActive("login")}
            className={`px-6 py-5 text-[15px] font-ibmMono transition-colors duration-200  cursor-pointer ${
              active === "login"
                ? "bg-primary text-secondary"
                : "bg-secondary text-[#75746E]"
            }`}
          >
            LOG IN
          </button>
          <button
            onClick={() => setActive("register")}
            className={`px-6 py-5 text-[15px] font-ibmMono transition-colors duration-200 cursor-pointer ${
              active === "register"
                ? "bg-primary text-secondary"
                : "bg-secondary text-[#75746E]"
            }`}
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthToggle;
