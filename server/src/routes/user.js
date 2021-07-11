const express = require('express');
const userValidation = require('../middlewares/validation/user');
const userController = require('../controllers/user');
const { verifyUser } = require('../middlewares/auth/auth');
const multer = require('multer');

const router = express.Router();

const upload = multer({ dest: 'uploads/' });
/**
 * - User login
 * - User register
 */

// Login a user - POST
router.post('/login', userValidation.validate('LOGIN'), userController.login);

// Register a user - POST
router.post(
  '/register',
  upload.single('profilePicture'),
  userValidation.validate('REGISTER'),
  userController.register
);

// Get user data - GET
router.get('/user', verifyUser, userController.getUserData);

// Edit user data - PUT
router.put(
  '/user',
  verifyUser,
  userValidation.validate('EDIT'),
  userController.editUserData
);

// Delete user data - DELETE
router.delete('/user', verifyUser, userController.deleteUserData);

module.exports = router;
