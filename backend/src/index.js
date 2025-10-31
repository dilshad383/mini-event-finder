import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

// --- API routes ---
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend working ✅" });
});

app.get("/api/events", (req, res) => {
  res.json({
  data: [
    { id: 1, title: "Tech Meetup", location: "New York", date: "2025-11-10" },
    { id: 2, title: "AI Conference", location: "San Francisco", date: "2025-11-15" },
    { id: 3, title: "Startup Summit", location: "London", date: "2025-12-01" },
    { id: 4, title: "Music Festival", location: "Los Angeles", date: "2025-12-20" }
  ]
});

});

// --- Serve frontend build ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.join(__dirname, "../../frontend/dist");

app.use(express.static(frontendPath));

// ✅ Important: use regex for Express 5
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ---------------------------

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
