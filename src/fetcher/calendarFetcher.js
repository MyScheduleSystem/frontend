import {
    getDocs,
    collection,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
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
        arr.push(new TodoItem(obj.uuid, obj.title, obj.content, obj.startDate, obj.endDate, obj.isCompleted))
    })
    return arr
}

// TODO: 중복되는 필드 검사
// 문제: allTodoItems는 모든 todoItemList임
calendarFetcher.createTodoList = function(userUuid, todoArr, allTodoItems) {
    let ati = allTodoItems
    todoArr.forEach((item) => {
        addDoc(collection(firestore, "calendar"), {
            userUuid: userUuid,
            title: item.title,
            content: item.content,
            startDate: item.startDate,
            endDate: item.endDate,
            isCompleted: false,
        }).then((result) => {
            ati = todoArr.map(e => new TodoItem(result.id, item.title, item.content, item.startDate, item.endDate, false))
        })
    })
}

calendarFetcher.updateTodoList = async function(uuid, obj) {
    const calendar = doc(firestore, "calendar", `${uuid}`)
    await updateDoc(calendar, obj)
}

calendarFetcher.deleteTodoList = async function(uuid) {
    const calendar = doc(firestore, "calendar", `${uuid}`)
    await deleteDoc(calendar)
}

// For test
calendarFetcher.getTodoFetchResult = () => {
    // 현재는 Dev니까 그냥 Data 가져오자
    const data = getTodoFetchResult()
    return data
}

Object.freeze(calendarFetcher)
export default calendarFetcher