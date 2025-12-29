export default function calculateTotalExperience(experiences) {
  if (!experiences || experiences.length === 0) {
    return { years: 0, months: 0, totalMonths: 0, display: "0 months" };
  }

  let totalMonths = 0;

  experiences.forEach((exp) => {
    if (!exp.rawStartDate) return;

    const startDate = new Date(exp.rawStartDate);
    if (isNaN(startDate.getTime())) return;

    // Normalize dates to start of month for consistent month calculations
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    
    let endYear, endMonth;
    if (exp.rawEndDate) {
      const endDate = new Date(exp.rawEndDate);
      if (isNaN(endDate.getTime())) return;
      endYear = endDate.getFullYear();
      endMonth = endDate.getMonth();
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
    let monthsForThisExp = yearsDiff * 12 + monthsDiff + 1;
    
    // If start and end are in the same month, it's still 1 month
    if (yearsDiff === 0 && monthsDiff === 0) {
      monthsForThisExp = 1;
    }
    
    totalMonths += monthsForThisExp;
  });

  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  let display = "";
  if (years > 0) {
    display = `${years} year${years > 1 ? "s" : ""}`;
    if (remainingMonths > 0) {
      display += ` ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
    }
  } else {
    display = `${totalMonths} month${totalMonths > 1 ? "s" : ""}`;
  }

  return { years, months: remainingMonths, totalMonths, display };
}
