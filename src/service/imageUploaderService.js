import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage"
import { firestorage } from "./firebase"

const imageUploader = {}

imageUploader.type = "imageUploader"

imageUploader.imageUpload = function (uuid, file, folderName) {
    const imageRef = ref(firestorage, `${uuid}/${folderName}/${file.name}`)
    console.log(imageRef)
    uploadBytes(imageRef, file)
        .then((snapshot) => snapshot)
        .catch(e => console.error(e))
}

// TODO: 버그 수정
imageUploader.getProfileImageByUuid = function(uuid) {
    getDownloadURL(ref(firestorage, `${uuid}`))
        .then((url) => {
            console.log(url)
        })
        .catch(e => console.error(e))
}

Object.freeze(imageUploader)
export default imageUploader