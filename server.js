import express from "express";
import dotenv from "dotenv";

import { createVitaClawChatResponse } from "./server/vitaclaw-assistant.js";

dotenv.config({ path: ".env.local" });
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "16kb" }));

app.post("/api/vitaclaw-assistant/chat", async (req, res) => {
  try {
    const response = await createVitaClawChatResponse(req.body);
    res.json(response);
  } catch {
    res.status(500).json({
      type: "fallback",
      answer: "VitaClaw 助手暂时无法读取产品文档，请稍后再试或预约演示。",
      sources: [],
      cta: "预约演示",
      usedModel: false,
    });
  }
});

app.get(["/b2b", "/b2b/"], (_req, res) => {
  res.sendFile("dist/b2b/index.html", { root: process.cwd() });
});

app.use(express.static("dist"));

// SPA fallback — serve index.html for all non-file routes
app.get("*", (_req, res) => {
  res.sendFile("dist/index.html", { root: process.cwd() });
});

app.listen(port, () => {
  console.log(`VitaClaw site running on port ${port}`);
});
