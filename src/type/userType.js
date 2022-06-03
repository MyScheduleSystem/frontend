import ErrorUtil from '../util/errorUtil'

class UserType {
    constructor(uuid, nickname, infoMessage) {
        ErrorUtil.invalidParameter(uuid)
        this.uuid = uuid
        this.nickname = nickname
        this.infoMessage = infoMessage
    }

    getId() {
        return this.uuid
    }

    getNickname() {
        return this.nickname
    }

    getInfoMessage() {
        return this.infoMessage
    }
}

export default UserType