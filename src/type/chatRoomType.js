import SymbolName from "../util/symbolName"

class ChatRoomType extends SymbolName {
    constructor(uuid, name, typeName) {
        super(typeName)
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

Object.freeze(ChatRoomType)
export default ChatRoomType