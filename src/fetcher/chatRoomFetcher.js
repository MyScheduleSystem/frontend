import { 
    doc, 
    deleteDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore"
import { firestore } from "../service/firebase"

const chatRoomFetcher = {}

chatRoomFetcher.createChatRoom = function(uuid, userUuid, startDate, chatRoomName) {
    addDoc(collection(firestore, "chatroom"), {
        uuid: uuid,
        userUuid: userUuid,
        startDate: startDate,
        chatRoomName: chatRoomName,
    })
}

chatRoomFetcher.allChatRoomList = async function(uuid) {
    if (uuid) {
        const q = query(
            collection(firestore, "chatroom"),
            where("uuid", "==", uuid)
        )
        const querySnapShot = await getDocs(q)
        const result = []
        if (querySnapShot.empty) {
            return []
        } else {
            querySnapShot.forEach((e) => {
                const data = e.data()
                const obj = {}
                obj.uuid = data.uuid
                obj.chatRoomName = data.chatRoomName
                obj.startDate = data.startDate
                obj.userUuid = data.userUuid
                result.push(obj)
            })
        }
        return result
    }
}

chatRoomFetcher.deleteChatRoom = async function(chatRoomUuid) {
    const chatRoom = doc(firestore, "chatRoom", `${chatRoomUuid}`)
    await deleteDoc(chatRoom)
}

Object.freeze(chatRoomFetcher)
export default chatRoomFetcher
