import React from "react";
const steps = [
  "Issue Details",
  "Location & Evidence",
  "Personal Details",
  "Review"
];

const ProgressBar = ({ step }) => {
  return (
    <>
      <div className="flex justify-around mb-2">
        {steps.map((item, index) => (
          <div
            key={index}
            className={`text-sm font-semibold ${
              step >= index + 1
                ? "text-[#003893]"
                : "text-gray-400"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex mb-10">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`flex-1 h-2 mx-1 rounded-full ${
              step >= index + 1
                ? "bg-[#003893]"
                : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default ProgressBar;