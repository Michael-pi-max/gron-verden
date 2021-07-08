const express = require('express');
const plantValidation = require('../middlewares/validation/plant');
const plantController = require('../controllers/plant');

const router = express.Router();

router.post(
	'/new',
	plantValidation.validate('CREATE'),
	plantController.postNewPlant
);

router.get('/all', plantController.getAllPlant);

module.exports = router;
