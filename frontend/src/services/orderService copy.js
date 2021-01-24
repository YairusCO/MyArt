import { httpService } from './httpService'
import { storageService } from './storageService'
export const orderService = {
    query,
    add
}
const KEY = 'orderDB';
const ORDER_DB = [{
    "_id": "o1225",
    "createdAt": 9898989,
    "buyer": "mini-user",
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

var gOrders = [];
function query() {
    gOrders = storageService.load(KEY)
    if (!gOrders || !gOrders.length) {
        gOrders = ORDER_DB;
    }
    return Promise.resolve([...gOrders]);
}

function add(buyer, items) {
    const order = {
        "_id": makeId(),
        "createdAt": Date.now(),
        "buyer": buyer,
        "totalPrice": 20,
        "items": items
    }
    gOrders = [...gOrders, order]
    storageService.save(KEY, gOrders)
    return order
}






function makeId(length = 8) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
