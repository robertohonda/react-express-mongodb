import express from "express";
import testRoutes from "./test";

const router = express.Router();

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => res.send("OK"));

router.use("/test", testRoutes);

export default router;
