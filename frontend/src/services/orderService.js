import { httpService } from './httpService'
export const orderService = {
    query,
    add
}

const BASE_URL = 'order'
async function query() {
    const orders = await httpService.get(BASE_URL)
    console.log(orders);
    return orders;
}

async function add(order) {
    const newOrder = await httpService.post(BASE_URL, order)
    console.log('newOrder', newOrder );
    return newOrder
}
