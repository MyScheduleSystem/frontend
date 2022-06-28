import ItemType from "./itemType"

class Notify extends ItemType {
    constructor(uuid, startDate, isChecked, message, endDate) {
        super(uuid, startDate, endDate, "notify")
        this.isChecked = isChecked
        this.message = message
    }

    getIsChecked() {
        return this.isChecked
    }

    getMessage() {
        return this.message
    }
}

Object.freeze(Notify)
export default Notify