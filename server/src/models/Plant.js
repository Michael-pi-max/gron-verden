const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const schema = mongoose.Schema;

/**
 * Schema for plant
 */

const PlantSchema = new schema(
	{
		plantName: {
			type: String,
		},
		plantType: {
			type: String,
		},
		plantDescription: {
			type: String,
		},
		plantLength: {
			type: Number,
		},
		plantRating: {
			type: Number,
		},
		plantPrice: {
			type: Number,
		},
		plantImage: {
			type: String,
		},
		likes: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'user',
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

const Plant = mongoose.model('plant', PlantSchema);
module.exports = Plant;
