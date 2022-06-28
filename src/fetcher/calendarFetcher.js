import {
    getDocs,
    collection,
    addDoc,
} from "firebase/firestore"
import firestore from "../service/firebase"
import TodoItem from "../type/todoItem"

// For test
import { getTodoFetchResult } from "../dev/testData"

const calendarFetcher = {}

calendarFetcher.allCalenderTodoList = async function() {
    const qs = await getDocs(collection(firestore, "calendar"))
    const arr = []
    qs.forEach((doc) => {
        const obj = doc.data()
        arr.push(new TodoItem(obj.title, obj.content, obj.startDate, obj.endDate, obj.isCompleted))
    })
    return arr
}

// TODO: 중복되는 필드 검사
calendarFetcher.createTodoList = function(uuid, todoArr) {
    const userId = uuid
    todoArr.forEach((item) => {
        addDoc(collection(firestore, "calendar"), {
            uuid: userId,
            title: item.title,
            content: item.content,
            startDate: item.startDate,
            endDate: item.endDate,
            isCompleted: item.isCompleted,
        })
    })
}

// For test
calendarFetcher.getTodoFetchResult = () => {
    // 현재는 Dev니까 그냥 Data 가져오자
    const data = getTodoFetchResult()
    return data
}

Object.freeze(calendarFetcher)
export default calendarFetcher