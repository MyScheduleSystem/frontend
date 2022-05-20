import Friend from '../type/friend'
import FriendList from '../type/friendList'
import DateUtil from '../util/dateUtil'

const TestData = {}
const userId = 1
const date = '2022-05'

TestData[userId] = {
    friend: [],
    container: {
        year: '',
        month: '',
        [date]: {
            calendar: {
                [date]:[
                    {
                        cardId: 1,
                        title: '',
                        tileContent: '',
                        content: '',
                        startDate: '',
                        endDate: '',
                    }
                ],
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
    calendarSpecJson = {}
    days.forEach((e, i) => {
        calendarSpecJson[testDays[i]] = []
        const todoObj = {}
        todoObj.cardId = i + 1
        todoObj.title = `Todo Title${i}`
        todoObj.tileContent = `Todo Tile${i}`
        todoObj.content = `Todo Content${i}`
        todoObj.startDate = DateUtil.dateCalculate(i, "add", "days")
        todoObj.endDate = '2022-05-27'
        calendarSpecJson[testDays[i]].push(todoObj)
    })
    return calendarSpecJson
}

export function getTodoFetchResult() {
    const myData = create(TestData[userId].container[date].calendar)
    return myData
}

export function createFriendsList() {
    const name = 'FoxMon'
    const createdAt = '2022-05-20'
    const arr = []
    for(let i = 0; i < 10; i++) {
        arr.push(new Friend(i + 1, `${name}${i + 1}`, createdAt))
    }
    const fArr = FriendList.createFriendList(arr)
    return fArr
}