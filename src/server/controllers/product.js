import ProductService from '../services/product'
import APIError from '../helpers/error'

export const createProduct = async (req, res) => {
  const product = req.body
  return ProductService.create(product)
}

export const error = async (req) => {
  
  throw new APIError({message: 'APIError'})
}

export default {
  create: createProduct,
  error
}