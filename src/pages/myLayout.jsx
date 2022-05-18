import { useState } from 'react'
import styled from 'styled-components';
import Sidebar from '../components/nav/sidebar';
import MyCalendar from '../components/calendar/myCalendar';
import MyCalendarSide from '../components/calendar/myCalendarSide';
import DateType from '../type/dateType';
import { Box } from '@mui/material';

// TODO: Divide left, right
const MyLayout = () => {
    const [sideDate, setSideDate] = useState({
        year: DateType.getYear(DateType.createDate()),
        month: DateType.getMonth(DateType.createDate()),
        day: DateType.getDay(),
    })

    const onActiveStartDateChange = (value) => {
        setSideDate(value)
    }

    return (
        <Box sx={boxSizeStyle}>
            <Box sx={sidebarBoxStyle}>
                <Sidebar />
            </Box>
            <Box sx={myCalendarBoxStyle}>
                <MyCalendarBoxDiv>
                    <MyCalendarSide date={sideDate} />
                    <MyCalendar onActiveStartDateChange={onActiveStartDateChange} />
                </MyCalendarBoxDiv>
            </Box>
        </Box>
    )
}

const boxSizeStyle = {
    width: '100%',
    height: '100%',
}

const sidebarBoxStyle = {
    width: '20%',
    height: '100%',
    float: 'left',
}

const myCalendarBoxStyle = {
    width: '80%',
    height: '100%',
    float: 'right',
    textAlign: 'center',
}

const MyCalendarBoxDiv = styled.div`
    border-radius: 10px;
    width: 80%;
    // height가 뭔가 이상한데?
    height: 78vh;
    display: inline-block;
    margin-top: 4rem;
    background-color: #e9e9e9;

    .react-calendar__navigation button {
        all: unset;
        font-weight: bold;
        margin: 1rem;
        font-size: 2rem;
    }

    .react-calendar__month-view {
        width: 100%;
    }

    .react-calendar__month-view__weekdays {
        margin-top: 1.5rem;
        font-weight: bold;
        font-size: 1.3rem;
    }

    .react-calendar__month-view__days button {
        all: unset;
        margin-top: 3rem
    }

    .react-calendar__month-view__days button:hover {
        font-weight: bold;
    }
`

export default MyLayout