const express = require('express');
const { getToken } = require('../controllers/tokenController');
const exerciceController = require('../controllers/exerciceController');

const router = express.Router();

router.get('/token', getToken);
router.post('/exercice', exerciceController);

module.exports = router;
