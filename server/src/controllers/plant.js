const Plant = require('../models/Plant');
const User = require('../models/User');
const Shop = require('../models/Shop');
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

exports.postNewPlant = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 'error',
        message: errors.array()[0].msg,
      });
    }

    // Check if the user is provider, if it is then include it in shopProducts.plants array that found.
    const shop = await Shop.findOne({
      shopOwner: [mongoose.Types.ObjectId(req.user_id)],
    });

    console.log(shop);

    const user = await User.findOne({
      _id: mongoose.Types.ObjectId(req.user_id),
    });
    // console.log(user.userRole);
    if (user.userRole == 'provider') {
      const plant = await Plant.create(req.body);

      console.log(plant._id);
      if (shop.shopOwner.includes(req.user_id)) {
        shop.shopProducts.plants.unshift(plant._id);
        await shop.save();
      }
      res.status(200).json({ success: 'true', plant });
    }
  } catch (err) {}
};

exports.getAllPlant = async (req, res, next) => {
  try {
    Plant.find().then((plants) => {
      res.status(200).json({ plants });
    });
  } catch (err) {}
};

exports.getSinglePlant = async (req, res, next) => {
  try {
    Plant.findOne({ _id: req.plant_id })
      .then((plant) => {
        res.status(200).json({ plant });
      })
      .catch((err) => {
        res.status(404).json({ error: "can't find plant" });
      });
  } catch (err) {}
};

exports.editSinglePlant = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 'error',
        message: errors.array()[0].msg,
      });
    }

    const {
      plantName,
      plantType,
      plantDescription,
      plantLength,
      plantRating,
      plantPrice,
      plantImage,
    } = req.body;

    Plant.findOneAndUpdate(
      { _id: req.params.plant_id },
      {
        plantName,
        plantType,
        plantDescription,
        plantLength,
        plantRating,
        plantPrice,
        plantImage,
      },
      { new: true }
    ).then((plant) => {
      res.status(200).json({ plant });
    });
  } catch (err) {}
};
