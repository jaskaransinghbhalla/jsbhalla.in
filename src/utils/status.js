export const getStatusColorClass = (status) => {
  console.log(status)
  switch (status.toLowerCase()) {
    case "complete":
      return "text-green-800 bg-green-200";
    case "done":
      return "text-green-800 bg-green-200";
    case "upcoming":
      return "text-yellow-800 bg-yellow-200";
    case "in progress":
      return "text-blue-800 bg-blue-200";
    default:
      return "text-gray-800 bg-gray-200";
  }
};
