import {
    doc,
    deleteDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore"
import ChatRoom from "../type/chatRoom"
import { firestore } from "../service/firebase"

const chatRoomFetcher = {}

// chatRoomType에는 doc의 id가 있어야 하고
// chatRoom field에는 user들의 id가 있어야만 한다.
chatRoomFetcher.createChatRoom = function (
    uuid,
    userUuid,
    startDate,
    chatRoomName
) {
    addDoc(collection(firestore, "chatroom"), {
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

chatRoomFetcher.deleteChatRoom = async function (chatRoomUuid) {
    const chatRoom = doc(firestore, "chatRoom", `${chatRoomUuid}`)
    await deleteDoc(chatRoom)
}

Object.freeze(chatRoomFetcher)
export default chatRoomFetcher
