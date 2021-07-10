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
    startingHour: {
      type: Date,
    },
    closingHour: {
      type: Date,
    },
    shopOwner: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    shopProducts: {
      plants: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'plant',
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Shop = mongoose.model('shop', ShopSchema);
module.exports = Shop;
