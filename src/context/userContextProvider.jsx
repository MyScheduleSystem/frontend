import { createContext, useState, useMemo } from 'react'
import userFetcher from '../fetcher/userFetcher'
import SignupForm from '../pages/signupForm'
import SigninForm from '../pages/signinForm'

const UserContext = createContext({})

// react 자식 component => children이라는 이름
function UserContextProvider({ children }) {
    const [userObj, setUserObj] = useState(null)
    const [isSignin, setIsSignin] = useState(false)
    const [isUserFailed, setIsUserFailed] = useState(false)

    const userContextObj = useMemo(() => ({
        userObj,
    }), [userObj])

    // google 로그인을 권장한 후, 추가적인 user의 정보를 수집해야 할 것 같다.
    const onSignupEventHandler = (user) => {
        const obj = {}
        obj.username = user.username
        obj.name = user.name
        obj.email = user.email
        obj.password = user.password
        const result = userFetcher.signup(obj)
        if(result) setUserObj(obj)
        else setIsUserFailed(true)
    }

    const onSigninEventHandler = async (user) => {
        const obj = {}
        obj.email = user.email
        obj.password = user.password
        const result = userFetcher.signin(obj)
        if(result) setUserObj(obj)
        else setIsUserFailed(true)
    }

    const onClickUserServiceButtonEvent = (isChecked) => {
        setIsSignin(isChecked)
    }

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