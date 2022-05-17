import ChatRoomType from './chatRoomType'
import User from './user'
import ArrayUtil from '../util/arrayUtil'
import ErrorUtil from '../util/ErrorUtil'
import Lodash from 'lodash'

class ChatRoom extends ChatRoomType {
    constructor(name, users) {
        super(name)
        // Users는 반드시 있어야 한다.
        ErrorUtil.assert(ArrayUtil.isEmpty(users) === false, 'User must be exist!')
        // 모든 Users는 User의 타입과 같아야 한다.
        Lodash.every(users, u => ErrorUtil.typeCheck(u, User))
        this.isGroupChat = ArrayUtil.size(users) <= 2 ? false : true
    }

    getParticipantsName() {
        return this.users.map(user => user.getNickname())
    }

    // TODO: Message 저장은 어떻게?
}

export default ChatRoom