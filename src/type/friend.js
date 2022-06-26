import SymbolName from "../util/symbolName"

class Friend extends SymbolName {
    constructor(friendUuid, friendNickname, createdAt) {
        super("friend")
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