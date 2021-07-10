const express = require('express');
const shopValidation = require('../middlewares/validation/shop');
const shopController = require('../controllers/shop');
const { verifyUser } = require('../middlewares/auth/auth');

const router = express.Router();

router.post(
  '/new',
  verifyUser,
  shopValidation.validate('CREATE'),
  shopController.postNewShop
);

module.exports = router;
