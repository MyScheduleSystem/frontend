import UserType from './userType'
import Storage from '../storage/storage'
import ErrorUtil from '../util/errorUtil'

class User extends UserType {
    constructor(uuid, nickname, infoMessage, email, name) {
        super(uuid, nickname, infoMessage, email, name, 'user')
        ErrorUtil.invalidParameter(uuid)
    }
}

User.saveRefreshStorage = function(refreshToken) {
    Storage.saveRefershToken(refreshToken)
}

User.checkForUserPersistence = function() {
    return Storage.checkPersistenceUser()
}

User.clearStorage = function() {
    Storage.clear()
}

Object.freeze(User)
export default User