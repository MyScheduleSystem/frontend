import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore"
import firestore from '../service/firebase'
import User from '../type/user'

const userFetcher = {}

userFetcher.signin = async function(user) {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const userObj = userCredential.user
            const uuid = userObj.uid
            const token = userObj.getIdToken()
            const createdUser = User.createStorage(uuid, token)
            createdUser.save()
        })
        .catch(error => console.error(error))
}

// TODO: 400에러가 있는데 도무지 이유를 모르겠다.
// firestore password 해시처리
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
            const storage = User.createStorage(obj.uuid, obj)
            storage.save()
        })
        .catch(error => console.error(error))
}

userFetcher.signout = () => {
    const auth = getAuth()
    signOut(auth)
        .then(() => User.clearStorage())
        .catch(error => console.error(error))
}

Object.freeze(userFetcher)
export default userFetcher