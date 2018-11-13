import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

export default ProductSchema