import { useRef, useState } from "react";
import Calendar from "react-calendar";
import Lodash from "lodash";
import DateUtil from "../../util/dateUtil";
import MyModal from "../modal/myModal";

import "react-calendar/dist/Calendar.css";

function MyCalendar({ todoList }) {
    const [isClickModal, setIsClickModal] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [todoItems, setTodoItems] = useState();
    const calendarRef = useRef();

    const onClickDayHandler = (e) => {
        // console.log(e);
        // console.log(calendarRef);
        setIsClickModal(true);
        setTodoItemList.call(this, e, todoList, setTodoItems);
    };

    const onCloseHandler = (closed) => {
        setIsClickModal(closed);
    };

    const setTileContent = (e) => {
        const formatedDate = DateUtil.dateFormat(e.date, "YYYY-MM-DD");
        const rtnArr = [];
        Lodash.forEach(todoList, (v) => {
            v.todo.forEach((item) => {
                if (item.startDate === formatedDate) {
                    rtnArr.push(<p key={item.tileContent}>{item.tileContent}</p>);
                }
            });
        });
        return rtnArr;
    };

    return (
        <>
            <Calendar 
                ref={calendarRef} 
                onClickDay={onClickDayHandler} 
                tileContent={setTileContent}
                onOverBtn={setShowBtn}
                onOutBtn={showBtn}
            />
            {isClickModal && 
                <MyModal 
                    isClickModal={isClickModal} 
                    onClose={onCloseHandler} 
                    todoItems={todoItems} 
            />}
        </>
    );
}

function setTodoItemList(e, todoList, setTodoItems) {
    const desc = [];
    Lodash.forEach(todoList, (v) => {
        v.todo.forEach((item) => {
            if (item.startDate === DateUtil.dateFormat(e)) {
                const obj = {};
                obj.tileContent = item.tileContent;
                obj.content = item.content;
                desc.push(obj);
            }
        });
    });
    setTodoItems(desc);
}

export default MyCalendar;