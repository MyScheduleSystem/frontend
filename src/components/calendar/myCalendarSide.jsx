import DateType from "../../type/dateType"
import { Box,  } from '@mui/material'

function MyCalendarSide() {
    const date = DateType.creatDate()
    const month = date.split('-')[1]

    return  (
        <Box>
            <h1>{month}</h1>
            <p>할일</p>
            <li>운동하기</li>
        </Box>
    )
}

export default MyCalendarSide