import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Calendar from "./components/calendar/calendar";

function App() {
  return (
    <div className={styles.body}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/calendar/*" element={<Calendar />} />
      </Routes>
    </div>
  )
}

export default App;
