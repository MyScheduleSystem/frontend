import React from "react";
import styles from "./app.module.css";
import TestData from "./dev/testData";

function App() {
    const testData2 = getInitData.call(this);
    return (
        <div className={styles.body}>
            {testData2.title}
            <div>{testData2.contents.map((el) => el.description)}</div>
        </div>
    );
}

function getInitData() {
    return TestData.container.calender.todo;
}

export default App;
///asdfsdafsdafdsfs
