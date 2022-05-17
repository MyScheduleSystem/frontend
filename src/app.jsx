import React from "react";
import MyLayout from "./pages/myLayout";
import MyRouter from "./pages/router/myRouter";

// Modal Update, Delete 추가 - leo
// Router 달기 - leo

function App() {
    return (
        <MyLayout Route={<MyRouter />} />
    );
}

export default App;
