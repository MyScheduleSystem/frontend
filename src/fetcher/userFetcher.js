import axios from 'axios'
import ErrorUtil from '../util/errorUtil'

const userFetcher = {}

class _UserFetcher {
    async signin(user) {
        
    }
}

userFetcher.createUserFetcher = function() {
    return _UserFetcher()
}

Object.freeze(userFetcher)
export default userFetcher