import express from "express";
import bodyParser from "body-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { router as foodsRoutes } from "./routes/foodsRoutes.js";

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", join(__dirname, "views"));

app.get("/", (_, res) => {
  res.sendFile(join(__dirname, "views", "foods_page.html"));
});

app.use(foodsRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Running on http://localhost:${PORT}`);
});
