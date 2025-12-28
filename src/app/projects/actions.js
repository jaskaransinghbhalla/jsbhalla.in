import notion from "../../lib/notion";
import formatDate from "../../utils/format-date";
import calculateDuration from "../../utils/duration";
export async function getProjects() {
  try {
    const databaseId = process.env.PROJECTS_DB_ID;
    if (!databaseId) {
      return [];
    }
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

  // sort by date.end
  response.results.sort((a, b) => {
    const dateA = a.properties.Date?.date?.end ? new Date(a.properties.Date.date.end) : new Date(0);
    const dateB = b.properties.Date?.date?.end ? new Date(b.properties.Date.date.end) : new Date(0);
    return dateB - dateA;
  });

  let filteredProperties = response.results.map((page) => {
    const imageFile = page.properties.Image?.files?.[0];
    const imageUrl = imageFile?.external?.url || imageFile?.file?.url || "";
    
    return {
      title: page.properties.Title?.title?.[0]?.plain_text || "",
      description: page.properties.Description?.rich_text?.[0]?.plain_text || "",
      github: page.properties.Github?.url || "",
      deployment: page.properties.Deployment?.url || "",
      image: imageUrl,
      isdeployed: page.properties.Deployed?.checkbox || false,
      startdate: formatDate(page.properties.Date?.date?.start) || "",
      enddate: formatDate(page.properties.Date?.date?.end) || "",
      status: page.properties.Status?.status?.name || "",
      duration:
        calculateDuration(
          page.properties.Date?.date?.start,
          page.properties.Date?.date?.end
        ) || "",
    };
  });
  return filteredProperties;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
