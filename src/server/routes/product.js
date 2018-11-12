import express from "express";
import Product from "../controllers/product";
import controllerMiddleware from '../middlewares/controller'
import {validateSchema} from '../middlewares/validator'
import ProductSchema from "../schemas/product";

const router = express.Router();


router.route('/')
  .get(controllerMiddleware(Product.error))
  .post(validateSchema(ProductSchema, 'INVALID_PRODUCT'), controllerMiddleware(Product.create))


export default router;