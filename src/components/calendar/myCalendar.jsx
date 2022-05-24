import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Lodash from "lodash";
import DateType from "../../type/dateType";
import MyModal from "../modal/myModal";
import calenderFetcher from '../../fetcher/calendarFetcher';

function MyCalendar({ onActiveStartDateChange }) {
    const [isClickModal, setIsClickModal] = useState(false)
    const [allTodoItems] = useState({})
    const [selectedDate, setSelectedDate] = useState(null)

    useEffect(() => {
        setTodoItemList.call(this, allTodoItems)
    }, [allTodoItems])

    const onClickDayHandler = (e) => {
        const date = DateType.createDateFormat(e, 'YYYY-MM-DD')
        setSelectedDate(date)
        setIsClickModal(true)
    }

    const onClickMonthHanlder = (e) => {
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
        onActiveStartDateChange(rtnObj)
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
                onActiveStartDateChange={onClickMonthHanlder}
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
