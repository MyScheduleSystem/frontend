import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar/sidebar";
import MyCalendar from "./components/calendar/myCalendar";
import MyCard from "./components/card/myCard";

function App() {
    return (
        <div>
            {/* <SideBar></SideBar> */}
            {/* <Routes>  
                <Route path="/" element={<MyCalendar />}/> 
            </Routes> */}
            <MyCalendar />
            {/* <MyCard></MyCard> */}
        </div>
    );
}
export default App;
