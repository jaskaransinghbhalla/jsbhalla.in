// lib/notion.js
import { Client } from "@notionhq/client";

if (!process.env.NOTION_TOKEN) {
  throw new Error("Missing NOTION_TOKEN environment variable");
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export default notion;
