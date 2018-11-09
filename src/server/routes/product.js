import express from "express";
import Product from "../controllers/product";
import controllerMiddleware from '../middlewares/controller'

const router = express.Router();

router.route('/')
  .get(controllerMiddleware(Product.error))


export default router;
