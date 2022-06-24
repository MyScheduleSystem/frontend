import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore"
import firestore from '../service/firebase'
import User from '../type/user'
import ErrorUtil from '../util/errorUtil'

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
    return createUserWithEmailAndPassword(auth, user.email, user.password)
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
            return obj
        })
        .catch(error => console.error(error))
}

userFetcher.signout = async () => {
    User.clearStorage()
}

userFetcher.signupWithGoogle = async function() {
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            return credential ? true : false
        })
        .catch(e => console.log(e))
}

userFetcher.signupWithGithub = function() {
    ErrorUtil.notImplemented()
}

Object.freeze(userFetcher)
export default userFetcher