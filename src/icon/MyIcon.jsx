import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus,
    faMinus,
    faPencil,
    faHeart,
    faAngleDown,
    faCheck,
    faCheckCircle,
    faExclamationCircle,
    faPaperPlane,
    faAngleUp,
    faUserFriends,
    faCommentAlt,
    faCalendar,
    faSignIn,
    faRegistered,
    faSignOut,
    faUser,
    faLock,
} from "@fortawesome/free-solid-svg-icons";
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

        case 'heart':
            return faHeart

        case 'expand':
            return faAngleDown

        case 'check':
            return faCheck

        case 'checkCircle':
            return faCheckCircle

        case 'excalmationCircle':
            return faExclamationCircle

        case 'send':
            return faPaperPlane

        case 'expandOff':
            return faAngleUp

        case 'friends':
            return faUserFriends

        case 'chat':
            return faCommentAlt

        case 'calendar':
            return faCalendar

        case 'signin':
            return faSignIn

        case 'signout':
            return faSignOut

        case 'signup':
            return faRegistered

        case 'user':
            return faUser

        case 'password':
            return faLock

        default:
            ErrorUtil.notImplemented()
            return
    }
}

export default MyIcon