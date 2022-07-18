import Friend from "../type/friend"
import FriendList from "../type/friendList"

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
