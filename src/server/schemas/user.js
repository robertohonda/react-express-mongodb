import mongoose from 'mongoose'
import ProductSchema from './product'

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
})

export default UserSchema