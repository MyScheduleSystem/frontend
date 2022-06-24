import SymbolName from "../../util/symbolName"
import ErrorUtil from "../../util/errorUtil"

class SnsType extends SymbolName {
    constructor(uuid, title, author, content, imgUrl, date, name) {
        super(name)
        ErrorUtil.invalidParameter(title)
        ErrorUtil.invalidParameter(author)
        ErrorUtil.invalidParameter(date)
        ErrorUtil.invalidParameter(uuid)
        ErrorUtil.typeCheck(title, "string")
        ErrorUtil.typeCheck(author, "string")
        ErrorUtil.typeCheck(imgUrl, "string")
        ErrorUtil.typeCheck(date, "string")
        ErrorUtil.typeCheck(content, "string")
        ErrorUtil.typeCheck(uuid, "string")
        this.title = title
        this.author = author
        this.content = content
        this.imgUrl = imgUrl
        this.date = date
        this.uuid = uuid

        SymbolName.freezeObject(this, SnsType)
    }
}

export default SnsType