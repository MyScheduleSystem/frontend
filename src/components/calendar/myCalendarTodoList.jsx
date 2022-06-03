import { 
    Box,
    List, 
    ListItem, 
    ListItemText, 
    ListSubheader, 
}  from '@mui/material'

const MyCalendarTodoList = ({ todoItems }) => {
    return (
        <Box sx={todoListBoxStyle}>
            <List 
                sx={todoListStyle} 
                subheader={
                    <ListSubheader>TodoList</ListSubheader>
                }
            >
                {todoItems.map((value, i) => {
                    return ( 
                        <ListItem 
                            key={i}
                        >
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