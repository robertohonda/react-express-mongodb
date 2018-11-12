import mongoose from 'mongoose'
import joigoose from 'joigoose'

import ProductJoiSchema from '../schemas/product'

const ProductSchema = new mongoose.Schema(joigoose(mongoose).convert(ProductJoiSchema))

export default mongoose.model('Product', ProductSchema)