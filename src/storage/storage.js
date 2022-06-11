import ErrorUtil from "../util/errorUtil"

class Storage {
    constructor(uuid, token) {
        this.uuid = uuid
        this.token = token
    }

    save() {
        // Storage를 제대로 생성하지 않고 save만 사용하는 경우. 예외처리
        ErrorUtil.invalidParameter(this.uuid)
        ErrorUtil.invalidParameter(this.token)
        localStorage.setItem(this.uuid, this.token)
    }

    getToken() {
        // uuid 없이 token에 접근하려는 경우 예외처리
        ErrorUtil.invalidParameter(this.uuid)
        return localStorage.getItem(this.uuid)
    }

    clear() {
        localStorage.clear()
    }
}

Object.freeze(Storage)
export default Storage