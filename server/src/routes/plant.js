const express = require('express');
const plantValidation = require('../middlewares/validation/plant');
const plantController = require('../controllers/plant');
const { verifyUser } = require('../middlewares/auth/auth');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/plant/');
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

// Creates a plant - POST
router.post(
  '/new',
  verifyUser,
  upload.single('plantImage'),
  plantValidation.validate('CREATE'),
  plantController.postNewPlant
);

// Get all plants - GET
router.get('/all', plantController.getAllPlant);

// Get single plant - GET
router.get('/:plant_id', verifyUser, plantController.getSinglePlant);

// Edit single plant - EDIT
router.put(
  '/:plant_id',
  verifyUser,
  upload.single('plantImage'),
  plantValidation.validate('EDIT'),
  plantController.editSinglePlant
);

// Delete single plant - DELETE

module.exports = router;
