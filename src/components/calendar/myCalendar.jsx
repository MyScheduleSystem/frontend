import { useState } from "react";
import Calendar from "react-calendar";
import Lodash from "lodash";
import DateUtil from "../../util/dateUtil";
import MyModal from "../modal/myModal";
import calenderFetcher from '../../fetcher/calenderSaveFetcher'

import "react-calendar/dist/Calendar.css";

function MyCalendar() {
    const [isClickModal, setIsClickModal] = useState(false);
    const [todoItems] = useState([]);
    const todoList = calenderFetcher.getTodoFetchResult()

    const onClickDayHandler = (e) => {
        setIsClickModal(true);
        setTodoItemList.call(this, e, todoList, todoItems);
    }

    const onCloseHandler = (closed) => {
        setIsClickModal(closed);
    }

    const onAddTodoList = (addedItem) => {
        todoItems.push(...addedItem)
    }

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
                onClickDay={onClickDayHandler} 
                tileContent={setTileContent}
            />
            {isClickModal && 
                <MyModal 
                    isClickModal={isClickModal} 
                    onClose={onCloseHandler} 
                    onAddList={onAddTodoList}
                    todoItems={todoItems} 
            />}
        </>
    );
}

function setTodoItemList(e, todoList, todoItems) {
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
    todoItems.push(...desc);
}
export default MyCalendar;
