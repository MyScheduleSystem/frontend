import React from 'react'
import { 
    Box,
    Container,
    ListItemText,
    Divider,
    Avatar,
    Grid,
    Button,
}  from '@mui/material'

const MyCalendarUnCompleteList = ({ item }) => {
    const test = (i) => {
        console.log('test', i)
    }
    return (
        <Box sx={todoListBoxStyle}>
            {item.map((e, i) => {
                return (
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
                            <Button onClick={()=>test(i)}>TEXT</Button>
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

export default MyCalendarUnCompleteList