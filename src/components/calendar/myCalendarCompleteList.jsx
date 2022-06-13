import React from 'react'
import { 
    Box,
    Container,
    ListItemText,
    Divider,
}  from '@mui/material'

const MyCalendarCompleteList = ({ item }) => {
    return (
        <Box sx={todoListBoxStyle}>
            <Container>
                <ListItemText primary={item.title} />
                <Divider />
                <ListItemText secondary={item.startDate} />
                <ListItemText secondary={item.endDate} />
                <ListItemText secondary={item.content} />
            </Container>
        </Box>
    )
}

const todoListBoxStyle = {
    alignItems: 'center',
    boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: "10px 10px 10px 10px",
}

export default MyCalendarCompleteList