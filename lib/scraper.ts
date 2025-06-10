import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeWebsite(url: string) {
  const response = await axios.get(url);
  const html = response.data;
  const $ = cheerio.load(html);

  const title = $('title').text() || '';
  const description = $('meta[name="description"]').attr('content') || '';
  const headings: string[] = [];
 $('h1, h2').each((_, el) => {
  headings.push($(el).text().trim());
});
  return { url, title, description, headings };
}
