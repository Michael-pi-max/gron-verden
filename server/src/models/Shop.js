const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ShopSchema = new schema(
	{
		shopName: {
			type: String,
		},
		shopDescription: {
			type: String,
		},
		shopLogo: {
			type: String,
		},
		shopWorkingHour: {
			startingHour: {
				type: Date,
			},
			closingHour: {
				type: Date,
			},
		},
		shopOwner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user',
		},
	},
	{
		timestamps: true,
	}
);
