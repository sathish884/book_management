const express = require('express');

const UserController = require('../controllers/UserController');

const router = express.Router();
router.route('/createUser').post(UserController.userCreate);
router.route('/login').post(UserController.login);

module.exports = router;