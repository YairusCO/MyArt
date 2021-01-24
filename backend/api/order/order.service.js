const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')
const itemService = require('../item/item.service')
const userService = require('../user/user.service')

async function query(filterBy = {}) {
    try {
        const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('order')
        // const orders = await collection.find({}).toArray()
        // const orders = await collection.find(criteria).toArray()
        var orders = await collection.aggregate([
            // {
            //     $match: criteria
            // },
            {
                $lookup:
                {
                    from: 'user',
                    localField: 'sellerId',
                    foreignField: '_id',
                    as: 'seller'
                }
            },
            {
                $unwind: '$seller'
            },
            {
                $lookup:
                {
                    from: 'user',
                    localField: 'buyerId',
                    foreignField: '_id',
                    as: 'buyer'
                }
            },
            {
                $unwind: '$buyer'
            },
            {
                $lookup:
                {
                    from: 'item',
                    localField: 'itemId',
                    foreignField: '_id',
                    as: 'item'
                }
            },
            {
                $unwind: '$item'
            }
        ]).toArray()
        console.log(orders)
        return orders.map(order => {
            delete order.sellerId
            delete order.buyerId
            delete order.itemId
            delete order.seller.password
            delete order.buyer.password
            return order
        })
    } catch (err) {
        logger.error('cannot find orders', err)
        throw err
    }
}

async function add({ item, user }) {
    try {
        // peek only updatable fields!
        const { seller, ...itemClean } = item
        const orderToAdd = {
            createdAt: Date.now(),
            item: itemClean,
            seller,
            buyer: user,
        }
        const collection = await dbService.getCollection('order')
        const record = await collection.insertOne(orderToAdd)
        item.purchasedAt = Date.now()
        itemService.update(item)
        return orderToAdd;
    } catch (err) {
        logger.error('cannot insert order', err)
        throw err
    }
}


async function getById(orderId) {
    try {
        const collection = await dbService.getCollection('order')
        const user = await collection.findOne({ '_id': ObjectId(orderId) })
        
        


        return user
    } catch (err) {
        logger.error(`while finding user ${userId}`, err)
        throw err
    }
}




function _buildCriteria(filterBy) {
    const criteria = {}
    return criteria
}

module.exports = {
    query,
    add
}