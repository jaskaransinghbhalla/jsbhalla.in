import React from "react";

const Progress = ({ progress }) => {
  const getStatusColorClass = (progress) => {
    switch (progress) {
      case 100:
        return "bg-green-600";
      default:
        return "bg-blue-600";
    }
  };
  const statusColorClass = getStatusColorClass(progress);
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className={`${statusColorClass} h-2.5 rounded-full transition-all duration-300 ease-in-out`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default Progress;
