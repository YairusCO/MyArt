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
var gCreateItems = [
    {
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
            "imgUrl": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610978465/inbal_lb5cup.jpg"
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
        "title": "Mishmar",
        "price": 150,
        "description": "",
        "imgUrl": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610990978/11_s399qz.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "bike",
        ],
        "seller": {
            "_id": "u104",
            "fullname": "Eliran Kadosh",
            "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610992803/myArt/77024852_10219560406297249_3160022827982127104_o_aax41g.jpg"
        }
    },
    {
        "_id": "v148",
        "title": "Mishmar",
        "price": 150,
        "description": "",
        "imgUrl": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610990976/14_qorumq.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "bike",
        ],
        "seller": {
            "_id": "u104",
            "fullname": "Eliran Kadosh",
            "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610992803/myArt/77024852_10219560406297249_3160022827982127104_o_aax41g.jpg"
        }
    },
    {
        "_id": "v149",
        "title": "Mishmar",
        "price": 150,
        "description": "",
        "imgUrl": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610990974/10_ntaf26.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "bike",
        ],
        "seller": {
            "_id": "u104",
            "fullname": "Eliran Kadosh",
            "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610992803/myArt/77024852_10219560406297249_3160022827982127104_o_aax41g.jpg"
        }
    },
    {
        "_id": "v150",
        "title": "Mishmar",
        "price": 150,
        "description": "",
        "imgUrl": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610990968/12_sgqewd.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "bike",
        ],
        "seller": {
            "_id": "u104",
            "fullname": "Eliran Kadosh",
            "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610992803/myArt/77024852_10219560406297249_3160022827982127104_o_aax41g.jpg"
        }
    },
    {
        "_id": "v151",
        "title": "Mishmar",
        "price": 150,
        "description": "",
        "imgUrl": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610990965/15_cj25jt.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "bike",
        ],
        "seller": {
            "_id": "u104",
            "fullname": "Eliran Kadosh",
            "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610992803/myArt/77024852_10219560406297249_3160022827982127104_o_aax41g.jpg"
        }
    },
    {
        "_id": "v152",
        "title": "Kashkash",
        "price": 150,
        "description": "",
        "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610994495/myArt/65092850_2418750998147867_6124586066600001536_o_egijzd.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "paint",
            "dog",
        ],
        "seller": {
            "_id": "u105",
            "fullname": "Harel Malachi",
            "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610992823/myArt/99152911_111476110415932_6134678813593847894_n_bra2og.jpg"
        }
    },
    {
        "_id": "v153",
        "title": "vision",
        "price": 150,
        "description": "",
        "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610994489/myArt/59760264_2342773749078926_2578665078521856000_o_ec2fxg.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "hertzhel",
            "Harav Kok",
            "zion",
        ],
        "seller": {
            "_id": "u105",
            "fullname": "Harel Malachi",
            "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610992823/myArt/99152911_111476110415932_6134678813593847894_n_bra2og.jpg"
        }
    },
    {
        "_id": "v154",
        "title": "Jack Sparrow",
        "price": 150,
        "description": "",
        "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610994484/myArt/41543480_1993560150666956_6481710200670650368_o_xmoecz.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "movie",
            "paint",
        ],
        "seller": {
            "_id": "u105",
            "fullname": "Harel Malachi",
            "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610992823/myArt/99152911_111476110415932_6134678813593847894_n_bra2og.jpg"
        }
    },
    {
        "_id": "v155",
        "title": "Lao",
        "price": 150,
        "description": "",
        "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610994480/myArt/lao_h3l6vh.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "movie",
            "paint",
        ],
        "seller": {
            "_id": "u105",
            "fullname": "Harel Malachi",
            "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610992823/myArt/99152911_111476110415932_6134678813593847894_n_bra2og.jpg"
        }
    },
    {
        "_id": "v156",
        "title": "Céline Dion",
        "price": 150,
        "description": "",
        "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610994476/myArt/132426520_3749085141781106_1181560431832534802_n_gsjg4w.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "paint",
        ],
        "seller": {
            "_id": "u105",
            "fullname": "Harel Malachi",
            "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610992823/myArt/99152911_111476110415932_6134678813593847894_n_bra2og.jpg"
        }
    },
    {
        "_id": "v157",
        "title": "Heisenberg",
        "price": 150,
        "description": "-Say my name. -Heisenberg -You are god damn right. W.White.Breaking Bad",
        "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610994472/myArt/72877302_2660854647270833_8978623789348683776_o_zu8u4n.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "movie",
            "paint",
        ],
        "seller": {
            "_id": "u105",
            "fullname": "Harel Malachi",
            "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610992823/myArt/99152911_111476110415932_6134678813593847894_n_bra2og.jpg"
        }
    },
    {
        "_id": "v1578",
        "title": "A New Beginning",
        "price": 150,
        "description":"",
        "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610994469/myArt/70946421_2584248381598127_9222562319555362816_o_gg30kn.jpg",
        "createdAt": 1519129853500,
        "purchasedAt": 1519129853500,
        "tags": [
            "paint",
        ],
        "seller": {
            "_id": "u105",
            "fullname": "Harel Malachi",
            "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610992823/myArt/99152911_111476110415932_6134678813593847894_n_bra2og.jpg"
        }
    },

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