import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from "firebase/auth"
import {
    doc,
    setDoc,
    query,
    collection,
    where,
    getDocs,
} from "firebase/firestore"
import firestore from "../service/firebase"
import User from "../type/user"

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

userFetcher.signup = async (user) => {
    const auth = getAuth()
    return createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const userObj = userCredential.user
            return userObj
        })
        .then((userObj) => {
            setDoc(doc(firestore, "user", `${userObj.uid}`), {
                uuid: `${userObj.uid}`,
                usernmae: user.username,
                name: user.name,
                email: user.email,
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

userFetcher.signout = async () => {
    User.clearStorage()
}

userFetcher.getUserInformation = function(setUserObj) {
    // getAuth() => currentUser 체크하려면 onAuthStateChanged가 필요함.
    const auth = getAuth()
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userId = user.uid
            const q = query(collection(firestore, "user"), where("uuid", "==", userId))
            const querySnapshot = await getDocs(q)
            querySnapshot.docs.forEach((item) => {
                const obj = {}
                obj.accessToken = user.stsTokenManager.accessToken
                obj.refreshToken = user.stsTokenManager.refreshToken
                obj.authenticated = true
                obj.fetchOption = {}
                obj.fetchOption.uuid = item.data().uuid
                setUserObj(obj)
            })
        }
    })
}

Object.freeze(userFetcher)
export default userFetcher