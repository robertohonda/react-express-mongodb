import express from "express";
import { createProduct } from "../controllers/product";

const router = express.Router();

router.route("/").get((req, res) => res.json({ message: "hahaha" }));

export default router;
