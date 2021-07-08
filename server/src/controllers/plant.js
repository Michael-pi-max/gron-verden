const Plant = require('../models/Plant');
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

		const plant = await Plant.create(req.body);
		res.status(201).json({
			status: 'success',
			plant,
		});
	} catch (err) {}
};

exports.getAllPlant = async (req, res, next) => {
	try {
		Plant.find().then((plants) => {
			res.status(200).json({ plants });
		});
	} catch (err) {}
};
