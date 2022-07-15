const path = require('path');
const express = require('express');
const rootDir = require('../util/path.js');
const router = express.Router();

const successController = require('../controllers/success')

router.use('/success',successController.success);
module.exports = router;