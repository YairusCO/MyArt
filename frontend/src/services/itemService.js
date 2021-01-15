import { httpService } from './httpService'
// import { storageService } from './asyncStorageService'
// import userService from './userService'
// import { utilService } from './utilService'

export const itemService = {
  add,
  query,
  remove
}


// More ways to send query params:
// return axios.get('api/item/?id=1223&balance=13')
// return axios.get('api/item/?', {params: {id: 1223, balanse:13}})

function query(filterBy) {
  var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=`
  return httpService.get(`item${queryStr}`)
  // return storageService.query('item')
}

function remove(itemId) {
  return httpService.delete(`item/${itemId}`)
  // return storageService.delete('item', itemId)

}
async function add(item) {
  const addedItem = await httpService.post(`item`, item)

  // item.seller = userService.getLoggedinUser()
  // item.aboutUser = await userService.getById(item.aboutUserId)
  // const addedItem = storageService.post('item', item)

  return addedItem
}
