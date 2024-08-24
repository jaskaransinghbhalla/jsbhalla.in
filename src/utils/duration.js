export default function calculateDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInTime = end.getTime() - start.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  
    if (differenceInDays < 30) {
      return `${differenceInDays} days`;
    } else {
      const months = Math.floor(differenceInDays / 30);
      return `${months} month${months > 1 ? "s" : ""}`;
    }
  }