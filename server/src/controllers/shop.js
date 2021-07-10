const Shop = require('../models/Shop');
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

exports.postNewShop = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 'error',
        message: errors.array()[0].msg,
      });
    }

    const { shopName, shopDescription, shopLogo, startingHour, closingHour } =
      req.body;
    console.log(startingHour);
    const shop = await Shop.create({
      shopName,
      shopDescription,
      shopLogo,
      shopWoringHour: {
        startingHour,
        closingHour,
      },
      shopOwner: req.user_id,
    });
    console.log('BBBBBBBBBBBBBBBBBBBBBBBBB');
    res.status(201).json({
      status: 'success',
      shop,
    });
  } catch (err) {}
};
