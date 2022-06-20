import React from 'react'
import { 
    Box,
    Container,
    ListItemText,
    Divider,
}  from '@mui/material'

const MyCalendarUnCompleteList = ({ item }) => {
    return (
        <Box sx={todoListBoxStyle}>
            {item.map((e, i) => {
                return (
                    <Container key={i}>
                        <ListItemText primary={e.title} />
                        <ListItemText secondary={e.startDate} />
                        <ListItemText secondary={e.endDate} />
                        <ListItemText secondary={e.content} />
                        <Divider />
                    </Container>
                )
            })}
        </Box>
    )
}

const todoListBoxStyle = {
    overflow: 'auto',
    height: '185px',
    alignItems: 'center',
    boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.085)',
    borderRadius: "10px 10px 10px 10px",
}

export default MyCalendarUnCompleteList