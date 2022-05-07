"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoStore = exports.ToDoStore = exports.ToDo = void 0;
const database_connection_1 = require("./database-connection");
class ToDo {
    constructor(id, due, created, title, importance, completion, desc) {
        this.id = id;
        this.due = due;
        this.created = created;
        this.title = title;
        this.importance = importance;
        this.completion = completion;
        this.desc = desc;
    }
}
exports.ToDo = ToDo;
class ToDoStore {
    async add(due, title, importance, completion, desc) {
        return database_connection_1.dataBase.insertTodo(due, title, importance, completion, desc);
    }
    async get(id) {
        return await database_connection_1.dataBase.selectTodoById(id);
    }
    async all(orderBy, showFinished) {
        let todoArray = [];
        const todos = await database_connection_1.dataBase.selectAllTodos(orderBy, showFinished);
        for (let todo of todos) {
            const id = todo[0];
            const due = todo[1];
            const created = todo[2];
            const title = todo[3];
            const importance = todo[4];
            const completion = todo[5];
            const description = todo[6];
            todoArray.push(new ToDo(id, due, created, title, importance, completion, description));
        }
        return todoArray;
    }
    async update(id, due, title, importance, completion, desc) {
        return database_connection_1.dataBase.updateTodo(id, due, title, importance, completion, desc);
    }
}
exports.ToDoStore = ToDoStore;
exports.toDoStore = new ToDoStore();
//# sourceMappingURL=todo-store.js.map