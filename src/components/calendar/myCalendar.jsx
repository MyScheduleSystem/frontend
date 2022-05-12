import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Lodash from "lodash";
import DateUtil from "../../util/dateUtil";
import MyModal from "../modal/myModal";
import calenderFetcher from '../../fetcher/calendarFetcher'

import "react-calendar/dist/Calendar.css";

function MyCalendar() {
    const [isClickModal, setIsClickModal] = useState(false)
    const [allTodoItems, setAllTodoItems] = useState({})
    const [selectedDate, setSelectedDate] = useState(null)

    useEffect(() => {
        setTodoItemList.call(this, allTodoItems)
    })

    const onClickDayHandler = (e) => {
        const date = DateUtil.dateFormat(e)
        setSelectedDate(date)
        setIsClickModal(true)
    }

    const onCloseHandler = (closed) => {
        setIsClickModal(closed)
    }

    const onAddTodoList = (addedItem, cardId) => {
        // setAllTodoItems에서 오류가 발생한다 ㅠㅠ
        // allTodoItems[selectedDate][cardId] = []
        // const newElement = addedItem
        // setAllTodoItems(() => allTodoItems[selectedDate][cardId].push(...newElement))
    }

    return (
        <>
            <Calendar 
                onClickDay={onClickDayHandler} 
            />
            {isClickModal && 
                <MyModal 
                    isClickModal={isClickModal} 
                    onClose={onCloseHandler} 
                    onAddList={onAddTodoList}
                    todoItems={allTodoItems[selectedDate]} 
            />}
        </>
    );
}

function setTodoItemList(allTodoItems) {
    const todoList = calenderFetcher.getTodoFetchResult()
    Lodash.forEach(todoList, (list, dayKey) => {
        allTodoItems[dayKey] = {}
        Lodash.forEach(list, (item, k) => {
            allTodoItems[dayKey][k] = []
            item.forEach(value => {
                allTodoItems[dayKey][k].push({
                    title: value.title,
                    startDate: value.startDate,
                    endDate: value.endDate,
                    content: value.content,
                    tileContent: value.tileContent,
                })
            })
        })
    })
}
export default MyCalendar;
