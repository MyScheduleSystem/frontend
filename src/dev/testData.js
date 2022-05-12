import DateUtil from '../util/dateUtil'

const TestData = {}
const userId = 1
const date = '2022-05'
// cardId는 고유해야한다.
const cardId = 1

TestData[userId] = {
    container: {
        year: '',
        month: '',
        [date]: {
            calendar: {
                [date]: {
                    [cardId]: [
                        {
                            title: '',
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
    const testDays = [
        '2022-05-12', '2022-05-13', '2022-05-14', '2022-05-15', '2022-05-16', 
        '2022-05-17', '2022-05-18', '2022-05-19', '2022-05-20', '2022-05-21',
    ]
    const cardId = 1
    calendarSpecJson = {}
    days.forEach((e, i) => {
        calendarSpecJson[testDays[i]] = {}
        calendarSpecJson[testDays[i]][cardId] = []
        const todoObj = {}
        todoObj.title = `Todo Title${i}`
        todoObj.tileContent = `Todo Tile${i}`
        todoObj.content = `Todo Content${i}`
        todoObj.startDate = DateUtil.dateCalculate(i, "add", "days")
        todoObj.endDate = '2022-05-27'
        calendarSpecJson[testDays[i]][cardId].push(todoObj)
    })
    return calendarSpecJson
}

export default function getTodoFetchResult() {
    const myData = create(TestData[userId].container[date].calendar)
    return myData
}