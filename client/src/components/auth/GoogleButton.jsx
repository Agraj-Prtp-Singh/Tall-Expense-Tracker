import React from "react";

const GoogleButton = () => {
  return (
    <button
      onClick={() => alert("Feature Coming Soon")}
      type="button"
      className="
        w-full
        border
        border-gray-400
        py-3
        text-lg
        font-semibold
        transition
        duration-200
        hover:bg-primary
        hover:text-secondary
        cursor-pointer
        
      "
    >
      Continue with Google
    </button>
  );
};

export default GoogleButton;
