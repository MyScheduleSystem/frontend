import { Route, Routes } from 'react-router-dom'
import MyLayout from '../myLayout'
import SigninForm from '../signinForm'
import SignupForm from '../signupForm'
import Header from '../../components/nav/header'
import Weather from '../../components/nav/weather'
import MyChatRoom from '../../components/chat/myChatRoom'

const MyRouter = () => {
    return (
        <>
            <Header />
            <Weather />
            <Routes>
                <Route path="/" element={<MyLayout />}/>
                <Route path="/signin" element={<SigninForm />}/>
                <Route path="/signup" element={<SignupForm />}/>
                <Route path="/chat" element={<MyChatRoom />} />
            </Routes>
        </>
    )
}

export default MyRouter