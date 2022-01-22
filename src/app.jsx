import React from "react";
import styles from "./app.module.css";
import Login from "./components/page/login";

function App() {
  return (
    <div className={styles.body}>
      <Login/>
    </div>
  );
}

export default App;
