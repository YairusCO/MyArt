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
}
const USER_DB = [
    {
        "_id": "u101",
        "fullname": "Nadav Mozes",
        "imgUrls": {
            "profile": "https://res.cloudinary.com/dgoonzit8/image/upload/v1611128015/nadav_z8aeoa.jpg",
            "banner": "https://res.cloudinary.com/arter/image/upload/c_fill,h_1080,w_2560/v1610633390/users/banners/0056_nm1u5s.jpg"
        },
        "description" : "Hi, my name is Nadav and i like to take photos of view and pets",
        "isAdmin": true,
        "username": "nadavm",
        "email": "nadavm@gmail.com",
        "password": "123456",
        "createdAt": 1312130853500,
        "reviews": [
            {
                "id": "r101",
                "rate": 5,
                "txt": "Best Artist EVER!!!",
                "byUser": {
                    "_id": "u102",
                    "fullname": "Inbal Azmon",
                    "imgUrl": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610978465/inbal_lb5cup.jpg"
                }
            },
            {
                "id": "r102",
                "rate": 4,
                "txt": "I've really liked her work.",
                "byUser": {
                    "_id": "u103",
                    "fullname": "Eliran Kadosh",
                    "imgUrl": "https://res.cloudinary.com/yair/image/upload/v1610992803/myArt/77024852_10219560406297249_3160022827982127104_o_aax41g.jpg"
                }
            }
        ]
    },
    {
        "_id": "u102",
        "fullname": "Inbal Azmon",
        "imgUrls": {
            "profile": "https://res.cloudinary.com/dgoonzit8/image/upload/v1610978465/inbal_lb5cup.jpg",
        },
        "description" :"Hi, my name is Inbal and i like to take photos of view and flowers",
        "isAdmin": true,
        "username": "inbala",
        "email": "inbala@gmail.com",
        "password": "123456",
        "createdAt": 1319620853500,
        "reviews": []
    },
    {
        "_id": "u103",
        "fullname": "Efrat Cohen",
        "imgUrls": {
            "profile": "https://res.cloudinary.com/arter/image/upload/v1610626024/users/profiles/mike-pence-rule_gq4ug4.jpg",
            "banner": "https://res.cloudinary.com/arter/image/upload/c_fill,h_1080,w_2560/v1610619722/users/banners/ayeletavni_horybm.jpg"
        },
        "description" :"NEED TO ADD",
        "isAdmin": false,
        "username": "efratcoco",
        "email": "effratt@gmail.com",
        "password": "secret",
        "createdAt": 1319159853500,
        "reviews": [
            {
                "id": "r103",
                "rate": 5,
                "txt": "Beautiful art. I'm very happy about my purchase.",
                "byUser": {
                    "_id": "u101",
                    "fullname": "Ayelet Avni",
                    "imgUrl": "https://res.cloudinary.com/arter/image/upload/v1610573149/users/profiles/ayeletavni_bfgfh7.jpg"
                }
            }
        ]
    },
    {
        "_id": "u104",
        "fullname": "Aaron Pikotsky",
        "imgUrls": {
            "profile": "https://res.cloudinary.com/arter/image/upload/v1610633664/users/profiles/004.jpg",
            "banner": "https://res.cloudinary.com/arter/image/upload/c_fill,h_1080,w_2560/v1610633075/users/banners/001.jpg"
        },
        "description" :"NEED TO ADD",
        "isAdmin": false,
        "username": "AaronPeacock",
        "email": "aaaaron@gmail.com",
        "password": "secret",
        "createdAt": 1319620853500,
        "reviews": []
    }
]
var gUsers=[];
function query() {
  gUsers = load(KEY)
  if (!gUsers || !gUsers.length) {
    gUsers = USER_DB;
      }
   //   _saveLocalUser();
  return Promise.resolve([...gUsers]);
}

function getUsers() {
     return storageService.query('user')
   // return httpService.get(`user`)
}

function getById(userId) {
    var user = gUsers.find(user => user._id === userId)
    return Promise.resolve({...user})
    // return storageService.get('user', userId)
    // return httpService.get(`user/${userId}`)
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
     const users = gUsers
     //await storageService.query()
     const user = users.find(user => user.username === userCred.username)
    // return _handleLogin(user)

    // const user = await httpService.post('auth/login', userCred)
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