import { useRef, useState, useCallback } from 'react'
import MyIcon from '../icon/MyIcon'
import MyStepper from './myStepper'
import AlertPopup from '../components/popup/alertPopup'
import {
    Container,
    Box,
    FormGroup,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    Button,
    Divider,
    CardMedia,
} from '@mui/material'
import Lodash from 'lodash'

const SignupForm = ({ isUserFailed, onSignupEvent, onClickUserServiceButtonEvent }) => {
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const [isValidUserInfo, setIsValidUserInfo] = useState({
        username: false,
        name: false,
        email: false,
        password: false,
    })
    const usernameRef = useRef()
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const onUsernameChangeHandler = useCallback((e) => {
        if(validateForUserInfo('username', e.target.value)) {
            setIsValidUserInfo((prev) => {
                return { ...prev, username: true }
            })
            return
        }
        setIsValidUserInfo((prev) => {
            return { ...prev, username: false }
        })
    }, [])

    const onNameChangeHandler = useCallback((e) => {
        if(validateForUserInfo('name', e.target.value)) {
            setIsValidUserInfo((prev) => {
                return { ...prev, name: true }
            })
            return
        }
        setIsValidUserInfo((prev) => {
            return { ...prev, name: false }
        })
    }, [])

    const onEmailChangeHandler = useCallback((e) => {
        if(validateForUserInfo('email', e.target.value)) {
            setIsValidUserInfo((prev) => {
                return { ...prev, email: true }
            })
            return
        }
        setIsValidUserInfo((prev) => {
            return { ...prev, email: false }
        })
    }, [])

    const onPasswordChangeHandler = useCallback((e) => {
        if(validateForUserInfo('password', e.target.value)) {
            setIsValidUserInfo((prev) => {
                return { ...prev, password: true }
            })
            return
        }
        setIsValidUserInfo((prev) => {
            return { ...prev, password: false }
        })
    }, [])

    const onClickRegisterButtonHandler = () => {
        const isValid = Lodash.cloneDeep(isValidUserInfo)
        let checkInfo = false
        Lodash.forEach(isValid, (v, k) => {
            if(v) {
                checkInfo = true
                return
            }
        })
        const user = {}
        user.username = usernameRef.current.value
        user.name = nameRef.current.value
        user.email = emailRef.current.value
        user.password = passwordRef.current.value
        Lodash.forEach(user, (v, k) => {
            if(v === '') {
                checkInfo = true
                return
            }
        })
        if(checkInfo) {
            setIsOpenPopup(true)
            return
        }
        onSignupEvent(user)
        setIsOpenPopup(isUserFailed)
    }

    const onClickLoginButtonHandler = (isChecked) => () => {
        onClickUserServiceButtonEvent(isChecked)
    }

    const validateForUserInfo = (target, value) => {
        switch(target) {
            case 'username': {
                const isValid = (() => {
                    const name = value.trim()
                    if(name.length !== value.length) return true
                    if(name.length < 4 || name.length === 0) return true
                    if(!(['!', '@', '$', '%', '`', ',', '.', ' '].every((e) => !name.includes(e)))) return true
                    return false
                })()
                return isValid
            }

            case 'name': {
                const isValid = (() => {
                    const name = value.trim()
                    if(name.length !== value.length) return true
                    if(name.length === 0) return true
                    if(!(['!', '@', '$', '%', '`', ',', '.', ' '].every((e) => !name.includes(e)))) return true
                    return false
                })()
                return isValid
            }

            case 'email': {
                const isValid = (() => {
                    // email 정규식 google 참고
                    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
                    const email = value.trim()
                    if(email.length !== value.length) return true
                    if(!emailRegex.test(email)) return true
                    return false
                })()
                return isValid
            }

            case 'password': {
                const isValid = (() => {
                    // password 정규식 google 참고 ( 특수문자 + 영문자 + 숫자 )
                    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
                    const password = value.trim()
                    if(password.length !== value.length) return true
                    if(!passwordRegex.test(password)) return true
                    if(password.length < 8) return true
                    return false
                })()
                return isValid
            }

            default:
                return null
        }
    }

    const onSetIsShowPopupEventHandler = (isChecked) => {
        setIsOpenPopup(isChecked)
    }

    return (
        <Container sx={container}>
            <MyStepper
                steps={[
                        'Create with Google',
                        'Enter your information',
                        'Create MSS account!',
                ]}
            />
            <Container sx={signupContainer}>
                <CardMedia
                    sx={cardMediaFontStyle}
                    component="img"
                    image={`/images/mss.png`}
                />
                <FormGroup sx={formStyle}>
                    <FormControl variants="standard" sx={formControltyle}>
                        <InputLabel>
                            With a start your username
                        </InputLabel>
                        <Input
                            type="text"
                            error={isValidUserInfo.username}
                            inputRef={usernameRef}
                            onChange={onUsernameChangeHandler}
                            startAdornment={
                                <InputAdornment position="start">
                                    <MyIcon name="user" />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl variants="standard" sx={formControltyle}>
                        <InputLabel>
                            With a start your name
                        </InputLabel>
                        <Input
                            type="text"
                            error={isValidUserInfo.name}
                            inputRef={nameRef}
                            onChange={onNameChangeHandler}
                            startAdornment={
                                <InputAdornment position="start">
                                    <MyIcon name="user" />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl variants="standard" sx={formControltyle}>
                        <InputLabel>
                            With a start your email
                        </InputLabel>
                        <Input
                            type="email"
                            error={isValidUserInfo.email}
                            inputRef={emailRef}
                            onChange={onEmailChangeHandler}
                            startAdornment={
                                <InputAdornment position="start">
                                    <MyIcon name="user" />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl variants="standard" sx={formControltyle}>
                        <InputLabel>
                            Enter your password
                        </InputLabel>
                        <Input
                            type="password"
                            error={isValidUserInfo.password}
                            inputRef={passwordRef}
                            onChange={onPasswordChangeHandler}
                            startAdornment={
                                <InputAdornment position="start">
                                    <MyIcon name="password" />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Box sx={buttonBoxStyle}>
                        <Button onClick={onClickRegisterButtonHandler}>
                            register
                        </Button>
                        <Divider/>
                        <Button onClick={onClickLoginButtonHandler(true)}>login</Button>
                        <Divider/>
                    </Box>
                </FormGroup>
            </Container>
            <AlertPopup
                isShowPopup={isOpenPopup}
                setIsShowPopupEvent={onSetIsShowPopupEventHandler}
                message="Check your account information!!"
            />
        </Container>
    )
}

const container = {
    textAlign: 'center',
}

const signupContainer = {
    marginTop: '2rem',
    border: 1,
    width: '50%',
    boxShadow: '0 10px 5px 5px rgba(0, 0, 0, 0.1)',
}

const formStyle = {
    margin: '10px',
}

const formControltyle = {
    marginBottom: '10px',
}

const buttonBoxStyle = {
    border: 1,
    textAlign: 'center',
}

const cardMediaFontStyle = {
    margin: '0 auto',
    mb: 2,
    mt: 2,
    width: '250px',
}

export default SignupForm