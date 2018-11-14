import UserService from '../services/user'

export const signUp = async req => {
  const user = req.body
  return UserService.signUp(user)
}

export const login = async req => {
  const { user } = req
  return UserService.login(user)
}

export default {
  signUp,
  login
}