import { useState } from 'react'
import styled from 'styled-components';
import MyCalendar from '../components/calendar/myCalendar';
import MyCalendarSide from '../components/calendar/myCalendarSide';
import DateType from '../type/dateType';
import { Container } from '@mui/material';

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
        <Container sx={boxSizeStyle}>
            <MyCalendarBoxDiv>
                <MyCalendarSide date={sideDate} />
                <MyCalendar onActiveStartDateChange={onActiveStartDateChange}/>
            </MyCalendarBoxDiv>
        </Container>
    )
}

const boxSizeStyle = {
    width: '100%',
    height: '100%',
    textAlign: 'center',
}

const MyCalendarBoxDiv = styled.div`
    border-radius: 10px;
    width: 70%;
    height: 100%;
    display: inline-block;
    margin-top: 5rem;
    background-color: #F8F8FF;
    box-shadow: 0 10px 5px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid #eeeeee;
    margin-left: -10rem;

    .react-calendar__navigation button {
        all: unset;
        margin: 1rem;
        font-size: 2rem;
    }

    .react-calendar__month-view {
        /* width: 100%; */
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
        margin-top: 2.5rem;
    }

    .react-calendar__month-view__days button:hover {
        font-weight: bold;
    }
`

export default MyLayout