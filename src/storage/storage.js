import ErrorUtil from "../util/errorUtil"

class Storage {
    constructor(uuid, obj) {
        this.uuid = uuid
        this.obj = obj
    }

    save() {
        // Storage를 제대로 생성하지 않고 save만 사용하는 경우. 예외처리
        ErrorUtil.invalidParameter(this.uuid)
        ErrorUtil.invalidParameter(this.obj)
        localStorage.setItem(this.uuid, JSON.stringify(this.obj))
    }

    getToken() {
        // uuid 없이 token에 접근하려는 경우 예외처리
        ErrorUtil.invalidParameter(this.uuid)
        return JSON.parse(localStorage.getItem(this.uuid))
    }

    clear() {
        localStorage.clear()
    }
}

Storage.checkPersistenceUser = function(uuid) {
    return JSON.parse(localStorage.getItem(uuid))
}

Object.freeze(Storage)
export default Storage