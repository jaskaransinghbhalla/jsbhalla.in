// lib/fetchNotionData.js
import notion from "./notion";

export async function fetchNotionData(database_id) {
  const databaseIds = [
    process.env.NOTION_DATABASE_1_ID,
    // process.env.NOTION_DATABASE_2_ID,
    // process.env.NOTION_DATABASE_3_ID,
  ];

  try {
    const results = await Promise.all(
      databaseIds.map(async (databaseId) => {
        const response = await notion.databases.query({
          database_id: databaseId,
        });
        return response.results;
      })
    );

    return results;
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    return null;
  }
}
