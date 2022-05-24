class ChatRoomType {
    constructor(uuid, name) {
        this.uuid = uuid
        this.name = name
        this.isGroupChat = null
    }

    isGroupChatRoom() {
        if(!this.isGroupChat) return false
        return true
    }

    getChatRoomName() {
        return this.name
    }

    getUuid() {
        return this.uuid
    }
}

export default ChatRoomType