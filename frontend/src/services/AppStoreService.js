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
var gCreatItems = [
  {
      "_id": "v140",
      "title": "Wooden Elephant",
      "price": 380,
      "description": "Made of vietnamese Monkeypod and Mahagony with pearl inlay. I made this while traveling in southern vietnam during monsoon season, the finish is aged with brown gloss, and the carving is of a traditional vietnamese pattern I saw on the vietnamese baskets the ladies in the village weaved from straw ",
      "imgUrl": "https://res.cloudinary.com/arter/image/upload/v1610550004/items/wooden-elephant_btkeqr.jpg",
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
      "title": "B&W Painting",
      "price": 200,
      "description": "Noir-themed black and white painting",
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
      "title": "WWII Photo",
      "price": 150,
      "description": "Early photo from World War 2",
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
      "title": "Body painting",
      "price": 150,
      "description": "Early photo from World War 2",
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
      "title": "Onyx stone ring",
      "price": 150,
      "description": "Home made ring 18(mm) made of silver with a beautiful onyx stone.",
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
  }
]
var gItems=[];
function query() {
  gItems = load(KEY)
  if (!gItems || !gItems.length) {
    gItems = gCreatItems
      }
console.log('query: ', gItems);
      _saveItemsToStorage();
  return Promise.resolve(gItems);
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