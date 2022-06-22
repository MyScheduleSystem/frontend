import React, { useCallback } from 'react'
import { 
    Box,
    Container,
    ListItemText,
    Divider,
    Avatar,
    Grid,
    Button,
}  from '@mui/material'
import DateType from "../../type/dateType"
import Lodash from 'lodash'

const MyCalendarCompleteList = ({ item, onCompletedEvent }) => {
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

    const onCompletedEventHandler = (e) => {
        onCompletedEvent(e)
    }
    
    return (
        <Box sx={todoListBoxStyle}>
            {dataForCompletedRender(item).map((e, i) => {
                return (
                    // e.isCompleted ? 
                        <Container key={i}>
                            <Grid container>
                                <Grid item xs={2}>
                                    <Avatar alt='schedule' src='../../public/images.schedule.jpg' sx={{width: '50px', height: '50px', margin: 3}} />
                                </Grid>
                                <Grid item xs={8} sx={{marginLeft: 1}}>
                                    <ListItemText primary={e.title} />
                                    <Grid container sx={{marginLeft: 1.5}}>
                                        <Grid item xs={6}>
                                            <ListItemText secondary={e.startDate} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <ListItemText secondary={e.endDate} />
                                        </Grid>
                                    </Grid>

                                    <ListItemText secondary={e.content} />
                                </Grid>
                                <Grid item xs={1}>
                                    <Button onClick={()=>onCompletedEventHandler(e)}>TEXT</Button>
                                </Grid>
                            </Grid>
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

export default MyCalendarCompleteList