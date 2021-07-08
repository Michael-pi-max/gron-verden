const { body } = require('express-validator');

/**
 * @param {String} type
 * LOGIN | REGISTER
 */

exports.validate = (type) => {
	switch (type) {
		case 'LOGIN':
			return [
				body('email').isEmail().withMessage('Invalid email address'),
				body('password').not().isEmpty().withMessage('Password is required'),
			];

		case 'REGISTER':
			return [
				body('firstName').not().isEmpty().withMessage('First name is required'),
				body('lastName').not().isEmpty().withMessage('Last name is required'),
				body('gender').not().isEmpty().withMessage('Gender is required'),
				body('dateOfBirth')
					.not()
					.isEmpty()
					.withMessage('Date of birth required'),
				body('email').isEmail().withMessage('Invalid email address'),
				body('password').not().isEmpty().withMessage('Password is required'),
			];
		case 'EDIT':
			return [
				body('firstName').not().isEmpty().withMessage('First name is required'),
				body('lastName').not().isEmpty().withMessage('Last name is required'),
				body('email').isEmail().withMessage('Invalid email address'),
			];
		default:
			return [];
	}
};
