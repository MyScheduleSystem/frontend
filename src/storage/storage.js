import SymbolName from '../util/symbolName'
import Cookies from 'universal-cookie'
import ErrorUtil from "../util/errorUtil"

const cookies = new Cookies()
const REFRESH_TOKEN = 'RefreshToken'

// Refresh token => cookie
class Storage extends SymbolName {
    constructor() {
        super('storage')
        SymbolName.freezeObject(this, Storage)
    }
}

// samesite option => cookie를 서로 공유 가능한가?
// strict: 같은 도메인에서 접근 가능
// Lax: a tag, link tag를 활용하여 이동 시 cookie 전송
// none, cross-site에서도 쿠기 전송이 가능해짐. 단, secure속성 추가
Storage.saveRefershToken = function(refreshToken) {
    ErrorUtil.invalidParameter(refreshToken)
    cookies.set(
        REFRESH_TOKEN,
        refreshToken,
        { sameSite: 'strict' },
    )
}

Storage.checkPersistenceUser = function() {
    return cookies.get(REFRESH_TOKEN)
}

Storage.clear = function() {
    cookies.remove(REFRESH_TOKEN)
}

export default Storage