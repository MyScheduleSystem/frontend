import ErrorUtil from '../util/errorUtil'

class UserType {
    constructor(uuid, nickname, infoMessage, email, name) {
        ErrorUtil.invalidParameter(uuid)
        this.uuid = uuid
        this.nickname = nickname
        this.infoMessage = infoMessage
        this.email = email
        this.name = name
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

    getEmail() {
        return this.email
    }

    getName() {
        return this.name
    }
}

export default UserType