import { revalidatePath } from "next/cache";
import notion from "../../lib/notion";
import formatDate from "../../utils/format-date";
import calculateDuration from "../../utils/duration";
export async function getCourses() {
  const databaseId = process.env.COURSES_DB_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
    group_by: {
      property: "Category",
      direction: "ascending",
    },
    properties: {
      Code: { property: "Code" },
      Progress: { property: "Progress" },
      Status: { property: "Status" },
      Url: { property: "Url" },
      Date: { property: "Date" },
      Notes: { property: "Notes" },
      Topics: { property: "Topics" },
      Category: { property: "Category" },
      Name: { property: "Name" },
    },
  });

  let filteredProperties = response.results.map((page) => {
    return {
      code: page.properties.Code.title[0].plain_text || "",
      status: page.properties.Status.status.name || "",
      reference: page.properties.Url.url || "",
      progress: page.properties.Progress.number || "",
      notes: page.properties.Notes.url || "",
      name: page.properties.Name.rich_text[0].plain_text || "",
      topics: page.properties.Topics?.rich_text[0]?.plain_text || "",
      category: page.properties.Category.select.name || "",
      startdate: formatDate(page.properties.Date.date?.start) || "",
      enddate: formatDate(page.properties.Date.date?.end) || "",
      duration:
        calculateDuration(
          page.properties.Date.date?.start,
          page.properties.Date.date?.end
        ) || "",
    };
  });
  const coursesData = filteredProperties.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  const coursesArray = Object.entries(coursesData);
  coursesArray.sort((a, b) => b[1].length - a[1].length);
  const sortedCoursesData = Object.fromEntries(coursesArray);
  revalidatePath("/courses", 7200);
  return sortedCoursesData;
}
