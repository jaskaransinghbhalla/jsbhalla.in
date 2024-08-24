import { revalidatePath } from "next/cache";
import notion from "../../../lib/notion";
import formatDate from "@/utils/format-date";
import calculateDuration from "@/utils/duration";
export async function getExperience() {
  const databaseId = process.env.EXPERIENCE_DB_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
    properties: {
      Organization: { property: "Organization" },
      Description: { property: "Description" },
      Role: { property: "Role" },
      Type: { property: "Type" },
      Url: { property: "Url" },
      Image: { property: "Image" },
      Date: { property: "Date" },
      Status: { property: "Status" },
      Github: { property: "Github" },
      Tools: { property: "Tools" },
      WorkType: { property: "Work Type" },
      Location: { property: "Location" },
      EmploymentType: { property: "Employment" },
    },
  });

  let filteredProperties = response.results.map((page) => {
    return {
      organization: page.properties.Organization.title[0].plain_text || "",
      description: page.properties.Description.rich_text[0].plain_text || "",
      role: page.properties.Role.rich_text[0].plain_text || "",
      type: page.properties.Type.select.name || "",
      image: page.properties.Image.files[0] || "",
      github: page.properties.Github.url || "",
      startdate: formatDate(page.properties.Date.date?.start) || "",
      enddate: formatDate(page.properties.Date.date?.end) || "",
      status: page.properties.Status.status.name || "",
      reference: page.properties.Url.url || "",
      tools: page.properties.Tools.multi_select.map((tool) => tool.name) || [],
      duration:
        calculateDuration(
          page.properties.Date.date?.start,
          page.properties.Date.date?.end
        ) || "",
      workType: page.properties.WorkType.select.name || "",
      location: page.properties.Location.rich_text[0].plain_text || "",
      employmentType: page.properties.Employment.select.name || "",
    };
  });
  console.log(filteredProperties);
  revalidatePath("/experience", 7200);
  return filteredProperties;
}
