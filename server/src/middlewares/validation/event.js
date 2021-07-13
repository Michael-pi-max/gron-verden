const { body } = require('express-validator');

exports.validate = (type) => {
  switch (type) {
    case 'CREATE':
      return [
        body('eventName').not().isEmpty().withMessage('Event name is required'),
        body('eventDescription')
          .not()
          .isEmpty()
          .withMessage('event description is required'),
        body('eventGoal').not().isEmpty().withMessage('Event goal is required'),
        body('eventStartDate')
          .not()
          .isEmpty()
          .withMessage('Event start date is required'),
        body('eventEndDate')
          .not()
          .isEmpty()
          .withMessage('Event end date is required'),
        body('eventTotalParticipants')
          .not()
          .isEmpty()
          .withMessage('Event total number of participants is required'),
      ];
    case 'EDIT':
      return [
        body('eventName').not().isEmpty().withMessage('Event name is required'),
        body('eventDescription')
          .not()
          .isEmpty()
          .withMessage('event description is required'),
        body('eventGoal').not().isEmpty().withMessage('Event goal is required'),
        body('eventStartDate')
          .not()
          .isEmpty()
          .withMessage('Event start date is required'),
        body('eventEndDate')
          .not()
          .isEmpty()
          .withMessage('Event end date is required'),
        body('eventTotalParticipants')
          .not()
          .isEmpty()
          .withMessage('Event total number of participants is required'),
      ];
    default:
      return [];
  }
};
