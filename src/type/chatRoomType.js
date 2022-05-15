class ChatRoomType {
    constructor(name) {
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
}

export default ChatRoomType