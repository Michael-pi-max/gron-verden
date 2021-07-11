const User = require('../models/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const getToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

// Login controller
exports.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 'error',
        message: errors.array()[0].msg,
      });
    }

    const user = await User.findOne({
      email: req.body.email,
    }).select('+password');

    if (
      !user ||
      !(await user.verifyPassword(req.body.password, user.password))
    ) {
      res.status(401).json({
        status: 'error',
        message: 'Invalid email or password',
      });
    }

    const token = getToken(user._id);
    res.status(200).json({
      status: 'success',
      token,
      user,
    });
  } catch (err) {}
};

// Register controller
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 'error',
        message: errors.array()[0].msg,
      });
    }
    const { email } = req.body;
    // check if email already exists
    User.findOne({ email: email })
      .then((user) => {
        if (user) {
          res.status(400).json({ error: 'Email already exists' });
        } else {
          // Creates a user from the req.body
          console.log(req.file);
          // User.create(req.body).then((user) => {
          //   res.status(201).json({
          //     status: 'success',
          //     token: getToken(User._id),
          //     user,
          //   });
          // });
        }
      })
      .catch((err) => {
        res.status(404).json({ error: "Can't register user" });
      });
  } catch (err) {}
};

// Get user data controller
exports.getUserData = async (req, res, next) => {
  const errors = {};

  User.findById(req.user_id)
    .then((userProfile) => {
      if (!userProfile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(400).json(errors);
      }
      res.json(userProfile);
    })
    .catch((err) =>
      res.status(404).json({ profile: 'There is no profile for this user' })
    );
};

// Edit user data controller
exports.editUserData = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 'error',
        message: errors.array()[0].msg,
      });
    }
    const { firstName, lastName, email } = req.body;

    User.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.user_id) },
      {
        firstName,
        lastName,
        email,
      },
      {
        new: true,
      }
    )
      .then((user) => {
        if (!user) {
          res.status(400).json({ error: "can't find user" });
        }
        res.status(200).json({ user });
      })
      .catch((err) => {
        res.status(404).json({ error: "can't find user" });
      });
  } catch (err) {}
};

// Delete user data controller
exports.deleteUserData = (req, res, next) => {
  User.findByIdAndDelete({ _id: mongoose.Types.ObjectId(req.user_id) })
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch((err) => {
      res.status(404).json({ error: "can't find user" });
    });
};
