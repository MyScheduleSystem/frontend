import MyCalendarCompleteList from './myCalendarCompleteList'
import { 
    Box,
    List, 
    ListItemText,
}  from '@mui/material'

const MyCalendarTodoList = ({ todoItems }) => {
    return (
        <Box sx={todoListBoxStyle}>
            {todoItems && todoItems.map((item, i) => {
                return (
                    item.isCompleted ? 
                    <List 
                        key={i}
                        sx={todoListStyle}
                    >
                        <ListItemText primary="Completed" />
                        <MyCalendarCompleteList item={item} />
                    </List> :
                    <List 
                        key={i}
                        sx={todoListStyle}
                    >
                        <ListItemText primary="Uncompleted" />
                        <MyCalendarCompleteList item={item} /> 
                </List>
            )})}
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