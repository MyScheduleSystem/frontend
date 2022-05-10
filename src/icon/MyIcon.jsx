import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faPencil } from "@fortawesome/free-solid-svg-icons";
import ErrorUtil from "../util/errorUtil"

// 2022-05-07 FoxMon(김준호)
// Solid인 fortawesome만 사용하도록 함.
// props: plus, minus, pencil
// 추가할 경우, import에 추가

function MyIcon({ name }) {
    const icon = getIconName.call(this, name)

    return <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
}

function getIconName(name) {
    switch (name) {
        case 'plus':
            return faPlus

        case 'minus':
            return faMinus

        case 'pencil':
            return faPencil

        default:
            ErrorUtil.notImplemented()
            return
    }
}

export default MyIcon