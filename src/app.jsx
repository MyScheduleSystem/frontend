import React from "react";
import styles from "./app.module.css";
import TestData from "./dev/testData";

function App() {
    const data = getInitData.call(this);
    return (
        <div className={styles.body}>
            {data.title}
            <div>{data.contents.map((el) => el.description)}</div>
        </div>
    );
}

function getInitData() {
    return TestData.container.calender.todo;
}

export default App;
///asdfsdafsdafdsfs
