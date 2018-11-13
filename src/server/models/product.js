import mongoose from 'mongoose'
import ProductSchema from '../schemas/product';

export default mongoose.model('Product', ProductSchema)