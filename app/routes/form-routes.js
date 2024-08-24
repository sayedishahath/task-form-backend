const express = require('express');
const {checkSchema} = require('express-validator');
const formCtrl = require('../controllers/form-controller');
const formValidator = require('../validations/form-validator');
const router = express.Router();

router.post('/api/form',checkSchema(formValidator),formCtrl.create)
router.get('/api/form',formCtrl.getAll)
router.get('/api/form/:id',formCtrl.getOne)
router.put('/api/form/:id',checkSchema(formValidator),formCtrl.edit)
router.delete('/api/form/:id',formCtrl.delete)

module.exports = router;