import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { postsRouter } from "./routes/posts.routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;
const API_VERSION = "v1";

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "../images")));
app.use(`/api/${API_VERSION}/posts`, postsRouter);

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}/api/${API_VERSION}`);
});
