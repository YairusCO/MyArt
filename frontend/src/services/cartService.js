import { httpService } from './httpService'
import { storageService } from './storageService'
export const cartService = {
    query,
    add
}
const KEY = 'CART_DB';
const CART_DB = [{
    "_id": "vs43g",
    "createdAt": 9898989,
    "buyer": "defult-user",
    "totalPrice": 20,
    "items": [
        {
            "_id": "v140",
            "name": "Batata Ksbia",
            "amount": 2
        }
    ],
}
]

var gCarts = [];
function query() {
    gCarts = storageService.load(KEY)
    if (!gCarts || !gCarts.length) {
        gCarts = CART_DB;
    }
    //   _saveLocalUser();
    return Promise.resolve([...gCarts]);
}

function add(buyer, items) {
    const cart = {
        "_id": makeId(),
        "createdAt": Date.now(),
        "buyer": buyer,
        "totalPrice": 20,
        "items": items
    }
    gCarts = [...gCarts, cart]
    console.log('cart is ', cart)
    storageService.save(KEY, gCarts)
    return cart
}






function makeId(length = 8) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
