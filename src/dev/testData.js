import ChatRoom from "../type/chatRoom"
import ChatRoomList from "../type/chatRoomList"
import Friend from "../type/friend"
import FriendList from "../type/friendList"
import User from "../type/user"
import DateUtil from "../util/dateUtil"
import Notify from "../type/notify"
import TodoItem from "../type/todoItem"
import Message from "../type/message"

const TestData = {}
const userId = 1
const date = "2022-05"

TestData[userId] = {
    friend: [],
    container: {
        year: "",
        month: "",
        [date]: {
            calendar: {
                [date]:[
                    {
                        title: "",
                        content: "",
                        startDate: "",
                        endDate: "",
                    }
                ],
            },
        },
        theme: {
            color: "",
            backgroundColor: "",
        },
        boxStyle: {
            padding: "",
            margin: "",
        },
        fetchOption: {
            userId: 1,
            year: "",
            month: "",
            themeMode: "",
        }
    }
}

function create(calendarSpecJson) {
    const testDays = [
        "2022-06-01", "2022-06-02", "2022-06-03", "2022-06-04", "2022-06-05",
        "2022-06-06", "2022-06-07", "2022-06-08", "2022-06-09", "2022-06-10",
        "2022-06-11", "2022-06-12", "2022-06-13", "2022-06-14", "2022-06-15",
        "2022-06-16", "2022-06-17", "2022-06-18", "2022-06-19", "2022-06-20",
        "2022-06-21", "2022-06-22", "2022-06-23", "2022-06-24", "2022-06-25",
        "2022-06-26", "2022-06-27", "2022-06-28", "2022-06-29", "2022-06-30",
    ]
    calendarSpecJson = {}
    testDays.forEach((e, i) => {
        calendarSpecJson[e] = []
        const todoObj = {}
        todoObj.title = `Todo Title${i}`
        todoObj.content = `Todo Content${i}`
        todoObj.startDate = e
        todoObj.endDate = DateUtil.dateCalculate(e, i, "add", "days")
        todoObj.isCompleted = (i % 2 === 0) ? true : false
        calendarSpecJson[e].push(new TodoItem(i, todoObj.title, todoObj.content, todoObj.startDate, todoObj.endDate, todoObj.isCompleted))
    })
    calendarSpecJson["2022-06-19"] = []
    calendarSpecJson["2022-06-19"].push(new TodoItem(100, "Todo test velo", "Todo test100", "2022-06-19", "2022-06-20", false))
    calendarSpecJson["2022-06-19"].push(new TodoItem(101, "Todo test velo", "Todo test100", "2022-06-19", "2022-06-30", false))
    calendarSpecJson["2022-06-22"] = []
    calendarSpecJson["2022-06-22"].push(new TodoItem(102, "Todo test velo", "Todo test100", "2022-06-22", "2022-06-23", false))
    // console.log(calendarSpecJson)
    return calendarSpecJson
}

export function getTodoFetchResult() {
    const myData = create(TestData[userId].container[date].calendar)
    return myData
}

export function createFriendsList() {
    const name = "FoxMon"
    // const createdAt = "2022-05-20"
    const arr = []
    for(let i = 0; i < 10; i++) {
        arr.push(new Friend(i + 1, `${name}${i + 1}`))
    }
    const fArr = FriendList.createFriendList(arr)
    return fArr
}

export function createChatRoomList() {
    const name = "FoxMon's Chat Room"
    const arr = []
    const users = []
    for(let i = 0; i < 5; i++) {
        users.push(new User(i, `FoxMon${i}`, "상메1", `FoxMon@1234${i + 100}`, `FoxMon${i + 1}`))
    }
    for(let i = 0; i < 10; i++) {
        arr.push(new ChatRoom(i + 1, `${name}${i + 1}`, users))
    }
    const cArr = ChatRoomList.createChatRoomList(arr)
    return cArr
}

export function createNotify() {
    const testDays = [
        "2022-05-12", "2022-05-13", "2022-05-14", "2022-05-15", "2022-05-16",
        "2022-05-17", "2022-05-18", "2022-05-19", "2022-05-20", "2022-05-21",
    ]
    const isChecked = false
    const message = "Arrived Message!"
    const nArr =  []
    testDays.forEach((d) => {
        const obj = new Notify(i, d, isChecked, message, d)
        nArr.push(obj)
    })
    return nArr
}

export function createMessage() {
    const testDays = [
        "2022-05-12", "2022-05-13", "2022-05-14", "2022-05-15", "2022-05-16",
        "2022-05-17", "2022-05-18", "2022-05-19", "2022-05-20",
    ]
    const isChecked = false
    const message = "Arrived Message!"
    const friendName = "FoxMon"
    const mArr =  []
    testDays.forEach((d, i) => {
        const obj = new Message(i, `${message}${i}`, `${friendName}${i}`, isChecked, d, d)
        mArr.push(obj)
    })
    return mArr
}