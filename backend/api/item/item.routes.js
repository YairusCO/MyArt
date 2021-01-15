const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {log} = require('../../middlewares/logger.middleware')
const {addItem, getItems, deleteItem} = require('./item.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getItems)
router.post('/',  requireAuth, addItem)
router.delete('/:id',  requireAuth, deleteItem)

module.exports = router