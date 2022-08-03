import {
    doc,
    deleteDoc,
    addDoc,
    collection,
    getDocs,
    updateDoc,
    onSnapshot,
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

chatRoomFetcher.updateChatRoom = function (uuid, updated) {
    const chatRoom = doc(firestore, "chatroom", uuid)
    updateDoc(chatRoom, updated)
}

chatRoomFetcher.deleteChatRoom = async function (chatRoomUuid) {
    const chatRoom = doc(firestore, "chatroom", `${chatRoomUuid}`)
    await deleteDoc(chatRoom)
}

// ?@? 기준으로 날짜/시간/메세지 나눔
// send: 2022-07-30?@?16:32?@?This is admin !
chatRoomFetcher.subscribeChatContents = async function (uuid) {
    onSnapshot(
        doc(firestore, "chatroom", uuid),
        { includeMetaDataChanges: true },
        (doc) => {
            console.log(doc.data())
        }
    )
}

Object.freeze(chatRoomFetcher)
export default chatRoomFetcher
