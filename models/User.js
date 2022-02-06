import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    validate: [({ length }) => length >= 2, 'Username too short'],
  },
  password: {
    type: String,
    required: true,
    // validation is done with pre hook
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function (next) {
  try {
    /*
    Minimum eight and maximum 10 characters, at least one uppercase letter, 
    one lowercase letter, one number and one special character
    */
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
    if (!this.password.match(regex)) {
      return next(new Error('Password failed validation.'));
    }

    if (/\s/g.test(this.username)) {
      return next(new Error('Username must not contain spaces.'));
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
});

UserSchema.methods.checkPasword = async function (input) {
  try {
    return await bcrypt.compare(input, this.password);
  } catch (error) {
    return error;
  }
};

const User = model('User', UserSchema);

export default User;
