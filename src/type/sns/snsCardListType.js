import SymbolName from "../../util/symbolName"
import ArrayUtil from "../../util/arrayUtil"
import ErrorUtil from "../../util/errorUtil"
import SnsType from "./snsType"

class _SnsCardListType extends SymbolName {
    constructor(snsCardListType) {
        super("snsCardListType")
        this.$_snsCardListType = snsCardListType
    }

    asSnsCardObject() {
        const obj = {}
        this.$_snsCardListType.forEach((e) => {
            obj[e.uuid] = {
                title: e.title,
                author: e.author,
                imgUrl: e.imgUrl,
                date: e.date,
                content: e.content,
            }
        })
        return obj
    }
}

const SnsCardListType = {}

SnsCardListType.createSnsCardListType = function(arr) {
    const sArray = ArrayUtil.createArray(arr, SnsType)
    ErrorUtil.assert(sArray.length > 1, "Array size must be longer than 1")
    return new _SnsCardListType(sArray)
}

Object.freeze(SnsCardListType)
export default SnsCardListType