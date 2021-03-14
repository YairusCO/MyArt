import { httpService } from './httpService'
// import { storageService } from './storageService'

const KEY = 'itemsDB';

export const appStoreService = {
    add,
    query,
    remove,
    getById,
}

// var gItems = [];

const BASE_URL = 'item'

async function query(filterBy) {
   
    const items = await httpService.get(BASE_URL)
    console.log(items);
    const filteredItems = items.filter(item => item.title.includes(filterBy.title))
    return filteredItems;
}

function remove(itemId) {
    return httpService.delete(`${BASE_URL}/${itemId}`)
}

// async 
async function add(item) {
    const newItem = await httpService.post(BASE_URL, item)
    return newItem
}

function getById(itemId) {
    return httpService.get(`${BASE_URL}/${itemId}`)
}

// function _saveItemsToStorage() {
//     storageService.save(KEY, gItems)
// }