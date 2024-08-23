// pages/api/notion-data.js
import { fetchNotionData } from "../../lib/fetchNotionData";

export default async function GET(req) {
  try {
    const data = await fetchNotionData();
    if (data) {
      Response.json(data);
    } else {
      Response.json({ error: "Failed to fetch data from Notion" });
    }
  } catch (error) {
    Response.json({ error: "An error occurred while fetching data" });
  }
}
