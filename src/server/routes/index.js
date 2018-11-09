import express from "express";
import testRoutes from "./test";
import productRoutes from './product'

const router = express.Router();

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => res.send("OK"));

router.use("/test", testRoutes);
router.use("/product", productRoutes);

export default router;
