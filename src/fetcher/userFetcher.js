import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
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

userFetcher.signup = async (user) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const userObj = userCredential.user
            createUserDocument(userObj)
        })
        .catch(error => console.error(error))
}

userFetcher.signout = () => {
    const auth = getAuth()
    signOut(auth)
        .then(() => User.clearStorage())
        .catch(error => console.error(error))
}

async function createUserDocument(userObj) {
    await setDoc(doc(firestore, "users", userObj), {
        usernmae: userObj.username,
        name: userObj.name,
        email: userObj.email,
        password: userObj.password,
    })
}

Object.freeze(userFetcher)
export default userFetcher