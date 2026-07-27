import React, { act, useState } from "react";
import AuthToggle from "./AuthToggle";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const RightPanel = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="bg-secondary w-2/5 min-h-screen px-8 py-10">
      <div>
        <AuthToggle activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab == "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default RightPanel;
