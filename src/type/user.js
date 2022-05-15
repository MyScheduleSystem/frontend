import UserType from './userType';
import Storage from '../storage/storage';
import ErrorUtil from '../util/errorUtil';

class User extends UserType {
    constructor(uuid, nickname, token) {
        ErrorUtil.invalidParameter(token)
        super(uuid, nickname)
        this.token = token
        this.storage = new Storage(this.nickname) 
    }

    getStorage() {
        ErrorUtil.invalidParameter(this.nickname)
        return this.storage.getToken()
    }

    saveToken() {
        ErrorUtil.invalidParameter(this.token)
        this.storage.save(this.token)
    }

    getToken() {
        const token = this.storage.getToken()
        ErrorUtil.assert(token)
        return token
    }

    clearToken() {
        this.storage.clear()
    }
}

export default User