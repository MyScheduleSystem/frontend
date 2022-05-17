import { Route, Routes } from 'react-router-dom'
import MyCalendar from '../../components/calendar/myCalendar'
import MyChatRoom from '../../components/chat/myChatRoom'

const MyRouter = () => {
    return (
        <Routes>
            <Route path="/" />
            <Route path="/calendar" element={<MyCalendar />} />
            <Route path="/signin" />
            <Route path="/signup" />
            <Route path="/profile/:username" />
            <Route path="/schedule-sns" />
            <Route path="/chat/:chatname" element={<MyChatRoom />} />
        </Routes>
    )
}

export default MyRouter