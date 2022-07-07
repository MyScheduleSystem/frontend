import SymbolName from "../util/symbolName"

class Friend extends SymbolName {
    constructor(uuid, nickname, createdAt, friendImageUrl, infoMessage) {
        super("friend")
        this.uuid = uuid
        this.nickname = nickname
        this.createAt = createdAt
        this.friendImageUrl = friendImageUrl
        this.infoMessage = infoMessage
    }

    getFriendUuid() {
        return this.uuid
    }

    getFriendNickname() {
        return this.nickname
    }

    getCreatedAt() {
        return this.createAt
    }

    getFriendImageUrl() {
        return this.friendImageUrl
    }

    getInfoMessage() {
        return this.infoMessage
    }
}

export default Friend