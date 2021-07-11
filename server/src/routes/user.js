const express = require('express');
const userValidation = require('../middlewares/validation/user');
const userController = require('../controllers/user');
const { verifyUser } = require('../middlewares/auth/auth');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/profile/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimeType === 'image/jpeg' || file.mimeType === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

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
  upload.single('profilePicture'),
  userValidation.validate('EDIT'),
  userController.editUserData
);

// Delete user data - DELETE
router.delete('/user', verifyUser, userController.deleteUserData);

module.exports = router;
