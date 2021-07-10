const { body } = require('express-validator');

exports.validate = (type) => {
  switch (type) {
    case 'CREATE':
      return [
        body('shopName').not().isEmpty().withMessage('Shop name is required'),
        body('shopType').not().isEmpty().withMessage('Shop type is required'),
        body('shopDescription')
          .not()
          .isEmpty()
          .withMessage('Shop description is required'),
        body('startingHour')
          .not()
          .isEmpty()
          .withMessage('Starting hour is required'),
        body('closingHour')
          .not()
          .isEmpty()
          .withMessage('Closing hour is required'),
      ];
    default:
      return [];
  }
};
