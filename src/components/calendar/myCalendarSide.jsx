import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
} from '@mui/material'

function MyCalendarSide({ date }) {
    // TODO: Calender에서 Day 클릭 시 요일도 바뀌어야 함
    // TODO: TodoList를 어떻게 표현하면 좋을지 생각해야 함

    return  (
        <Box sx={wrapperBox}>
            <Typography
                sx={monthStyle}
                variant="h1"
            >
                {date.month}
            </Typography>
            <Typography
                sx={yearStyle}
                variant="h1"
            >
                {date.year}
            </Typography>
            <Typography
                sx={dayStyle}
                variant="h2"
            >
                {date.day}
            </Typography>
            <Typography
                sx={todoStyle}
                variant="h4"
            >
                TODO
            </Typography>
            <List>
                <ListItem sx={todoListStyle}>
                    <ListItemText primary="Add todo list" />
                </ListItem>
                <ListItem sx={todoListStyle}>
                    <ListItemText primary="Add todo list" />
                </ListItem>
            </List>
        </Box>
    )
}

const wrapperBox = {
    borderRadius: "10px 0 0 10px",
    display: 'inline-block',
    width: '30%',
    height: '100%',
    float: 'left',
    color: '#fff',
    backgroundColor: 'orange',
}

const monthStyle = {
    fontSize: '10rem',
    marginTop: '2rem',
}

const yearStyle = {
    fontSize: '5rem',
}

const dayStyle = {
    fontSize: '2rem',
}

const todoStyle = {
    fontSize: '1.5rem',
    marginTop: '2rem',
}

const todoListStyle = {
    textAlign: 'center',
}

export default MyCalendarSide