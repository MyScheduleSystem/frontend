import { Box } from '@mui/material';
import styled from 'styled-components';
import Sidebar from '../components/sidebar/sidebar';
import MyCalendar from '../components/calendar/myCalendar';

// TODO: Divide left, right
const MyLayout = () => {
    return (
        <Box sx={boxSizeStyle}>
            <Box sx={sidebarBoxStyle}>
                <Sidebar />
            </Box>
            <Box sx={myCalendarBoxStyle}>
                <MyCalendarBoxDiv>
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
`

export default MyLayout