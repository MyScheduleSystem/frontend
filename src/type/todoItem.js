import ItemType from "./itemType"

class TodoItem extends ItemType {
    constructor(title, content, startDate, endDate, isCompleted) {
        super(startDate, endDate)
        this.title = title
        this.content = content
        this.isCompleted = isCompleted
    }

    getTitle() {
        return this.title
    }

    getContent() {
        return this.content
    }
}

export default TodoItem