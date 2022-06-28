import {
    useState,
    useEffect,
    useCallback,
    useContext,
} from "react"
import Calendar from "react-calendar"
import Lodash from "lodash"
import DateType from "../../type/dateType"
import MyModal from "../modal/myModal"
import calendarFetcher from "../../fetcher/calendarFetcher"
import TodoItem from "../../type/todoItem"
import MyCalendarTodoList from "./myCalendarTodoList"
import MyCalendarSide from "./myCalendarSide"
import { UserContext } from "../../context/userContextProvider"
import { Box } from "@mui/material"

function MyCalendar() {
    const [isClickModal, setIsClickModal] = useState(false)
    const [allTodoItems, setAllTodoItems] = useState({})
    const [selectedDate, setSelectedDate] = useState(null)
    const [sideDate, setSideDate] = useState({
        year: DateType.getYear(DateType.createDate()),
        month: DateType.getMonth(DateType.createDate()),
        day: DateType.getDay(),
    })
    const { userObj } = useContext(UserContext)

    useEffect(() => {
        setTodoItemList.call(this, setAllTodoItems)
    }, [])

    const onClickDayEventHandler = (e) => {
        const date = DateType.createDateFormat(e, "YYYY-MM-DD")
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
        setSideDate(rtnObj)
    }

    const onCloseEventHandler = useCallback((closed) => {
        setIsClickModal(closed)
    }, [])

    const onAddTodoListEventHandler = useCallback((addedItem) => {
        const arr = addedItem.map(e => new TodoItem(e.title, e.content, e.startDate, e.endDate, false))
        allTodoItems[selectedDate] = arr
        calendarFetcher.createTodoList(userObj.fetchOption.uuid, allTodoItems[selectedDate])
    }, [allTodoItems, selectedDate])

    const onCompletedEventHandler = useCallback((e) => {
        const obj = {}
        Lodash.forEach(allTodoItems, (data, dayKey) => {
            obj[dayKey] = []
            data.forEach((todo, i) => {
                if((todo.startDate === e.startDate) && (todo.endDate === e.endDate) && (todo.title === e.title)) {
                    const newObj = e
                    obj[dayKey].push(newObj)
                    return
                }
                const newObj = new TodoItem(i, todo.title, todo.content, todo.startDate, todo.endDate, todo.isCompleted)
                obj[dayKey].push(newObj)
            })
        })
        setAllTodoItems(() => Lodash.cloneDeep(obj))
    }, [allTodoItems])

    return (
        <Box sx={mainBoxSizeStyle}>
            <Box sx={myCalendarBoxStyle}>
                <MyCalendarSide date={sideDate} />
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
            </Box>
            <Box sx={myTodoListStyle}>
                <MyCalendarTodoList
                    todoItems={allTodoItems}
                    onCompletedEvent={onCompletedEventHandler}
                />
            </Box>
        </Box>
    )
}

function setTodoItemList(setAllTodoItems) {
    const todoList = calendarFetcher.getTodoFetchResult()
    const todoObj = {}
    Lodash.forEach(todoList, (list, dayKey) => {
        todoObj[dayKey] = []
        list.forEach((item, i) => {
            const obj = new TodoItem(i, item.title, item.content, item.startDate, item.endDate, item.isCompleted)
            todoObj[dayKey].push(obj)
        })
    })
    setAllTodoItems(() => Lodash.cloneDeep(todoObj))
}

export default MyCalendar

const mainBoxSizeStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
}

const myCalendarBoxStyle = {
    width: "75%",
    boxShadow: "5px 10px 5px 5px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#F8F8FF",
    border: "1px solid #eeeeee",
    borderRadius: "10px",
    height: "100%",
}

const myTodoListStyle = {
    width: "33%",
    height: "100%",
}