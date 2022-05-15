import ErrorUtil from '../util/errorUtil'

class UserType {
    constructor(uuid, nickname) {
        ErrorUtil.invalidParameter(uuid)
        this.uuid = uuid
        this.nickname = nickname
    }

    getId() {
        return this.uuid
    }

    getNickname() {
        return this.nickname
    }
}

export default UserType