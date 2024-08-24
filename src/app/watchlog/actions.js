import { revalidatePath } from "next/cache";
import notion from "../../../lib/notion";

export async function getWatchlogs() {
  const databaseId = process.env.WATCHLOGS_DB_ID;
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
      Type: { property: "Type" },
      Platform: { property: "Platform" },
      Date: { property: "Date" },
      Status: { property: "Status" },
      Favourite: { property: "Favourite" },
    },
  });
  console.log(response.results.length);

  let filteredProperties = response.results.map((page) => {
    return {
      title: page.properties.Name.title[0].plain_text || "",
      date: page.properties.Date.date?.start || "",
      status: page.properties.Status.status.name || "",
      image: page.properties.Image.files[0] || "",
    };
  });

  filteredProperties = filteredProperties.filter(
    (item) => item.status === "Watched"
  );
  revalidatePath("/watchlog", 10);
  return filteredProperties;
}
