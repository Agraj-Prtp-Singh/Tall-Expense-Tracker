import React from "react";

const features = [
  "TRACK every expense in seconds",
  "CATEGORIZE automatically with AI",
  "REPORT monthly trends, instantly",
];

const featureStyle = "text-[18px] font-ibmMono text-[#A9A8A2]";

const LeftPanel = () => {
  return (
    <div className="bg-primary w-3/5 min-h-screen flex flex-col justify-between px-8 py-10">
      {/* Logo & Name */}
      <div className="px-8">
        <h1 className="text-4xl text-secondary font-newsreader">Tally</h1>
        <p className="text-[18px] font-ibmMono text-[#A9A8A2]">
          AI EXPENSE TRACKER
        </p>
      </div>

      {/* Quote */}
      <blockquote className="p-8 text-3xl md:4xl lg:5xl text-secondary font-newsreader italic font-light">
        "Know where every rupee went — before
        <br />
        you have to ask."
      </blockquote>

      {/* Features */}
      <div className="space-y-3 p-8">
        {features.map((feature, index) => (
          <p key={index} className={featureStyle}>
            {String(index + 1).padStart(2, "0")} - {feature}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;
