import Product from '../models/product';

export const createProduct = async (product) => new Product(product).save()

export default {
  create: createProduct,
}