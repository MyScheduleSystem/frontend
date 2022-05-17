import { Box } from '@mui/material';
import styled from 'styled-components';
import Sidebar from '../components/sidebar/sidebar';
import MyCalendar from '../components/calendar/myCalendar';
import MyCalendarSide from '../components/calendar/myCalendarSide';

// TODO: Divide left, right
const MyLayout = () => {
    return (
        <Box sx={boxSizeStyle}>
            <Box sx={sidebarBoxStyle}>
                <Sidebar />
            </Box>
            <Box sx={myCalendarBoxStyle}>
                <MyCalendarBoxDiv>
                    <MyCalendarSide />
                    <MyCalendar />
                </MyCalendarBoxDiv>    
            </Box>
        </Box>
    )
}

const boxSizeStyle = {
    width: '100%',
    height: '100vh',
}

const sidebarBoxStyle = {
    width: '20%',
    height: '100vh',
    padding: '0',
    float: 'left',
}

const myCalendarBoxStyle = {
    width: '80%',
    height: '100vh',
    float: 'right',
    textAlign: 'center',
}

const MyCalendarBoxDiv = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    color: black;
    width: 90%;
    height: 80vh;
    display: inline-block;
    margin-top: 5rem;

    .react-calendar__navigation button {
        all: unset;
        color: black;
        font-weight: bold;
        right: 75px;
        margin-top: 1rem;
        font-size: 2rem;
    }

    .react-calendar__month-view {
        width: 70%;
        float: right;
    }

    .react-calendar__month-view__weekdays {
        margin-top: 1.5rem;
        font-weight: bold;
        font-size: 1.3rem;
        color: black;
    }

    .react-calendar__month-view__days {
        margin-top: 1.4rem;

    }

    .react-calendar__month-view__days button {
        all: unset;
        margin-top: 3rem
    }

    .react-calendar__month-view__days button:hover {
        font-weight: bold;
    }

    .MuiBox-root {
        border-radius: 20px 0 0 20px;
        width: 30%;
        height: 100%;
        float: left;
        background-color: orange;
    }

    .MuiBox-root h1 {
        font-size: 10rem;
        margin-top: 2rem;
        color: white;
    }

    .MuiBox-root p {
        color: white;
        font-weight: bolder;
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-right: 7.5rem;
    }

    .MuiBox-root li {
        color: white;
        margin-top: 1rem;
        margin-right: 4.5rem;

    }
`

export default MyLayout