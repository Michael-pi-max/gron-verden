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

    const shop = await Shop.findOne({
      shopOwner: [mongoose.Types.ObjectId(req.user_id)],
    });

    // Check if the user is provider,
    // if it is then include it in shopProducts.plants array that found.
    const user = await User.findOne({
      _id: mongoose.Types.ObjectId(req.user_id),
    });
    if (user.userRole == 'provider') {
      const {
        plantName,
        plantType,
        plantDescription,
        plantLength,
        plantRating,
        plantPrice,
      } = req.body;
      const plant = await Plant.create({
        plantName,
        plantType,
        plantDescription,
        plantLength,
        plantRating,
        plantPrice,
        plantImage: req.file.path,
        likes: [],
      });

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
    Plant.findOne({ _id: req.params.plant_id })
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
        plantImage: req.file.path,
      },
      { new: true }
    ).then((plant) => {
      res.status(200).json({ plant });
    });
  } catch (err) {}
};

// Delete a single plant
// exports.deleteSinglePlant = (req, res, next) => {
//   Plant.findByIdAndDelete({ _id: mongoose.Types.ObjectId(req.plant_id) })
//     .then((plant) => {
//       if (plant) {
//         res.status(200).json({ plant });
//       }
//     })
//     .catch((err) => {
//       res.status(404).json({ error: "can't find plant" });
//     });
// };

// -------------------------------------------------------------------------------------
// exports.postExchangePlant = async (req, res, next) => {
// };
