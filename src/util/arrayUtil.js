import ErrorUtil from './errorUtil'
import Lodash from 'lodash'

const ArrayUtil = {}

ArrayUtil.removeDuplicate = function(array) {
    return [ ...new Set(array) ]
}

ArrayUtil.isEmpty = function(array) {
    const result = (array === undefined) ? true : Lodash.isEmpty(array)
    return result
}

ArrayUtil.castToArray = function(a, type) {
    const result = ArrayUtil.removeDuplicate(Lodash.castArray(a))
    if(type !== undefined) ErrorUtil.assert(result.every(e => e instanceof type))
    return result
}

Object.freeze(ArrayUtil)
export default ArrayUtil