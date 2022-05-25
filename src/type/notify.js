import ItemType from "./itemType";

class Notify extends ItemType {
    constructor(startDate, endDate, isChecked, message) {
        super(startDate, endDate)
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

export default Notify