// import { httpService } from './httpService'
// import { storageService } from './asyncStorageService'
// import userService from './userService'
// import { utilService } from './utilService'
const KEY = 'itemsDB';
export const appStoreService = {
    add,
    query,
    remove,
    getById
}


// More ways to send query params:
// return axios.get('api/item/?id=1223&balance=13')
// return axios.get('api/item/?', {params: {id: 1223, balanse:13}})

// function query(filterBy) {
//   var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
//   return httpService.get(`item${queryStr}`)
//   // return storageService.query('item')
// }
var gCreateItems = [{
        "_id": "v140",
        "title": "Common Dandelion",
        "price": 380,
        "description": "Taraxacum officinale, the common dandelion[5] (often simply called 'dandelion', is a flowering herbaceous perennial plant of the family Asteraceae (Compositae).",
        "imgUrl": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610700352/01_mpelsr.jpg",
        "createdAt": 1519229860500,
        "purchasedAt": 1529129853500,
        "tags": [
            "wood",
            "elephant",
            "traditional"
        ],
        "seller": {
            "_id": "u101",
            "fullname": "Inbal Azmon",
            "imgUrl": "https://res.cloudinary.com/arter/image/upload/v1610573149/users/profiles/ayeletavni_bfgfh7.jpg"
        }
    },
    {
        "_id": "v141",
        "title": "Centaurea Iberica",
        "price": 200,
        "description": "Centaurea is a genus of between 350 and 600 species of herbaceous thistle-like flowering plants in the family Asteraceae. Members of the genus are found only north of the equator, mostly in the Eastern Hemisphere; the Middle East and surrounding regions are particularly species-rich.",
        "imgUrl": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610700380/07_bmhjka.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "50s",
            "noir",
            "painting",
            "black",
            "white"
        ],
        "seller": {
            "_id": "u103",
            "fullname": "Inbal Azmon",
            "imgUrl": "https://res.cloudinary.com/arter/image/upload/v1610626024/users/profiles/mike-pence-rule_gq4ug4.jpg"
        }
    },
    {
        "_id": "v142",
        "title": "Helianthus",
        "price": 150,
        "description": "Helianthus is a genus comprising about 70 species of annual and perennial flowering plants in the daisy family Asteraceae.[4][5] Except for three South American species, the species of Helianthus are native to North America and Central America.",
        "imgUrl": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610700369/09_okcyg2.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "war",
            "world",
            "photo"
        ],
        "seller": {
            "_id": "u101",
            "fullname": "Inbal Azmon",
            "imgUrl": "https://res.cloudinary.com/arter/image/upload/v1610573149/users/profiles/ayeletavni_bfgfh7.jpg"
        }
    },
    {
        "_id": "v143",
        "title": "Anemone Coronaria",
        "price": 150,
        "description": "Anemone coronaria, the poppy anemone, Spanish marigold, or windflower, is a species of flowering plant in the genus Anemone, native to the Mediterranean region.",
        "imgUrl": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610700313/02_sfxbqt.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "body",
            "paint",
            "color"
        ],
        "seller": {
            "_id": "u102",
            "fullname": "Inbal Azmon",
            "imgUrl": "https://res.cloudinary.com/arter/image/upload/v1610573152/users/profiles/jhonkrispel_qxmioc.jpg"
        }
    },
    {
        "_id": "v144",
        "title": "Sunflower",
        "price": 150,
        "description": "Sunflowers originate in the Americas. They were first domesticated in what is now Mexico and the Southern United States. Domestic sunflower seeds have been found in Mexico, dating to 2100 BCE. Native American people grew sunflowers as a crop from Mexico to Southern Canada. In the 16th century the first crop breeds were brought from America to Europe by explorers.",
        "imgUrl": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610700355/08_b9bc6y.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "ring",
            "jewelry",
            "silver"
        ],
        "seller": {
            "_id": "u103",
            "fullname": "Efrat Cohen",
            "imgUrl": "https://res.cloudinary.com/arter/image/upload/v1610626024/users/profiles/mike-pence-rule_gq4ug4.jpg"
        }
    },
    {
        "_id": "v145",
        "title": "Erythroxylaceae",
        "price": 150,
        "description": "Erythroxylaceae (the coca family) is a family of flowering trees and shrubs consisting of 4 genera and 271 species.",
        "imgUrl": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610700315/04_qval2z.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "ring",
            "jewelry",
            "silver"
        ],
        "seller": {
            "_id": "u103",
            "fullname": "Efrat Cohen",
            "imgUrl": "https://res.cloudinary.com/arter/image/upload/v1610626024/users/profiles/mike-pence-rule_gq4ug4.jpg"
        }
    },
    {
        "_id": "v146",
        "title": "Tibouchina",
        "price": 150,
        "description": "Tibouchina Aubl. is a neoptropical flowering plant genus in Melastomataceae Juss. that contains approximately 240 species. Species of this genus are herbs, shrubs or trees and typically have purple flowers.",
        "imgUrl": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610700239/03_q9mzpk.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "ring",
            "jewelry",
            "silver"
        ],
        "seller": {
            "_id": "u103",
            "fullname": "Efrat Cohen",
            "imgUrl": "https://res.cloudinary.com/arter/image/upload/v1610626024/users/profiles/mike-pence-rule_gq4ug4.jpg"
        }
    },
    {
        "_id": "v147",
        "title": "Oenothera",
        "price": 150,
        "description": "Oenothera is a genus of about 145 species of herbaceous flowering plants native to the Americas. It is the type genus of the family Onagraceae.",
        "imgUrl": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610700238/05_vh2hja.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "ring",
            "jewelry",
            "silver"
        ],
        "seller": {
            "_id": "u103",
            "fullname": "Efrat Cohen",
            "imgUrl": "https://res.cloudinary.com/arter/image/upload/v1610626024/users/profiles/mike-pence-rule_gq4ug4.jpg"
        }
    }
]
var gItems = [];

function query(filterBy) {
    gItems = load(KEY)
    if (!gItems || !gItems.length) {
        gItems = gCreateItems
    }
    const filteredItems = gItems.filter(item => item.title.includes(filterBy.title))
    console.log('query: ', filteredItems);
    _saveItemsToStorage();
    return Promise.resolve(filteredItems);
}

function remove(itemId) {
    console.log('remove', gItems);
    //   return httpService.delete(`item/${itemId}`)
    // return storageService.delete('item', itemId)
    gItems = load(KEY)
    gItems = gItems.filter(item => item.id !== itemId);
    _saveItemsToStorage();
    return Promise.resolve();
}
// async 
function add(itemId) {
    //   const addedItem = await httpService.post(`item`, item)

    itemId = itemId.filter(item => item.id !== itemId);
    _saveItemsToStorage();
    return Promise.resolve();
    // item.byUser = userService.getLoggedinUser()
    // item.aboutUser = await userService.getById(item.aboutUserId)
    // const addedItem = storageService.post('item', item)
    //   return addedItem
}

function getById(itemId) {
    const item = gItems.find(item => item.id === itemId);
    return Promise.resolve(item);
}

function _saveItemsToStorage() {
    storageService.save(KEY, gItems)
}


// // Storage Util

export const storageService = {
    load,
    save
}

function load(key) {
    const str = localStorage.getItem(key)
    return JSON.parse(str)
}

function save(key, val) {
    const str = JSON.stringify(val)
    localStorage.setItem(key, str)
}