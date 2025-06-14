// import * as cheerio from 'cheerio';
// import { chromium, BrowserContext } from 'playwright';

// export async function scrapeWebsite(url: string) {
//   const browser = await chromium.launch({ headless: true });

//   const context: BrowserContext = await browser.newContext({
//     userAgent:
//       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
//     viewport: { width: 1280, height: 720 },
//   });

//   const page = await context.newPage();

//   try {
//     await page.route('**/*', (route) => {
//       const resourceType = route.request().resourceType();
//       if (['image', 'font', 'stylesheet'].includes(resourceType)) {
//         route.abort();
//       } else {
//         route.continue();
//       }
//     });

//     console.log(`Navigating to ${url}...`);

//     const response = await page.goto(url, {
//       waitUntil: 'domcontentloaded',
//       timeout: 30000,
//     });

//     if (!response || !response.ok()) {
//       throw new Error(`HTTP Error ${response?.status()}: ${response?.statusText()}`);
//     }

//     const html = await page.content();
//     const $ = cheerio.load(html);

//     const title = $('title').text() || '';
//     const description = $('meta[name="description"]').attr('content') || '';
//     const headings: string[] = [];
//     $('h1, h2').each((_, el) => {
//       headings.push($(el).text().trim());
//     });

//     return { url, title, description, headings };

//   } catch (error: any) {
//     console.error('Scraper error:', error.message);
//     throw new Error(`Failed to scrape website (${url}): ${error.message}`);
//   } finally {
//     await browser.close();
//   }
// }
