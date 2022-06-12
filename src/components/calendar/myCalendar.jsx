import { useState, useEffect } from "react"
import Calendar from "react-calendar"
import Lodash from "lodash"
import DateType from "../../type/dateType"
import MyModal from "../modal/myModal"
import calenderFetcher from '../../fetcher/calendarFetcher'
import TodoItem from "../../type/todoItem"

function MyCalendar({ onActiveStartDateChangeEvent }) {
    const [isClickModal, setIsClickModal] = useState(false)
    const [allTodoItems] = useState({})
    const [selectedDate, setSelectedDate] = useState(null)

    useEffect(() => {
        setTodoItemList.call(this, allTodoItems)
    }, [allTodoItems])

    const onClickDayEventHandler = (e) => {
        const date = DateType.createDateFormat(e, 'YYYY-MM-DD')
        setSelectedDate(date)
        setIsClickModal(true)
    }

    const onClickMonthEventHanlder = (e) => {
        // e.action => event
        // next, prev => month
        // next2, prev2 => year
        const dayString = DateType.castToDay(e.activeStartDate.toString().split(" ")[0])
        const dateString = DateType.castToMonth(e.activeStartDate.toString().split(" ")[1])
        const yearString = e.activeStartDate.toString().split(" ")[3]
        const rtnObj = {}
        rtnObj.year = yearString
        rtnObj.month = dateString
        rtnObj.day = dayString
        onActiveStartDateChangeEvent(rtnObj)
    }

    const onCloseEventHandler = (closed) => {
        setIsClickModal(closed)
    }

    const onAddTodoListEventHandler = (addedItem) => {
        const arr = addedItem.map(e => new TodoItem(e.title, e.content, e.startDate, e.endDate))
        allTodoItems[selectedDate] = arr
        // TODO: Fetch saveed result to server
    }

    return (
        <>
            <Calendar
                calendarType="US"
                onClickDay={onClickDayEventHandler}
                onActiveStartDateChange={onClickMonthEventHanlder}
            />
            {isClickModal &&
                <MyModal
                    isClickModal={isClickModal}
                    onCloseEvent={onCloseEventHandler}
                    onAddListEvent={onAddTodoListEventHandler}
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
            const obj = new TodoItem(item.title, item.content, item.startDate, item.endDate)
            allTodoItems[dayKey].push(obj)
        })
    })
}
export default MyCalendar;
