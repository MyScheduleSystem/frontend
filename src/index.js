import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import UserContextProvider from "./context/userContextProvider"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import App from "./app"
import "./index.css"


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <DndProvider backend={HTML5Backend}>
                <UserContextProvider>
                    <App />
                </UserContextProvider>
            </DndProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)