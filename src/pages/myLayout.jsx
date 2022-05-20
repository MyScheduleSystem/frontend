import { useState } from 'react'
import styled from 'styled-components';
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

const myCalendarBoxStyle = {
    width: '100%',
    height: '100%',
    float: 'right',
    textAlign: 'center',
}

const MyCalendarBoxDiv = styled.div`
    border-radius: 10px;
    width: 55%;
    // height가 뭔가 이상한데?
    height: 68vh;
    display: inline-block;
    margin-top: 8rem;
    background-color: #F8F8FF;
    box-shadow: 20px 10px 3px -3px black;

    .react-calendar__navigation button {
        all: unset;
        margin: 1rem;
        font-size: 2rem;
    }

    .react-calendar__month-view {
        width: 100%;
    }

    .react-calendar__month-view__weekdays {
        margin-top: 1.5rem;
        font-weight: bold;
        font-size: 1.4rem;
    }

    .react-calendar__month-view__weekdays abbr{
        text-decoration: none;
    }

    .react-calendar__month-view__days button {
        all: unset;
        margin-top: 2.5rem
    }

    .react-calendar__month-view__days button:hover {
        font-weight: bold;
    }
`

export default MyLayout