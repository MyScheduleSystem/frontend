import DateType from './dateType'
import ErrorUtil from '../util/errorUtil'

class ItemType {
    constructor(startDate, endDate) {
        this.startDate = startDate
        ErrorUtil.typeCheck(this.startDate, 'string')
        this.endDate = endDate
        ErrorUtil.typeCheck(this.endDate, 'string')
    }

    getStartDate() {
        return this.startDate
    }

    getEndDate() {
        return this.endDate
    }

    calculateDestinationDay() {
        return DateType.dateFromDate(this.startDate, this.endDate, 'days')
    }
}

export default ItemType