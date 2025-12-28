export default function calculateDuration(startDate, endDate) {
  if (!startDate) return "";
  
  const start = new Date(startDate);
  if (isNaN(start.getTime())) return "";
  
  const end = endDate ? new Date(endDate) : new Date();
  if (isNaN(end.getTime())) return "";

  // Calculate exact difference in milliseconds
  const differenceInTime = end.getTime() - start.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

  // If less than 30 days, show days
  if (differenceInDays < 30) {
    return `${differenceInDays} day${differenceInDays !== 1 ? "s" : ""}`;
  }

  // Calculate exact months and years
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  // Adjust for negative days
  if (days < 0) {
    months--;
    // Get days in the previous month
    const lastDayOfPrevMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    days += lastDayOfPrevMonth;
  }

  // If end date is more than 15 days into the month, count it as a full month
  if (end.getDate() > 15) {
    months++;
    days = 0; // Reset days since we're counting it as a full month
  }

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  // Format the output
  const parts = [];
  if (years > 0) {
    parts.push(`${years} year${years !== 1 ? "s" : ""}`);
  }
  if (months > 0) {
    parts.push(`${months} month${months !== 1 ? "s" : ""}`);
  }
  if (days > 0 && years === 0 && months === 0) {
    parts.push(`${days} day${days !== 1 ? "s" : ""}`);
  }

  return parts.length > 0 ? parts.join(" ") : "0 days";
}