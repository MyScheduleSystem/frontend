import DateUtil from '../util/dateUtil'

const TestData = {}
const userId = 1
const date = '2022-05'
const day = '01'

TestData[userId] = {
    container: {
        year: '',
        month: '',
        [date]: {
            calendar: {
                [day]: {
                    todo: [
                        {
                            tileContent: '',
                            content: '',
                            startDate: '',
                            endDate: '',
                        }
                    ],
                }
            },
        },
        theme: {
            color: '',
            backgroundColor: '',
        },
        boxStyle: {
            padding: '',
            margin: '',
        },
        fetchOption: {
            userId: 1,
            year: '',
            month: '',
            themeMode: '',
        }
    }
}

function create(calendarSpecJson) {
    const days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']
    days.forEach((e, i) => {
        calendarSpecJson[e] = {}
        calendarSpecJson[e].todo = []
        const todoObj = {}
        todoObj.tileContent = `Todo Title${i}`
        todoObj.content = `Todo Content${i}`
        todoObj.startDate = DateUtil.dateCalculate(i, "add", "days")
        todoObj.endDaate = '2022-05-27'
        calendarSpecJson[e].todo.push(todoObj)
    })
    return calendarSpecJson
}

export default function getTodoFetchResult() {
    const myData = create(TestData[userId].container[date].calendar)
    return myData
}