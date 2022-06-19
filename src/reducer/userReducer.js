import UserActionType from './action/userActionType'
import ErrorUtil from "../util/errorUtil"

const UserReducer = {}

UserReducer.type = "userReducer"

const UserInitialState = {}

UserInitialState.type = "userInitialState"
UserInitialState.refreshToken = null
UserInitialState.accessToken = null
UserInitialState.authenticated = false

UserReducer.clearUserState = function() {
    UserInitialState.refreshToken = null
    UserInitialState.accessToken = null
    UserInitialState.authenticated = false
}

// input: action => object,
// action: token(string), authenticated(boolean)
// access => authenticated: true, rejected => authenticated: false
UserReducer.userReducer = function(state, action) {
    switch(action.type) {
        case UserActionType.type.signup:
            ErrorUtil.invalidParameter(action.result)
            return {
                authenticated: action.result,
            }

        case UserActionType.type.signin:
            ErrorUtil.invalidParameter(action.accessToken)
            ErrorUtil.invalidParameter(action.refreshToken)
            ErrorUtil.invalidParameter(action.result)
            return {
                ...state,
                accessToken: action.accessToken,
                refreshToekn: action.refreshToken,
                authenticated: action.result,
            }

        case UserActionType.type.signout:
            UserReducer.clearUserState()
            return null

        default:
            ErrorUtil.notImplemented()
    }
}

Object.freeze(UserReducer)
export {
    UserReducer,
    UserInitialState,
}