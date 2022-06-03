import { useState, useRef } from 'react'
import AlertPopup from '../components/popup/alertPopup'
import MyIcon from '../icon/MyIcon'
import userFetcher from '../fetcher/userFetcher'
import {
    Container,
    Box,
    FormGroup,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    Typography,
    Button,
    Divider,
} from '@mui/material'

const SigninForm = () => {
    const [user, setUser] = useState({})
    const [isValidUserInfo, setIsValidUserInfo] = useState({
        username: false,
        password: false,
    })
    const [isShowPopup, setIsShowPopup] = useState(false)
    const textRef = useRef()
    const passwordRef = useRef()

    const onSigninButtonClickHandler = () => {
        const userInfo = {}
        userInfo.username = textRef.current.value
        userInfo.password = passwordRef.current.value
        if(!userInfo.username || !userInfo.password) {
            if(!userInfo.username) {
                setIsValidUserInfo((prev) => {
                    return { ...prev, username: true }
                })
            }
            if(!userInfo.password) {
                setIsValidUserInfo((prev) => {
                    return { ...prev, password: true }
                })
            }
            setIsShowPopup(true)
            return
        }
        setIsValidUserInfo((prev) => {
            return { ...prev, username: false }
        })
        setIsValidUserInfo((prev) => {
            return { ...prev, password: false }
        })
        setUser(() => Object.assign(user, userInfo))
        userFetcher.signin(user)
            .then((response) => {
                // 성공 시 Link to 이동
                const result = Object.assign({}, response)
                setIsShowPopup(false)
                console.log(result)
            })
            .catch(() => {
                setIsShowPopup(true)
            })
    }

    const onPopupCloseHanlder = (value) => {
        setIsShowPopup(value)
    }

    const onRegisterButtonClickHandler = () => {
        // 클릭 시 Link to 이동
    }

    return (
        <Container sx={signinContainer}>
            <FormGroup sx={formStyle}>
                <FormControl variants="standard" sx={formControltyle}>
                    <InputLabel>
                        With a start your username
                    </InputLabel>
                    <Input
                        type="text"
                        error={isValidUserInfo.username}
                        inputRef={textRef}
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
                        startAdornment={
                            <InputAdornment position="start">
                                <MyIcon name="password" />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Box sx={buttonBoxStyle}>
                    <Button onClick={onSigninButtonClickHandler}>login</Button>
                    <Divider />
                    <Typography>NO ACCOUNT ?</Typography>
                    <Divider />
                    <Button onClick={onRegisterButtonClickHandler}>register</Button>
                    <AlertPopup
                        isShowPopup={isShowPopup}
                        setIsShowPopup={onPopupCloseHanlder}
                        message="Check your input information"
                    />
                </Box>
            </FormGroup>
        </Container>
    )
}

const signinContainer = {
    marginTop: '8rem',
    textAlign: 'center',
    border: 1,
    width: '50%',
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

export default SigninForm