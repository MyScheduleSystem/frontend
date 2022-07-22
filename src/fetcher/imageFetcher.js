import { async } from "@firebase/util"
import { doc, updateDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL, list } from "firebase/storage"
import { firestorage, firestore } from "../service/firebase"
const imageFetcher = {}

imageFetcher.imageUpload = function (uuid, file, folderName) {
    const imageRef = ref(firestorage, `${uuid}/${folderName}/${file.name}`)
    uploadBytes(imageRef, file).then(() => {
        getDownloadURL(imageRef).then(async (url) => {
                const imageURL = doc(firestore, "user", uuid)
                await updateDoc(imageURL, {profileURL: url})
            })
            .catch(e => console.error(e))
    })
    .catch(e => console.error(e))
}

imageFetcher.snsImageUpload = function (uuid, file) {
    
}

imageFetcher.calendarImageUpload = function (uuid, docId, file) {
    const imageRef = ref(firestorage, `${uuid}/calendar/${docId}`)
    uploadBytes(imageRef, file).then(() => {
        getDownloadURL(imageRef).then(async (url) => {
            const calendarRef = doc(firestore, "calendar", uuid)
            await updateDoc(calendarRef, {canlendarImageURL: url})
        })
        .catch(e => console.error(e))
    })
    .catch(e => console.error(e))
}

imageFetcher.getProfileImageByUuid = function (uuid) {
    const ref = list(`${uuid}`)
    console.log(ref)
}

Object.freeze(imageFetcher)
export default imageFetcher