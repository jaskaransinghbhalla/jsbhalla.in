export default function imageLoader({ src, width, quality }) {
  // If it's a local image (starts with /), return as is
  if (src.startsWith('/')) {
    return src;
  }
  
  // If it's already a full URL, return it
  if (src.startsWith('http://') || src.startsWith('https://')) {
    // For Notion images, we might need to handle them specially
    // Notion images sometimes need to be accessed directly
    return src;
  }
  
  // Otherwise, return the src as is
  return src;
}
