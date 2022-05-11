import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar/sidebar";
import MyCalendar from "./components/calendar/myCalendar";

function App() {
    return (
        <div>
            {/* <SideBar></SideBar> */}
            <Routes>  
                <Route path="/" element={<MyCalendar />}/> 
            </Routes>
        </div>
    );
}
export default App;
