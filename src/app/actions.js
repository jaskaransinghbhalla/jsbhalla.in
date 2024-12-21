import { revalidatePath } from "next/cache";
import notion from "../lib/notion";
export async function getSkillsData() {
  const databaseId = process.env.SKILLS_DB_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "Name",
        direction: "ascending",
      },
    ],
    group_by: {
      property: "Category",
      direction: "ascending",
    },
    properties: {
      Title: { property: "Title" },
      Category: { property: "Category" },
    },
  });

  let filteredProperties = response.results.map((page) => {
    return {
      title: page.properties.Name.title[0].plain_text || "",
      category: page.properties.Category.select.name || "",
    };
  });

  const skillsData = filteredProperties.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item.title);
    return acc;
  }, {});
  const skillsArray = Object.entries(skillsData);
  skillsArray.sort((a, b) => b[1].length - a[1].length);
  const sortedSkillsData = Object.fromEntries(skillsArray);
  revalidatePath("/", 60 * 60);
  return sortedSkillsData;
}
