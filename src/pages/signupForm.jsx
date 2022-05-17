import MyIcon from '../icon/MyIcon'
import {
    Box,
    FormGroup,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    Button,
    Divider,
} from '@mui/material'

// TODO: 서버 개통 및 password check, ID 중복검사
const SignupForm = () => {
    return (
        <Box sx={signupContainer}>
            <FormGroup sx={formStyle}>
                <FormControl variants="standard" sx={formControltyle}>
                    <InputLabel>
                        With a start your username
                    </InputLabel>
                    <Input
                        type="text"
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
                        startAdornment={
                            <InputAdornment position="start">
                                <MyIcon name="password" />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl variants="standard" sx={formControltyle}>
                    <InputLabel>
                        Check your password
                    </InputLabel>
                    <Input
                        type="password"
                        startAdornment={
                            <InputAdornment position="start">
                                <MyIcon name="password" />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Box sx={buttonBoxStyle}>
                    <Button>register</Button>
                    <Divider/>
                    <Button>login</Button>
                    <Divider/>
                </Box>
            </FormGroup>
        </Box>
    )
}

// TODO: width 조절
const signupContainer = {
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

export default SignupForm