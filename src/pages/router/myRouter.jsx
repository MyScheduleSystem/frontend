import { Route, Routes } from 'react-router-dom'
import MyLayout from '../myLayout'
import SigninForm from '../signinForm'
import SignupForm from '../signupForm'
import Header from '../../components/nav/header'
import MyChatRoom from '../../components/chat/myChatRoom'

const MyRouter = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MyLayout />}/>
                <Route path="/signin" element={<SigninForm />}/>
                <Route path="/signup" element={<SignupForm />}/>
                <Route path="/profile/:username" />
                <Route path="/schedule-sns" />
                <Route path="/chat" element={<MyChatRoom />} />
            </Routes>
        </>
    )
}

export default MyRouter