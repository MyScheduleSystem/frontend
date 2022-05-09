import React from "react";
import styles from "./app.module.css";
import SideBar from "./components/sidebar/sidebar"
import MyCalendar from './components/calendar/myCalendar';
import myData from './dev/testData'

function App() {
    return (
        <div className={styles.body}>
            <SideBar></SideBar>
            <MyCalendar todoList={myData} />
        </div>
    );
}


export default App;
