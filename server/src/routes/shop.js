const express = require('express');
const shopValidation = require('../middlewares/validation/shop');
const shopController = require('../controllers/shop');
const { verifyUser } = require('../middlewares/auth/auth');
const multer = require('multer');


const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/shop/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimeType === 'image/jpeg' || file.mimeType === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024,
  },
});

// To create a shop - POST
router.post(
  '/new',
  verifyUser,
  upload.single('shopLogo'),
  shopValidation.validate('CREATE'),
  shopController.postNewShop
);

// To edit shop - PUT
router.put(
  '/edit/:shop_id',
  verifyUser,
  upload.single('shopLogo'),
  shopValidation.validate('EDIT'),
  shopController.editShopData
);

// To get all shops - GET
router.get('/all', shopController.getAllShops);

// To get a specific shop - GET
router.get('/:shop_id', shopController.getSingleShop);

// To delete a shop - DELETE
router.delete('/:shop_id', verifyUser, shopController.deleteSingleShop);

module.exports = router;
