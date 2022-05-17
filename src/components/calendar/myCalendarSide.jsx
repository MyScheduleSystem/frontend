import DateType from "../../type/dateType"
import { Box } from '@mui/material'

function MyCalendarSide() {
    return  (
        <Box>
            <h1>{DateType.getMonth(DateType.createDate())}</h1>
            <p>{DateType.getDay()}</p>
            <p>할일</p>
            <li>운동하기</li>
        </Box>
    )
}

export default MyCalendarSide