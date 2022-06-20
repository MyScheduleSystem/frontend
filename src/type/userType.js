import SymbolName from '../util/symbolName'
import ErrorUtil from '../util/errorUtil'

class UserType extends SymbolName {
    constructor(uuid, nickname, infoMessage, email, name, typeName) {
        super(typeName)
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