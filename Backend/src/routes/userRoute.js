const express = require('express');
const LoginController = require('../controllers/LoginController');
const userCreation =require('../controllers/userCreation')
const updateUser = require("../controllers/updateUser");



const router = express.Router();

router.post('/login', LoginController)
router.post('/post',userCreation)
router.put("/update/:id", updateUser);

module.exports = router
