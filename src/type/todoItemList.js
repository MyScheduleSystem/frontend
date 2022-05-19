import ArrayUtil from "../util/arrayUtil"
import TodoItem from "./todoItem"
import ErrorUtil from "../util/errorUtil"

const TodoItemList = {}

TodoItemList.createTodoItemList = function(array) {
    const tdArr = ArrayUtil.createArray(array, TodoItem)
    ErrorUtil.invalidParameter(ArrayUtil.size(tdArr) > 1)
    return tdArr
}

TodoItemList.createTodoStringList = function(array) {
    ErrorUtil.assert(!ArrayUtil.isEmpty(array), 'Array must be filled!')
    const tArr = array.map(item => item.content)
    tArr.every(e => ErrorUtil.typeCheck(e, 'string'))
    ErrorUtil.invalidParameter(ArrayUtil.size(tArr) > 1)
    return tArr
}

Object.freeze(TodoItemList)
export default TodoItemList