import notion from '@/lib/notion';

export async function getNotionData(databaseId: string) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Created time',
          direction: 'descending',
        },
      ],
    });
    return response.results;
  } catch (error) {
    console.error(`Error fetching data from database ${databaseId}:`, error);
    throw new Error('Failed to fetch data from Notion');
  }
}

export async function getNotionPage(pageId: string) {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });
    return page;
  } catch (error) {
    console.error(`Error fetching page ${pageId}:`, error);
    throw new Error('Failed to fetch page from Notion');
  }
}