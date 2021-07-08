const express = require('express');
const userValidation = require('../middlewares/validation/user');
const userController = require('../controllers/user');
const { verifyUser } = require('../middlewares/auth/auth');

const router = express.Router();

/**
 * - User login
 * - User register
 */

router.post('/login', userValidation.validate('LOGIN'), userController.login);

router.post(
	'/register',
	userValidation.validate('REGISTER'),
	userController.register
);

router.get('/user', verifyUser, userController.getUserData);

router.put(
	'/user',
	verifyUser,
	userValidation.validate('EDIT'),
	userController.editUserData
);

router.delete('/user', verifyUser, userController.deleteUserData);

module.exports = router;
