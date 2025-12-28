export default function calculateDuration(startDate, endDate) {
  if (!startDate) return "";
  
  const start = new Date(startDate);
  if (isNaN(start.getTime())) return "";
  
  // Normalize dates to start of month for consistent month calculations
  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  
  let endYear, endMonth;
  if (endDate) {
    const end = new Date(endDate);
    if (isNaN(end.getTime())) return "";
    endYear = end.getFullYear();
    endMonth = end.getMonth();
  } else {
    // For ongoing positions, use current date but normalize to start of month
    const now = new Date();
    endYear = now.getFullYear();
    endMonth = now.getMonth();
  }

  // Calculate the number of months spanned (inclusive of both start and end months)
  // If experience spans across months, count each month as a full month
  const yearsDiff = endYear - startYear;
  const monthsDiff = endMonth - startMonth;
  
  // Count months inclusively: if start is Jan and end is Feb, that's 2 months
  // Add 1 to include both the start and end months
  let months = yearsDiff * 12 + monthsDiff + 1;
  
  // If start and end are in the same month, it's still 1 month
  if (yearsDiff === 0 && monthsDiff === 0) {
    months = 1;
  }

  // Calculate days for cases less than a month (only if we have actual end date)
  if (endDate && months === 1) {
    const end = new Date(endDate);
    const differenceInTime = end.getTime() - start.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    
    if (differenceInDays < 30) {
      return `${differenceInDays} days`;
    }
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years > 0) {
    if (remainingMonths > 0) {
      return `${years} year${years > 1 ? "s" : ""} ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
    }
    return `${years} year${years > 1 ? "s" : ""}`;
  }
  return `${months} month${months > 1 ? "s" : ""}`;
}