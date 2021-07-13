const User = require('../models/User');
const Shop = require('../models/Shop');
const Plant = require('../models/Plant');
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
    const {
      firstName,
      lastName,
      userName,
      gender,
      dateOfBirth,
      email,
      password,
      userRole,
      phoneNumber,
      city,
    } = req.body;
    // check if email already exists

    // console.log(req.file.filename);

    User.findOne({ email: email })
      .then((user) => {
        if (user) {
          res.status(400).json({ error: 'Email already exists' });
        } else {
          // Creates a user from the req.body
          // console.log(req.file);
          User.create({
            firstName,
            lastName,
            userName,
            gender,
            dateOfBirth,
            profilePicture: req.file.path,
            email,
            password,
            userRole,
            phoneNumber,
            city,
          }).then((user) => {
            res.status(201).json({
              status: 'success',
              token: getToken(User._id),
              user,
            });
          });
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
    const { firstName, lastName, email, userName, phoneNumber, city } =
      req.body;

    User.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.user_id) },
      {
        firstName,
        lastName,
        email,
        userName,
        profilePicture: req.file.path,
        phoneNumber,
        city,
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

// Post plants to cart
exports.postToCart = async (req, res, next) => {
  // Check if shop_id is valid
  // Check if plant is under shopProduct
  // If there, add it to cart in the user
  const user = await User.findOne({ _id: req.user_id });
  const shop = await Shop.findOne({ _id: req.params.shop_id });
  if (shop.shopProducts.plants.includes(req.params.plant_id)) {
    user.cart.unshift(req.params.plant_id);
    res.status(200).json({ success: 'true', user });
    user.save();
  } else {
    res.status(404).json({ error: 'There is no plant' });
  }
};
