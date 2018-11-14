import express from "express";
import Product from "../controllers/product";
import controllerMiddleware from '../middlewares/controller'
import {validateModel} from '../middlewares/validator'
import ProductModel from "../models/product";
import {INVALID_PRODUCT} from '../helpers/errorTypes'

const router = express.Router();


router.route('/')
  .get(controllerMiddleware(Product.error))
  .post( validateModel(ProductModel, INVALID_PRODUCT), controllerMiddleware(Product.create))


export default router;