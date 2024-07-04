const express = require('express')
const router = express.Router()
const outingsController = require('../controllers/outings') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, outingsController.getOutings)

router.post('/createOutings', outingsController.createOutings)

router.put('/markOutingsComplete', outingsController.markOutingsComplete)

router.put('/markOutingsIncomplete', outingsController.markOutingsIncomplete)

router.delete('/deleteOutings', outingsController.deleteOutings)

module.exports = router