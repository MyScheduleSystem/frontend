import { 
    doc,
    deleteDoc, 
    addDoc, 
    collection, 
    getDocs, 
    updateDoc 
} from "firebase/firestore"
import ChatRoom from "../type/chatRoom"
import { firestore } from "../service/firebase"

const chatRoomFetcher = {}

// chatRoomType에는 doc의 id가 있어야 하고
// chatRoom field에는 user들의 id가 있어야만 한다.
chatRoomFetcher.createChatRoom = async function (
    uuid,
    userUuid,
    startDate,
    chatRoomName
) {
    return addDoc(collection(firestore, "chatroom"), {
        uuid: uuid,
        userUuid: userUuid,
        startDate: startDate,
        chatRoomName: chatRoomName,
    })
}

chatRoomFetcher.allChatRoomLists = async function (uuid) {
    const qs = await getDocs(collection(firestore, "chatroom"))
    const result = []
    if (uuid) {
        qs.forEach((doc) => {
            const obj = doc.data()
            if (obj.userUuid.includes(uuid)) {
                result.push(
                    new ChatRoom(
                        doc.id,
                        obj.chatRoomName,
                        obj.startDate,
                        obj.userUuid
                    )
                )
            }
        })
        return result
    }
}

chatRoomFetcher.updateChatRoom = async function (userUuid, chatRoomName) {
    const chatRoom = doc(firestore, "chatRoom", uuid)
    const updated = {}
    updated.chatRoomName = chatRoomName
    updated.userUuid = userUuid
    await updateDoc(chatRoom, updated)
}

chatRoomFetcher.deleteChatRoom = async function (chatRoomUuid) {
    const chatRoom = doc(firestore, "chatroom", `${chatRoomUuid}`)
    await deleteDoc(chatRoom)
}

Object.freeze(chatRoomFetcher)
export default chatRoomFetcher
