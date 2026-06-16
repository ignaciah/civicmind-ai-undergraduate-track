import express from "express";
import data from "../../data/environment.json" assert { type: "json" };
import { analyzeEnvironment } from "../reasoning/engine.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { location, concern } = req.body;
  const result = analyzeEnvironment(location, concern, data);
  res.json(result);
});

export default router;
