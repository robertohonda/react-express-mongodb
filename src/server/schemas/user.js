import mongoose from 'mongoose'

import bcrypt from 'bcrypt'

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true,
  }
}, { versionKey: false })

UserSchema.pre('save', async function(next){
  const user = this;

  const hash = await bcrypt.hash(user.password, 10);
  this.password = hash;
  next();
});

UserSchema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
 }

UserSchema.methods.isValidPassword = async function(password){
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
}


export default UserSchema