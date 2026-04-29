import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("dist"));

// SPA fallback — serve index.html for all non-file routes
app.get("*", (_req, res) => {
  res.sendFile("dist/index.html", { root: process.cwd() });
});

app.listen(port, () => {
  console.log(`VitaClaw site running on port ${port}`);
});
