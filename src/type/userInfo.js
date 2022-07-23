import SymbolName from "../util/symbolName"

class UserInfo extends SymbolName {
    constructor(infoMessage, imgUrl) {
        super("userInformationType")
        this.infoMessage = infoMessage
        this.imgUrl = imgUrl

        SymbolName.freezeObject(UserInfo, this)
    }

    getInfoMessage() {
        return this.infoMessage
    }

    getImageUrl() {
        return this.imgUrl
    }
}

export default UserInfo
