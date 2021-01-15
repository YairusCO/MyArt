const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
    try {
        // const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('item')
        // const items = await collection.find(criteria).toArray()
        var items = await collection.aggregate([
            {
                $match: filterBy
            },
            {
                $lookup:
                {
                    from: 'user',
                    localField: 'byUserId',
                    foreignField: '_id',
                    as: 'byUser'
                }
            },
            {
                $unwind: '$byUser'
            },
            {
                $lookup:
                {
                    from: 'user',
                    localField: 'aboutUserId',
                    foreignField: '_id',
                    as: 'aboutUser'
                }
            },
            {
                $unwind: '$aboutUser'
            }
        ]).toArray()
        items = items.map(item => {
            item.byUser = { _id: item.byUser._id, fullname: item.byUser.fullname }
            item.aboutUser = { _id: item.aboutUser._id, fullname: item.aboutUser.fullname }
            delete item.byUserId
            delete item.aboutUserId
            return item
        })

        return items
    } catch (err) {
        logger.error('cannot find items', err)
        throw err
    }

}

async function remove(itemId) {
    try {
        const store = asyncLocalStorage.getStore()
        const { userId, isAdmin } = store
        const collection = await dbService.getCollection('item')
        // remove only if user is owner/admin
        const query = { _id: ObjectId(itemId) }
        if (!isAdmin) query.byUserId = ObjectId(userId)
        await collection.deleteOne(query)
        // return await collection.deleteOne({ _id: ObjectId(itemId), byUserId: ObjectId(userId) })
    } catch (err) {
        logger.error(`cannot remove item ${itemId}`, err)
        throw err
    }
}


async function add(item) {
    try {
        // peek only updatable fields!
        const itemToAdd = {
            byUserId: ObjectId(item.byUserId),
            aboutUserId: ObjectId(item.aboutUserId),
            txt: item.txt
        }
        const collection = await dbService.getCollection('item')
        await collection.insertOne(itemToAdd)
        return itemToAdd;
    } catch (err) {
        logger.error('cannot insert item', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    return criteria
}

module.exports = {
    query,
    remove,
    add
}


