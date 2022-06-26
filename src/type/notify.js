import ItemType from "./itemType"

class Notify extends ItemType {
    constructor(startDate, isChecked, message, endDate) {
        super(startDate, endDate, "notify")
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