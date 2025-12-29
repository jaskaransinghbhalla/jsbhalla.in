import notion from "../../lib/notion";
import formatDate from "../../utils/format-date";
import calculateDuration from "../../utils/duration";
import calculateTotalExperience from "../../utils/calculate-total-experience";
export async function getExperience() {
  try {
    const databaseId = process.env.EXPERIENCE_DB_ID;
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
    const imageFile = page.properties.Image?.files?.[0];
    const imageUrl = imageFile?.external?.url || imageFile?.file?.url || "";

    // Calculate duration in months for this specific experience
    const singleExperienceForCalc = [
      {
        rawStartDate: page.properties.Date?.date?.start,
        rawEndDate: page.properties.Date?.date?.end || null,
      },
    ];

    const { totalMonths: durationInMonths = 0 } = calculateTotalExperience(
      singleExperienceForCalc
    );
    
    return {
      organization: page.properties.Organization?.title?.[0]?.plain_text || "",
      description: page.properties.Description?.rich_text?.[0]?.plain_text || "",
      role: page.properties.Role?.rich_text?.[0]?.plain_text || "",
      type: page.properties.Type?.select?.name || "",
      image: imageUrl,
      github: page.properties.Github?.url || "",
      startdate: formatDate(page.properties.Date?.date?.start) || "",
      rawStartDate: page.properties.Date?.date?.start || "",
      ...(page.properties.Date?.date?.end
        ? { 
            enddate: formatDate(page.properties.Date.date.end),
            rawEndDate: page.properties.Date.date.end
          }
        : {}),
      // status: page.properties.Status?.status?.name || "",
      reference: page.properties.Url?.url || "",
      tools: page.properties.Tools?.multi_select?.map((tool) => tool.name) || [],
      duration:
        calculateDuration(
          page.properties.Date?.date?.start,
          page.properties.Date?.date?.end
        ) || "",
      durationInMonths: durationInMonths,
      workType: page.properties.WorkType?.select?.name || "",
      location: page.properties.Location?.rich_text?.[0]?.plain_text || "",
      // employmentType: page.properties.Employment?.select?.name || "",
    };
  });
  return filteredProperties;
  } catch (error) {
    console.error("Error fetching experience:", error);
    return [];
  }
}
