import {
    getDocs,
    collection,
    addDoc,
} from "firebase/firestore"
import firestore from "../service/firebase"

// For test
import { getTodoFetchResult } from "../dev/testData"

const calendarFetcher = {}

// get all documents in the calendar collection
// output: random key and calendar field(TodoList)
calendarFetcher.allCalenderDocument = async function() {
    const qs = await getDocs(collection(firestore, "calendar"))
    console.log(qs)
    qs.forEach((doc) => {
        // doc.data() is nevery undefined for query doc snapshots
        console.log(doc.data())
    })
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
    // TODO: axios
    // 현재는 Dev니까 그냥 Data 가져오자
    const data = getTodoFetchResult()
    return data
}

Object.freeze(calendarFetcher)
export default calendarFetcher