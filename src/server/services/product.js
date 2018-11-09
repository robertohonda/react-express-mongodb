import Product from '../models/product';

export const createProduct = async (product) => Product.save(product).exec();

export default {
  create: createProduct,
}