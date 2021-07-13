const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const schema = mongoose.Schema;

const UserSchema = new schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
    },
    gender: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      select: false,
    },
    userRole: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    city: {
      type: String,
    },
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'plant',
      },
    ],
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event',
      },
    ],
    // exchangePlant: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'plant',
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

UserSchema.methods.verifyPassword = async function (
  candinatePassword,
  userPassword
) {
  return await bcrypt.compare(candinatePassword, userPassword);
};

const User = mongoose.model('user', UserSchema);
module.exports = User;
