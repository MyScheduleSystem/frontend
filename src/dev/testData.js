import DateUtil from '../util/dateUtil'

const TestData = {}
const userId = 1
const date = '2022-05'
const day = '01'
// cardId는 고유해야한다.
const cardId = 1

TestData[userId] = {
    container: {
        year: '',
        month: '',
        [date]: {
            calendar: {
                [day]: {
                    [cardId]: [
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
    const testDays = [
        '12', '13', '14', '15', '16', 
        '17', '18', '19', '20', '21',
    ]
    const cardId = 1
    calendarSpecJson = {}
    days.forEach((e, i) => {
        calendarSpecJson[testDays[i]] = {}
        calendarSpecJson[testDays[i]][cardId] = []
        const todoObj = {}
        todoObj.tileContent = `Todo Title${i}`
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