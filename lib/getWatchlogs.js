// lib/fetchNotionData.js
import notion from "./notion";

export async function getWatchlogs() {
  const databaseId = process.env.WATCHLOGS_DB_ID;

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      // filter: {
      //   and: [
      //     {
      //       property: "Status",
      //       select: {
      //         equals: "Watched",
      //       },
      //     },
      //   ],
      // },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
      properties: {
        Title: { property: "Title" },
        Type: { property: "Type" },
        Platform: { property: "Platform" },
        Date: { property: "Date" },
        Status: { property: "Status" },
        Favourite: { property: "Favourite" },
      },
    });

    let filteredProperties = response.results.map((page) => {
      // return page.properties.Image.url;
      return {
        title: page.properties.Name.title[0].plain_text || "",
        // Type: page.properties.Type.multi_select
        //   .map((item) => item.name)
        //   .join(", "),
        // Platform: page.properties.Platform.select?.name || "",
        date: page.properties.Date.date?.start || "",
        status: page.properties.Status.status.name || "",
        image: page.properties.Image.files[0] || "",
      };
    });
    filteredProperties = filteredProperties.filter(
      (item) => item.status === "Watched"
    );

    return filteredProperties;
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    return null;
  }
}
