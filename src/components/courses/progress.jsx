import React from "react";

const Progress = ({ progress, colorClass = "bg-blue-500" }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        className={`${colorClass} h-2 rounded-full transition-all duration-500 ease-out shadow-sm`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default Progress;
