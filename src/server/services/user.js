import User from '../models/user';
import jwt from 'jsonwebtoken'
import {JWT_SECRET, JWT_OPTIONS} from '../config/config'

export const signUp = async (user) => new User(user).save()

export const login = async user => {
  const payload = {
    _id: user._id
  }

  const token = jwt.sign(payload, JWT_SECRET, JWT_OPTIONS)
  return  {
    token,
    user
  }
}
  

export default {
  signUp,
  login
}