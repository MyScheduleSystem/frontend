class Friend {
    constructor(friendUuid, friendNickname, createdAt) {
        this.friendUuid = friendUuid
        this.friendNickname = friendNickname
        this.createAt = createdAt
    }

    getFriendUuid() {
        return this.friendUuid
    }

    getFriendNickname() {
        return this.friendNickname
    }

    getCreatedAt() {
        return this.createAt
    }
}

export default Friend