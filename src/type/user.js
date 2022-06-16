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

User.createStorage = function(uuid, obj) {
    ErrorUtil.invalidParameter(uuid)
    ErrorUtil.invalidParameter(obj)
    const storage = new Storage(uuid, obj)
    return storage
}

User.userPersistence = function(uuid) {
    return Storage.checkPersistenceUser(uuid)
}

User.clearStorage = function() {
    new Storage().clear()
}

Object.freeze(User)
export default User