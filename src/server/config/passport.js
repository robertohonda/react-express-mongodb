import JWTPassport from 'passport-jwt';
import LocalPassport from 'passport-local';
import passport from 'passport'
import UserService from '../services/user'
import APIError from '../helpers/error';
import status from 'http-status'
import {USER_NOT_FOUND, WRONG_PASSWORD} from '../helpers/errorTypes'
import {JWT_SECRET} from '../config/config'

const JWTStrategy = JWTPassport.Strategy;
const JWTExtract = JWTPassport.ExtractJwt;
const LocalStrategy = LocalPassport.Strategy;

passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false
}, async (email, password, done) => {
  try {
    const user = await UserService.findByEmail(email);

    if( !user ) throw new APIError({status: status.OK, type: USER_NOT_FOUND, message: 'User not registered'});

    const validate = await user.isValidPassword(password);
    if( !validate ) throw new APIError({status: status.OK, type: WRONG_PASSWORD, message: 'The password is incorrect'});

    return done(null, user);

  } catch (error) {
    return done(error);
  }
}));

passport.use(new JWTStrategy({
  secretOrKey : JWT_SECRET,
  jwtFromRequest : JWTExtract.fromHeader('token'),
  session: false
}, async (JWTPayload, done) =>
  UserService.findById(JWTPayload._id)
  .then(user => user ? done(null, user) : done(null, false))
  .catch(err => done(err))
));


passport.serializeUser( (user, done) => done(null, user.id) )

passport.deserializeUser( 
  (id, done) => UserService.findById(id)
  .then(user => done(null, user))
  .catch(error => done(error)
))

export default passport;