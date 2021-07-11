const Shop = require('../models/Shop');
const User = require('../models/User');
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

// Post new shop controller
exports.postNewShop = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 'error',
        message: errors.array()[0].msg,
      });
    }

    const { shopName, shopDescription, startingHour, closingHour } = req.body;

    // Check if the user is already provider,
    // if not create a shop
    const user = await User.findById({
      _id: mongoose.Types.ObjectId(req.user_id),
    });
    if (user.userRole == 'user') {
      const shop = await Shop.create({
        shopName,
        shopDescription,
        shopLogo: req.file.path,
        startingHour,
        closingHour,
        shopOwner: req.user_id,
        shopProducts: {
          plants: [],
        },
      });

      // Changing the userRole to provider
      await User.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(req.user_id) },
        { userRole: 'provider' },
        { new: true }
      );

      res.status(201).json({
        status: 'success',
        shop,
      });
    } else {
      res.status(400).json({ error: 'User can only has one shop' });
    }
  } catch (err) {}
};

// Edit shop data controller
exports.editShopData = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 'error',
        message: errors.array()[0].msg,
      });
    }

    const { shopName, shopDescription, startingHour, closingHour } = req.body;

    const checkUserInShop = await Shop.findOne({
      _id: mongoose.Types.ObjectId(req.params.shop_id),
    });
    if (checkUserInShop.shopOwner.includes(req.user_id)) {
      Shop.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(req.params.shop_id) },
        {
          shopName,
          shopDescription,
          shopLogo: req.file.path,
          startingHour,
          closingHour,
        },
        { new: true }
      )
        .then((shop) => {
          if (!shop) {
            res.status(400).json({ error: "can't find shop" });
          }
          res.status(200).json({ shop });
        })
        .catch((err) => {
          res.status(404).json({ error: "can't find shop" });
        });
    } else {
      res.status(400).json({ error: "you aren't authorized to edit" });
    }
  } catch (err) {}
};

// Get all shops
exports.getAllShops = async (req, res, next) => {
  Shop.find()
    .then((shops) => {
      if (!shops) {
        res.status(404).json({ error: 'no shops found' });
      }

      res.status(200).json({ shops });
    })
    .catch((err) => {
      res.status(400).json({ error: 'no shops found' });
    });
};

exports.getSingleShop = async (req, res, next) => {
  Shop.findOne({ _id: req.params.shop_id })
    .then((shop) => {
      if (!shop) {
        res.status(400).json({ error: "can't find a shop" });
      }
      res.status(200).json({ shop });
    })
    .catch((err) => {
      res.status(404).json({ error: "can't find a shop" });
    });
};

exports.deleteSingleShop = async (req, res, next) => {
  const user = await User.findOne({
    _id: mongoose.Types.ObjectId(req.user_id),
  });
  if (user.userRole == 'provider') {
    // Changing the userRole to user
    await User.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.user_id) },
      { userRole: 'user' },
      { new: true }
    );
  }
  // Checking if the user is in the shopOwner list

  Shop.findOne({ _id: req.params.shop_id })
    .then((owner) => {
      // If shopOwners list got user id
      if (owner.shopOwner.includes(req.user_id)) {
        console.log('true');
        console.log(owner.shopOwner.indexOf(req.user_id));
        Shop.findOneAndRemove({ _id: req.params.shop_id }).then((shop) => {
          if (!shop) {
            res.status(404).json({ error: "can't find shop" });
          }
          res.status(200).json({ shop });
        });
      }
      // If shopOwners doesn't contain user id
      else {
        console.log('false');
        res.status(400).json({ error: "you can't delete if you're not owner" });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: "can't find shop" });
    });
};
