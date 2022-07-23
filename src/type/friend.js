import SymbolName from "../util/symbolName"

class Friend extends SymbolName {
    constructor(uuid, nickname, friendImageUrl, infoMessage) {
        super("friend")
        this.uuid = uuid
        this.nickname = nickname
        this.friendImageUrl = friendImageUrl
        this.infoMessage = infoMessage
    }

    getFriendUuid() {
        return this.uuid
    }

    getFriendNickname() {
        return this.nickname
    }

    getFriendImageUrl() {
        return this.friendImageUrl
    }

    getInfoMessage() {
        return this.infoMessage
    }
}

Object.freeze(Friend)
export default Friend
