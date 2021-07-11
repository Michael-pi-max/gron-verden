const { body } = require('express-validator');

exports.validate = (type) => {
  switch (type) {
    case 'CREATE':
      return [
        body('plantName').not().isEmpty().withMessage('plant name is required'),
        body('plantType').not().isEmpty().withMessage('plant type is required'),
        body('plantDescription')
          .not()
          .isEmpty()
          .withMessage('plant description is required'),
        body('plantLength')
          .not()
          .isEmpty()
          .withMessage('plant length is required'),
        body('plantPrice')
          .not()
          .isEmpty()
          .withMessage('plant price is required'),
      ];
    case 'EDIT':
      return [
        body('plantName').not().isEmpty().withMessage('plant name is required'),
        body('plantType').not().isEmpty().withMessage('plant type is required'),
        body('plantDescription')
          .not()
          .isEmpty()
          .withMessage('plant description is required'),
        body('plantLength')
          .not()
          .isEmpty()
          .withMessage('plant length is required'),
        body('plantPrice')
          .not()
          .isEmpty()
          .withMessage('plant price is required'),
      ];
    default:
      return [];
  }
};
