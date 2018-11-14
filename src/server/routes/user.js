import express from "express";
import {INVALID_USER} from '../helpers/errorTypes'
import {validateModel} from '../middlewares/validator'
import controllerMiddleware from '../middlewares/controller'
import UserModel from '../models/user'
import User from '../controllers/user'
import passport from 'passport'

const router = express.Router();

router.route('/signup')
  .post(validateModel(UserModel, INVALID_USER), controllerMiddleware(User.signUp))

router.route('/login')
  .post(passport.authenticate('local-login'), controllerMiddleware(User.login))

router.route('/seila')
  .post(passport.authenticate('jwt'), (req, res, next) => console.log(req.user) || res.status(200).send(req.user) )

export default router;