const express = require('express'); 
const router = express.Router(); 
const candidatesController = require('../controllers/candidatesController'); 
const degreesController = require('../controllers/degreesController');

router.get('/candidates', candidatesController.all);
router.get('/degrees', degreesController.all);

module.exports = router;