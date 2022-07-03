import SymbolName from "../util/symbolName"

class Friend extends SymbolName {
    constructor(friendUuid, friendNickname, createdAt, friendImageUrl) {
        super("friend")
        this.friendUuid = friendUuid
        this.friendNickname = friendNickname
        this.createAt = createdAt
        this.friendImageUrl = friendImageUrl
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

    getFriendImageUrl() {
        return this.friendImageUrl
    }
}

export default Friend