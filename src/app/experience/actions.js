import { revalidatePath } from "next/cache";
import notion from "../../../lib/notion";

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
    },
  });

  let filteredProperties = response.results.map((page) => {
    return {
      organization: page.properties.Organization.title[0].plain_text || "",
      description: page.properties.Description.rich_text[0].plain_text || "",
      role: page.properties.Role.rich_text[0].plain_text || "",
      type: page.properties.Type.select.name || "",
      image: page.properties.Image.files[0] || "",
      startdate: page.properties.Date.date?.start || "",
      github: page.properties.Github.url || "",
      enddate: page.properties.Date.date?.end || "",
      status: page.properties.Status.status.name || "",
    };
  });
  revalidatePath("/experience", 10);
  return filteredProperties;
}
