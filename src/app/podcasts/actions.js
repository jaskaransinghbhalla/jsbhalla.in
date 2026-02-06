import notion from '../../lib/notion';
import formatDate from '../../utils/format-date';

export async function getPodcasts() {
  try {
    const databaseId = process.env.PODCASTS_DB_ID;
    if (!databaseId) {
      return [];
    }
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    return response.results.map((page) => {
      const coverFile = page.properties.Cover?.files?.[0];
      const coverUrl = coverFile?.external?.url || coverFile?.file?.url || '';

      return {
        id: page.id,
        title: page.properties.Title?.title?.[0]?.plain_text || '',
        description: page.properties.Description?.rich_text?.[0]?.plain_text || '',
        cover: coverUrl,
        date: formatDate(page.properties.Date?.date?.start) || '',
        rawDate: page.properties.Date?.date?.start || '',
        link: page.properties.Link?.url || '',
        category: page.properties.Category?.select?.name || '',
        duration: page.properties.Duration?.rich_text?.[0]?.plain_text || '',
        tags: page.properties.Tags?.multi_select?.map((tag) => tag.name) || [],
      };
    });
  } catch (error) {
    console.error('Error fetching podcasts:', error);
    return [];
  }
}