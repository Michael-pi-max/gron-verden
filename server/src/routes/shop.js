const express = require('express');
const shopValidation = require('../middlewares/validation/shop');
const shopController = require('../controllers/shop');
const { verifyUser } = require('../middlewares/auth/auth');

const router = express.Router();

// To POST create new shop
router.post(
  '/new',
  verifyUser,
  shopValidation.validate('CREATE'),
  shopController.postNewShop
);

// To EDIT shop
router.put(
  '/edit/:shop_id',
  verifyUser,
  shopValidation.validate('EDIT'),
  shopController.editShopData
);

// get all shops
router.get('/all', shopController.getAllShops);

// get a specific shop
router.get('/:shop_id', shopController.getSingleShop);

// delete a shop
router.delete('/:shop_id', verifyUser, shopController.deleteSingleShop);

module.exports = router;
