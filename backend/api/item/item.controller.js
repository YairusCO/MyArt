const logger = require('../../services/logger.service')
const userService = require('../user/user.service')
const itemService = require('./item.service')

async function getItems(req, res) {
    try {
        const items = await itemService.query(req.query)
        res.send(items)
    } catch (err) {
        logger.error('Cannot get items', err)
        res.status(500).send({ err: 'Failed to get items' })
    }
}

async function deleteItem(req, res) {
    try {
        await itemService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete item', err)
        res.status(500).send({ err: 'Failed to delete item' })
    }
}


async function addItem(req, res) {
    try {
        var item = req.body
        item.byUserId = req.session.user._id
        item = await itemService.add(item)
        item.byUser = req.session.user
        item.aboutUser = await userService.getById(item.aboutUserId)
        res.send(item)

    } catch (err) {
        logger.error('Failed to add item', err)
        res.status(500).send({ err: 'Failed to add item' })
    }
}

module.exports = {
    getItems,
    deleteItem,
    addItem
}