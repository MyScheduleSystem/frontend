const container = {
    calender: {
        date: "2022-04",
        todo: {
            title: "SomeThing",
            contents: [],
        },
    },
    theme: {
        backgroundColor: "none",
        color: "none",
    },
    padding: "none",
    margin: "none",
    fontSize: "",
    fetchOption: {
        id: 1,
        // Todo
    },
};

{
    createTodoContent();
}

function createTodoContent() {
    container.calender.todo.contents = new Array(5).fill(null).map((e, i) => {
        const obj = {};
        obj.description = `Todo${i}`;
        return obj;
    });
}

export default { container };
