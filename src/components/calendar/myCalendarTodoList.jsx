import { 
    Box,
    Checkbox, 
    List, 
    ListItem, 
    ListItemText, 
    ListSubheader, 
    Divider } 
from '@mui/material'
import { useState } from 'react'

const MyCalendarTodoList = ({ todoItem }) => {
    const [toDoChecked, setTodoCheked] = useState([])

    const toggleHandler = (value) => () => {
        const currentIndex = toDoChecked.indexOf(value)
        const newChecked = [...toDoChecked]
        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setTodoCheked(newChecked)
    }

    return (
        <Box sx={todoListBoxStyle}>
            <List sx={todoListStyle} subheader={<ListSubheader>TodoList</ListSubheader>}>
                {todoItem.map((value) => {
                    const labelId = value
                    return (
                        <ListItem 
                            key={value}
                            secondaryAction={
                                <Checkbox 
                                    edge='end'
                                    onChange={toggleHandler(value)}
                                    checked={toDoChecked.indexOf(value) !== -1}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            }
                            disabledPadding
                        >
                            <ListItemText id={labelId} secondary={value.title} />
                        </ListItem>
                    )
                })}
            </List>
            <Divider />
            <List sx={todoListStyle} subheader={<ListSubheader>Completed List</ListSubheader>}>
                {toDoChecked.map((value) => {
                    console.log(value)
                    return (
                        <ListItem key={value}>
                            <ListItemText secondary={value.title} />
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )
}

const todoListBoxStyle = {
    display: 'inline-block',
    float: 'right',
    height: '30rem',
    marginRight: '7rem',
    marginTop: '5rem',
    boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: "10px 30px 10px 10px",
}

const todoListStyle = {
    width: '12rem',
    maxWidth: '360',
    height: '14rem',
    bgColor: 'background.paper',
}

export default MyCalendarTodoList