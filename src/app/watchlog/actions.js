import notion from "../../lib/notion";

export async function getWatchlogs() {
  try {
    const databaseId = process.env.WATCHLOGS_DB_ID;
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
    filter: {
      and: [
        {
          property: "Status",
          status: {
            equals: "Watched",
          },
        },
        {
          timestamp: "created_time",
          created_time: {
            on_or_after: "2024-01-01",
          },
        },
        // {
        //   property: "Type",
        //   select: {
        //     equals: "Movie",
        //   },
        // }
      ],
    },
    properties: {
      Title: { property: "Title" },
      Name: { property: "Name" },
      Type: { property: "Type" },
      Platform: { property: "Platform" },
      Date: { property: "Date" },
      Status: { property: "Status" },
      Favourite: { property: "Favourite" },
      Image: { property: "Image" },
    },
  });

  let filteredProperties = response.results.map((page) => {
    const imageFile = page.properties.Image?.files?.[0];
    const imageUrl = imageFile?.external?.url || imageFile?.file?.url || "";
    
    // Try different property names and types for title
    const title = 
      page.properties.Title?.title?.[0]?.plain_text ||
      page.properties.Title?.rich_text?.[0]?.plain_text ||
      page.properties.Name?.title?.[0]?.plain_text ||
      page.properties.Name?.rich_text?.[0]?.plain_text ||
      "";
    
    return {
      title: title,
      date: page.properties.Date?.date?.start || "",
      status: page.properties.Status?.status?.name || "",
      image: imageUrl,
    };
  });

  filteredProperties = filteredProperties.filter(
    (item) => item.status === "Watched"
  );
  return filteredProperties;
  } catch (error) {
    console.error("Error fetching watchlogs:", error);
    return [];
  }
}
