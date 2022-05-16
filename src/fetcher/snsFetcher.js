import axios from 'axios'
import ErrorUtil from '../util/errorUtil'

const snsFetcher = {}

class _SnsFetcher {
    constructor(user, socket) {
        this.user = user
        this.socket = socket
        // 환경변수에 저장해야 하는건가?
        this.socketToken = 'myScheduleServiceSns'
    }

    getHeaders() {
        const header = this.user.getToken()
        ErrorUtil.assert(header, 'Authorization header must be exist!')
        return {
            Authorization: `Barer ${header}`
        }
    }

    onSync(callback) {
        return this.socket.onSync(this.socketToken, callback)
    }

    async sendSns(message) {
        // TODO: send sns
        ErrorUtil.notImplemented()
    }
}

snsFetcher.createSnsFetcher = function(user, socket) {
    ErrorUtil.invalidParameter(user)
    ErrorUtil.invalidParameter(socket)
    return _SnsFetcher(user, socket)
}

Object.freeze(snsFetcher)
export default snsFetcher