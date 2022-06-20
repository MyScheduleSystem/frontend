import ItemType from "./itemType"
import ErrorUtil from "../util/errorUtil"

class Message extends ItemType {
    constructor(msg, friendName, isChecked, startDate, endDate) {
        super(startDate, endDate, 'message')
        ErrorUtil.typeCheck(msg, 'string')
        this.msg = msg
        ErrorUtil.invalidParameter(friendName)
        this.friendName = friendName
        this.isChecked = isChecked
    }

    getMessage() {
        return this.msg
    }

    getIsChecked() {
        return this.isChecked
    }

    getFriendName() {
        return this.friendName
    }
}

Object.freeze(Message)
export default Message