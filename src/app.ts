import express from "express";
import api from "./api";
import cors from "cors";
import { initDatabase } from "./db/connect";
import { syncDb } from "./db/sync";

require("dotenv").config();

const app = express();
app.use(express.json({ limit: "4mb" }));
app.use(cors());
app.use("/api", api);

initDatabase();
export default app;
