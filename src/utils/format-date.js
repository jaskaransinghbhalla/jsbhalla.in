export default function formatDate(dateString) {
  if (!dateString) return "";
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  
  const day = date.getDate();
  // Use en-US locale to ensure consistent formatting between server and client
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  const suffix = getDaySuffix(day);

  return `${day}${suffix} ${month}, ${year}`;
}

function getDaySuffix(day) {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function parseCustomDate(dateString) {
  const months = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  // Extract day, month, and year using regex
  const match = dateString.match(/(\d{1,2})(?:st|nd|rd|th)? (\w{3}), (\d{4})/);

  if (!match) return null;

  const day = parseInt(match[1], 10);
  const month = months[match[2]];
  const year = parseInt(match[3], 10);

  // Return a Date object
  return new Date(year, month, day);
}
