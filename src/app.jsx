import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar/sidebar";
import MyCalendar from "./components/calendar/myCalendar";
import myData from "./dev/testData";

function App() {
    return (
        <div>
            {/* <SideBar /> */}
            <Routes>
                <Route path="/" exact element={App} />
                <Route path="/:path" element={<SideBar />}/>
                <Route path="/schedule" element={<MyCalendar todoList={myData} />}/> 
            </Routes>
        </div>
    );
}
export default App;
