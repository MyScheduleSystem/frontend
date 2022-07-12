import ChatRoom from "../type/chatRoom"
import ChatRoomList from "../type/chatRoomList"
import Friend from "../type/friend"
import FriendList from "../type/friendList"
import User from "../type/user"

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
