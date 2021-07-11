const express = require('express');
const plantValidation = require('../middlewares/validation/plant');
const plantController = require('../controllers/plant');
const { verifyUser } = require('../middlewares/auth/auth');

const router = express.Router();

router.post(
  '/new',
  verifyUser,
  plantValidation.validate('CREATE'),
  plantController.postNewPlant
);

router.get('/all', plantController.getAllPlant);

// Get single plant
router.get('/:plant_id', verifyUser, plantController.getSinglePlant);

// Edit single plant
router.put('/:plant_id', verifyUser, plantController.editSinglePlant);

module.exports = router;
