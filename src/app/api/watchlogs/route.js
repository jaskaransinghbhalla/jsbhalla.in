import { getWatchlogs } from "../../../../lib/getWatchlogs";

export async function GET() {
  try {
    const data = await getWatchlogs();
    console.log(data);
    if (data) {
      return Response.json(data, {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, max-age=0',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      });
    } else {
      return Response.json({ error: "Failed to fetch data from Notion" });
    }
  } catch (error) {
    Response.json({ error: "An error occurred while fetching data" });
  }
}
