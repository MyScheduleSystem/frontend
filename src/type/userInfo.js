import SymbolName from "../util/symbolName"

class UserInfo extends SymbolName {
    constructor(infoMessage, profileUrl) {
        super("userInformationType")
        this.infoMessage = infoMessage
        this.profileUrl = profileUrl

        SymbolName.freezeObject(UserInfo, this)
    }

    getInfoMessage() {
        return this.infoMessage
    }

    getProfileImageUrl() {
        return this.profileUrl
    }

    setInfoMessage(infoMessage) {
        this.infoMessage = infoMessage
    }

    setProfileUrl(profileUrl) {
        this.profileUrl = profileUrl
    }
}

export default UserInfo
