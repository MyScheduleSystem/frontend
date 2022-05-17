import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Lodash from "lodash";
import DateUtil from "../../util/dateUtil";
import MyModal from "../modal/myModal";
import calenderFetcher from '../../fetcher/calendarFetcher'

function MyCalendar() {
    const [isClickModal, setIsClickModal] = useState(false)
    const [allTodoItems] = useState({})
    const [selectedDate, setSelectedDate] = useState(null)

    useEffect(() => {
        setTodoItemList.call(this, allTodoItems)
    }, [allTodoItems])

    const onClickDayHandler = (e) => {
        const date = DateUtil.dateFormat(e)
        setSelectedDate(date)
        setIsClickModal(true)
    }

    const onCloseHandler = (closed) => {
        setIsClickModal(closed)
    }

    const onAddTodoList = (addedItem) => {
        allTodoItems[selectedDate] = addedItem
        // TODO: Fetch saveed result to server
    }

    return (
        <>
            <Calendar 
                calendarType="US"
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
        allTodoItems[dayKey] = []
        list.forEach((item) => {
            allTodoItems[dayKey].push({
                title: item.title,
                startDate: item.startDate,
                endDate: item.endDate,
                content: item.content,
                tileContent: item.tileContent,
            })
        })
    })
}
export default MyCalendar;
