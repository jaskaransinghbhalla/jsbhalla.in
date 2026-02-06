import notion from '../../lib/notion';
import formatDate from '../../utils/format-date';

export async function getBooks() {
  try {
    const databaseId = process.env.BOOKS_DB_ID;
    if (!databaseId) {
      return [];
    }
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Date Finished',
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
        author: page.properties.Author?.rich_text?.[0]?.plain_text || '',
        description: page.properties.Description?.rich_text?.[0]?.plain_text || '',
        cover: coverUrl,
        dateFinished: formatDate(page.properties['Date Finished']?.date?.start) || '',
        rawDateFinished: page.properties['Date Finished']?.date?.start || '',
        rating: page.properties.Rating?.select?.name || '',
        genre: page.properties.Genre?.multi_select?.map((g) => g.name) || [],
        tags: page.properties.Tags?.multi_select?.map((tag) => tag.name) || [],
        amazonLink: page.properties['Amazon Link']?.url || '',
        goodreadsLink: page.properties['Goodreads Link']?.url || '',
        pages: page.properties.Pages?.number || 0,
        status: page.properties.Status?.select?.name || 'Read',
        isbn: page.properties.ISBN?.rich_text?.[0]?.plain_text || '',
      };
    });
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}