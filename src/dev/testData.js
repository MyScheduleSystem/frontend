import ChatRoom from "../type/chatRoom"
import ChatRoomList from "../type/chatRoomList"
import Friend from "../type/friend"
import FriendList from "../type/friendList"
import User from "../type/user"
import Notify from "../type/notify"
import Message from "../type/message"

export function createChatRoomList() {
    const name = "FoxMon's Chat Room"
    const arr = []
    const users = []
    for (let i = 0; i < 5; i++) {
        users.push(
            new User(
                i,
                `FoxMon${i}`,
                "상메1",
                `FoxMon@1234${i + 100}`,
                `FoxMon${i + 1}`
            )
        )
    }
    for (let i = 0; i < 10; i++) {
        arr.push(new ChatRoom(i + 1, `${name}${i + 1}`, users))
    }
    const cArr = ChatRoomList.createChatRoomList(arr)
    return cArr
}

export function createNotify() {
    const testDays = [
        "2022-05-12",
        "2022-05-13",
        "2022-05-14",
        "2022-05-15",
        "2022-05-16",
        "2022-05-17",
        "2022-05-18",
        "2022-05-19",
        "2022-05-20",
        "2022-05-21",
    ]
    const isChecked = false
    const message = "Arrived Message!"
    const nArr = []
    testDays.forEach((d, i) => {
        const obj = new Notify(i, d, isChecked, message)
        nArr.push(obj)
    })
    return nArr
}

export function createMessage() {
    const testDays = [
        "2022-05-12",
        "2022-05-13",
        "2022-05-14",
        "2022-05-15",
        "2022-05-16",
        "2022-05-17",
        "2022-05-18",
        "2022-05-19",
        "2022-05-20",
    ]
    const isChecked = false
    const message = "Arrived Message!"
    const friendName = "FoxMon"
    const mArr = []
    testDays.forEach((d, i) => {
        const obj = new Message(
            i,
            `${message}${i}`,
            `${friendName}${i}`,
            isChecked,
            d,
            d
        )
        mArr.push(obj)
    })
    return mArr
}

export function createSnsFriendList() {
    const friendName = "이주빈"
    const createdAt = "2022-06-30"
    const friendImageUrl = "/images/instargramAvatar.jpg"
    const arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(
            new Friend(
                i + 1,
                `${friendName}`,
                `${createdAt}`,
                `${friendImageUrl}`
            )
        )
    }
    const sArr = FriendList.createFriendList(arr)
    return sArr
}
