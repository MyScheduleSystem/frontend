import { useCallback } from 'react'
import MyCalendarCompleteList from './myCalendarCompleteList'
import MyCalendarUnCompleteList from './myCalendarUnCompleteList'
import { 
    Box,
    List, 
    ListItemText,
}  from '@mui/material'
import DateType from "../../type/dateType"
import Lodash from 'lodash'

const MyCalendarTodoList = ({ todoItems }) => {
    const dataForCompletedRender = useCallback((todoItems) => {
        const arr = []
        Lodash.forEach(todoItems, (todo) => {
            todo.forEach(e => {
                if(DateType.isBetween(DateType.createDate(), e.startDate, e.endDate) && e.isCompleted) {
                    arr.push(e)
                }
            })
        })
        return arr
    }, [])

    const dataForUnCompletedRender = useCallback((todoItems) => {
        const arr = []
        Lodash.forEach(todoItems, (todo) => {
            todo.forEach(e => {
                if(DateType.isBetween(DateType.createDate(), e.startDate, e.endDate) && !e.isCompleted) {
                    arr.push(e)
                }
            })
        })
        return arr
    }, [])

    return (
        <Box sx={todoListBoxStyle}>
            <List sx={todoListStyle}>
                <ListItemText primary="Completed" />
                <MyCalendarCompleteList item={dataForCompletedRender(todoItems)} />
            </List>
            <List sx={todoListStyle}>
                <ListItemText primary="UnCompleted" />
                <MyCalendarUnCompleteList item={dataForUnCompletedRender(todoItems)} />
            </List>
        </Box>
    )
}

const todoListBoxStyle = {
    boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: "10px 10px 10px 10px",
    height: '100%',
}

const todoListStyle = {
    width: '14rem',
    height: '13rem',
    bgColor: 'background.paper',
}

export default MyCalendarTodoList