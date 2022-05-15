import DateUtil from '../util/dateUtil'
import ErrorUtil from '../util/errorUtil'

const DateType = {}

// YYYY-MM-DD
DateType.creatDate = function() {
    const createdDate = DateUtil.dateFormat()
    return createdDate
}

DateType.getYear = function(date) {
    ErrorUtil.invalidParameter(date)
    ErrorUtil.typeCheck(date, 'string')
    const year = date.split("-")[0]
    return year
}

DateType.getMonth = function(date) {
    ErrorUtil.invalidParameter(date)
    ErrorUtil.typeCheck(date, 'string')
    const month = date.split("-")[1]
    return month
}

DateType.getDateDay = function(date) {
    ErrorUtil.invalidParameter(date)
    ErrorUtil.typeCheck(date, 'string')
    const day = date.split("-")[2]
    return day
}

Object.freeze(DateType)
export default DateType