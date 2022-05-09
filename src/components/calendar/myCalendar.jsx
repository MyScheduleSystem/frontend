import { useRef } from 'react'
import Calendar from 'react-calendar'
import Lodash from 'lodash'
import DateUtil from '../../util/dateUtil'

import 'react-calendar/dist/Calendar.css'

function MyCalendar({ todoList }) {
    const calendarRef = useRef()

    const onClickDayHandler = (e) => {
        console.log(e)
        console.log(calendarRef)
    }

    const setTileContent = (e) => {
        const formatedDate = DateUtil.dateFormat(e.date, 'YYYY-MM-DD')
        const rtnArr = []
        Lodash.forEach(todoList, (v) => {
            v.todo.forEach(item => {
                if(item.startDate === formatedDate) {
                    rtnArr.push(<p key={item.tileContent}>{item.tileContent}</p>)
                    return
                }
            })
        })
        return rtnArr
    }

    return (
        <Calendar
            ref={calendarRef}
            onClickDay={onClickDayHandler}
            tileContent={setTileContent}
        />
    )
}

export default MyCalendar