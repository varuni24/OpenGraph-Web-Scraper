const express = require("express");
const cors = require("cors");
const { extractOpenGraphTags } = require("./puppeteer");

const app = express();
const PORT = 5002;

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/scrape", async (req, res) => {
  try {
    const url = req.query.url;
    const ogTags = await extractOpenGraphTags(url);
    console.log("Scraped data:", ogTags);
    res.status(200).send(ogTags);
  } catch (error) {
    console.error("error during scraping:", error);
    res.status(500).send({ error: "An error occurred while scraping." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
