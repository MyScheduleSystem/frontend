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

const calendarFetcher = {}

// firestore에서는 userUuid가 있어야 하고
// 우리의 TodoItem에서는 doc의 key가 저장되어야만 한다.

calendarFetcher.allCalenderTodoList = async function() {
    const qs = await getDocs(collection(firestore, "calendar"))
    const arr = []
    qs.forEach((doc) => {
        const obj = doc.data()
        arr.push(new TodoItem(doc.id, obj.title, obj.content, obj.startDate, obj.endDate, obj.isCompleted))
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

// TODO: 바로 렌더링도 안되고 새로운 Doc이 생성됨
calendarFetcher.updateTodoList = async function(uuid, userUuid, obj) {
    const calendar = doc(firestore, "calendar", `${uuid}`)
    const updated = {}
    updated.title = obj.title
    updated.content = obj.content
    updated.startDate = obj.startDate
    updated.endDate = obj.endDate
    updated.userUuid = userUuid
    await updateDoc(calendar, obj)
}

// TODO: 바로 화면에 렌더링이 안됨
calendarFetcher.deleteTodoList = async function(uuid) {
    const calendar = doc(firestore, "calendar", `${uuid}`)
    await deleteDoc(calendar)
}

Object.freeze(calendarFetcher)
export default calendarFetcher