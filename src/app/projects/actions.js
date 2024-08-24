import { revalidatePath } from "next/cache";
import notion from "../../../lib/notion";
import formatDate from "@/utils/format-date";
import calculateDuration from "@/utils/duration";
export async function getProjects() {
  const databaseId = process.env.PROJECTS_DB_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
    properties: {
      Title: { property: "Title" },
      Description: { property: "Description" },
      Image: { property: "Image" },
      Github: { property: "Github" },
      Deployment: { property: "Deployment" },
      Deployed: { property: "Deployed" },
      Date: { property: "Date" },
      Status: { property: "Status" },
    },
  });

  let filteredProperties = response.results.map((page) => {
    return {
      title: page.properties.Title.title[0].plain_text || "",
      description: page.properties.Description.rich_text[0].plain_text || "",
      github: page.properties.Github.url || "",
      deployment: page.properties.Deployment.url || "",
      image: page.properties.Image.files[0] || "",
      isdeployed: page.properties.Deployed.checkbox || "",
      startdate: formatDate(page.properties.Date.date?.start) || "",
      enddate: formatDate(page.properties.Date.date?.end) || "",
      status: page.properties.Status.status.name || "",
      duration:
        calculateDuration(
          page.properties.Date.date?.start,
          page.properties.Date.date?.end
        ) || "",
    };
  });
  revalidatePath("/projects", 10);
  return filteredProperties;
}
