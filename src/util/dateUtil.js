import moment from 'moment'
import ErrorUtil from './errorUtil'

// Object
const DateUtil = {}

DateUtil.dateFormat = function() {
    return moment().format("YYYY-MM-DD").split("T")[0]
}

DateUtil.dateFormat = function(date, foramt) {
    return moment(date, foramt).format().split("T")[0]
}

DateUtil.timeFormat = function() {
    return moment().format("hh:mm:ss")
}

DateUtil.dayFormat = function() {
    return moment().format("dddd")
}

// input: date, number, operation, days, months, years
// output: (add, subtract) date
// ex) 1, days => add 1 days
DateUtil.dateCalculate = function(number, operation, day) {
    switch(operation) {
        case "add":
            return moment().clone().add(number, day).format().split("T")[0]

        case "subtract":
            return moment().clone().subtract(number, day).format().split("T")[0]

        default:
            ErrorUtil.notImplemented()
            return
    }
}

DateUtil.isSame = function(current, compare) {
    return moment(current).isSame(compare)
}

DateUtil.isBetween = function(now, prev, next) {
    return moment(now).isBetween(prev, next)
}

export default DateUtil