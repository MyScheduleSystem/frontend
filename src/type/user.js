import UserType from './userType';
import Storage from '../storage/storage';
import ErrorUtil from '../util/errorUtil';

class User extends UserType {
    constructor(uuid, nickname, token, infoMessage, email, name) {
        ErrorUtil.invalidParameter(token)
        super(uuid, nickname, infoMessage, email, name)
        this.token = token
    }
}

User.createStorage = function(uuid, token) {
    ErrorUtil.invalidParameter(uuid)
    ErrorUtil.invalidParameter(token)
    const storage = new Storage(uuid, token)
    return storage
}

User.clearStorage = function() {
    new Storage().clear()
}

Object.freeze(User)
export default User