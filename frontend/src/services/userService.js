// import { storageService } from './asyncStorageService'
import { httpService } from './httpService'
// const SCORE_FOR_REVIEW = 10
const KEY = 'usersDB';
export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedinUser,
    query
    // increaseScore
}

// window.userService = userService
// Note: due to async, must run one by one...
// userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 100, isAdmin: false})
// userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 100, isAdmin: true})

const gCreateUsers = [{
    fullname: 'Yair',
    username: 'yairm', 
    password:'123',
    isAdmin: true
},
{
    fullname: 'Inbal',
    username: 'inbala', 
    password:'123',
    isAdmin: true
},
{
    fullname: 'Nadav',
    username: 'nadavm', 
    password:'123', 
    isAdmin: true
},
{
    fullname: 'Guest',
    username: 'guest', 
    password:'123', 
    isAdmin: false
},
]
var gUsers=[];
function query() {
  gUsers = load(KEY)
  if (!gUsers || !gUsers.length) {
    gUsers = gCreateUsers
      }
      _saveLocalUser();
  return Promise.resolve(gUsers);
}

function getUsers() {
    // return storageService.query('user')
    return httpService.get(`user`)
}

function getById(userId) {
    // return storageService.get('user', userId)
    return httpService.get(`user/${userId}`)
}
function remove(userId) {
    // return storageService.remove('user', userId)
    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    // return storageService.put('user', user)
    user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}

// async function increaseScore(by = SCORE_FOR_REVIEW) {
//     const user = getLoggedinUser()
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }

async function login(userCred) {
    // const users = await storageService.query('user')
    // const user = users.find(user => user.username === userCred.username)
    // return _handleLogin(user)

    const user = await httpService.post('auth/login', userCred)
    if (user) return _saveLocalUser(user)
}
async function signup(userCred) {
    // const user = await storageService.post('user', userCred)
    const user = await httpService.post('auth/signup', userCred)
    return _saveLocalUser(user)
}
async function logout() {
    sessionStorage.clear()
    return await httpService.post('auth/logout')
}
function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser'))
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