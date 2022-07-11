import {
    collection,
    query,
    where,
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore"
import { firestore } from "../service/firebase"

const notifyFetcher = {}

notifyFetcher.allUserNotifyAlarm = function (uuid) {
    if (uuid) {
        const q = query(
            collection(firestore, "notify"),
            where("userUuid", "==", uuid)
        )
        return q
    }
}

notifyFetcher.createNotifyAlarm = function (userUuid, notify) {
    addDoc(collection(firestore, "notify"), {
        userUuid: userUuid,
        message: notify.message,
        startDate: notify.startDate,
        isChecked: false,
    })
}

notifyFetcher.updateCheckedNotifyAlarm = async function (uuid, userUuid, nObj) {
    const notify = doc(firestore, "notify", uuid)
    const updated = {}
    updated.userUuid = userUuid
    updated.uuid = uuid
    updated.isChecked = nObj.isChecked
    updated.message = nObj.message
    updated.startDate = nObj.startDate
    await updateDoc(notify, updated)
}

notifyFetcher.deleteNotifyAlarm = async function (uuid) {
    const notify = doc(firestore, "notify", uuid)
    await deleteDoc(notify)
}

export default notifyFetcher
