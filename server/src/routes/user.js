const express = require('express');
const userValidation = require('../middlewares/validation/user');
const userController = require('../controllers/user');


const router = express.Router();

/**
 * - User login
 * - User register
 */

router.post("/login", userValidation.validate("LOGIN"), userController.login);

router.post("/register", userValidation.validate("REGISTER"), userController.register);



module.exports = router;