import ErrorUtil from './errorUtil'
import Lodash from 'lodash'

const ArrayUtil = {}

ArrayUtil.removeDuplicate = function(array) {
    return [ ...new Set(array) ]
}

ArrayUtil.isEmpty = function(array) {
    const result = Lodash.isEmpty(array)
    return result
}

ArrayUtil.castToArray = function(array, type) {
    const result = ArrayUtil.removeDuplicate(Lodash.castArray(array))
    if(type !== undefined) ErrorUtil.assert(result.every(e => e instanceof type))
    return result
}

ArrayUtil.size = function(array) {
    return Lodash.size(array)
}

Object.freeze(ArrayUtil)
export default ArrayUtil