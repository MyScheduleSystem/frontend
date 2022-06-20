import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore"
import firestore from '../service/firebase'
import User from '../type/user'

const userFetcher = {}

userFetcher.signin = async function(user) {
    const auth = getAuth()
    return signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const userObj = userCredential.user
            const uuid = userObj.uid
            const token = userObj.accessToken
            const refreshToken = userObj.stsTokenManager.refreshToken
            const obj = {}
            obj.uuid = uuid
            obj.refreshToken = refreshToken
            obj.accessToken = token
            obj.authenticated = true
            return obj
        })
        .catch(error => console.error(error))
}

// TODO: 400에러가 있는데 도무지 이유를 모르겠다.
// TODO: firestore password 해시처리
userFetcher.signup = async (user) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const userObj = userCredential.user
            return userObj
        })
        .then((userObj) => {
            setDoc(doc(firestore, 'user', `${userObj.uid}`), {
                uuid: `${userObj.uid}`,
                usernmae: user.username,
                name: user.name,
                email: user.email,
                password: user.password,
            })
            const obj = {}
            obj.uuid = `${userObj.uid}`
            obj.username = user.username
            obj.name = user.name
            obj.email = user.email
        })
        .catch(error => console.error(error))
}

userFetcher.signout = async () => {
    User.clearStorage()
}

Object.freeze(userFetcher)
export default userFetcher