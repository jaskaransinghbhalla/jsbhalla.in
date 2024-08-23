import { getWatchlogs } from "../../../../lib/getWatchlogs";

export async function GET() {
  try {
    const data = await getWatchlogs();
    if (data) {
      return Response.json(data);
    } else {
      return Response.json({ error: "Failed to fetch data from Notion" });
    }
  } catch (error) {
    Response.json({ error: "An error occurred while fetching data" });
  }
}
