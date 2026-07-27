import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const labelStyle = "block text-[15px] font-ibmMono text-[#75746E] uppercase";

const inputStyle =
  "mt-2 block w-full border-b border-gray-400 bg-transparent py-3 text-lg outline-none placeholder:text-gray-400 focus:border-primary";

const RegisterForm = () => {
  return (
    <div className="p-8">
      <form className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="email" className={labelStyle}>
            Full Name
          </label>

          <input
            id="full-name"
            type="text"
            name="text"
            placeholder="john doe"
            className={inputStyle}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelStyle}>
            Email Address
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@email.com"
            autoComplete="email"
            className={inputStyle}
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className={labelStyle}>
            Password
          </label>

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Min. 6 characters"
            autoComplete="current-password"
            className={inputStyle}
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-primary py-4 text-secondary font-semibold text-xl transition hover:bg-secondary hover:text-primary border cursor-pointer"
        >
          Register
        </button>

        <Divider />

        <GoogleButton />

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <button
            type="button"
            className="font-semibold hover:underline cursor-pointer"
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
