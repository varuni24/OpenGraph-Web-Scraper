const puppeteer = require("puppeteer");

async function extractOpenGraphTags(url) {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });

    const openGraphTags = await page.$$eval(
      'meta[property^="og:"]',
      (elements) => {
        const tags = {};
        for (const el of elements) {
          const property = el.getAttribute("property");
          const content = el.getAttribute("content");
          if (content !== null && content.trim() !== "") {
            tags[property] = content;
          }
        }
        return tags;
      }
    );

    await browser.close();
    return openGraphTags;
  } catch (error) {
    console.error("Error during Scraping with Puppeteer:", error);
    throw error;
  }
}

module.exports = {
  extractOpenGraphTags,
};
