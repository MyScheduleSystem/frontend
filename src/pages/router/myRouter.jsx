import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MyLayout from '../myLayout'
import Header from '../../components/nav/header'
import RightSidebar from '../../components/nav/rightSidebar'
import MyChatRoom from '../../components/chat/myChatRoom'

const MyRouter = () => {
    return (
        <React.Fragment>
            <Header />
            <RightSidebar />
            <Routes>
                <Route path="/" element={<MyLayout />}/>
                <Route path="/chat" element={<MyChatRoom />} />
            </Routes>
        </React.Fragment>
    )
}

export default MyRouter