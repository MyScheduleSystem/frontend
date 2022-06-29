import React from "react"
import { Route, Routes } from "react-router-dom"
import MyLayout from "../myLayout"
import Header from "../../components/nav/header"
import RightSidebar from "../../components/nav/rightSidebar"
import MyChatRoom from "../../components/chat/myChatRoom"
import SnsMainPage from "../snsMainPage"

const MyRouter = () => {
    return (
        <React.Fragment>
            <Header />
            <RightSidebar />
            <Routes>
                <Route path="/" element={<MyLayout />}/>
                <Route path="/chat" element={<MyChatRoom />} />
                <Route path="/sns" element={<SnsMainPage />} />
            </Routes>
        </React.Fragment>
    )
}

export default MyRouter