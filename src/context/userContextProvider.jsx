import {
    createContext,
    useState,
    useMemo,
    useCallback,
    useEffect,
} from 'react'
import SignupForm from '../pages/signupForm'
import SigninForm from '../pages/signinForm'
import { userFetcher } from '../fetcher/userFetcher'

export const UserContext = createContext({})

// react 자식 component => children이라는 이름.
// children props는 하위 컴포넌트가 어떻게 구성되어 있는지 모를 때 사용.
function UserContextProvider({ children }) {
    const [userObj, setUserObj] = useState(null)
    const [isSignin, setIsSignin] = useState(false)
    const [isUserFailed, setIsUserFailed] = useState(false)

    useEffect(() => {
        setUserObj(() => Object.assign({}, userFetcher.loginPersistence()))
    }, [])

    // google 로그인을 권장한 후, 추가적인 user의 정보를 수집해야 할 것 같다.
    const onSignupEventHandler = (user) => {
        const obj = {}
        obj.username = user.username
        obj.name = user.name
        obj.email = user.email
        obj.password = user.password
        const result = userFetcher.signup(obj)
        // TODO: 성공 시 어떻게?
        if(result) return
        else setIsUserFailed(true)
    }

    const onSigninEventHandler = (user) => {
        const obj = {}
        obj.email = user.email
        obj.password = user.password
        const result = userFetcher.signin(obj)
        if(result) setUserObj(() => Object.assign({}, userFetcher.loginPersistence()))
        else setIsUserFailed(true)
    }

    const onSignoutButtonClickHandler = useCallback(() => {
        userFetcher
            .signout()
            .then(() => setUserObj(null))
    }, [])

    const onClickUserServiceButtonEvent = (isChecked) => {
        setIsSignin(isChecked)
    }

    const userContextObj = useMemo(() => ({
        userObj,
        onSignoutButtonClickHandler,
    }), [userObj, onSignoutButtonClickHandler])

    return (
        <UserContext.Provider value={userContextObj}>
            {userObj ?
                children :
                isSignin === false ?
                    <SignupForm
                        isUserFailed={isUserFailed}
                        onSignupEvent={onSignupEventHandler}
                        onClickUserServiceButtonEvent={onClickUserServiceButtonEvent}
                    /> :
                    <SigninForm
                        isUserFailed={isUserFailed}
                        onSigninEvent={onSigninEventHandler}
                        onClickUserServiceButtonEvent={onClickUserServiceButtonEvent}
                    />
            }
        </UserContext.Provider>
    )
}

export default UserContextProvider