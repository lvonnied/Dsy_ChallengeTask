"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoStore = exports.ToDoStore = exports.ToDo = void 0;
const database_connection_1 = require("./database-connection");
class ToDo {
    constructor(due, title, importance, completion, desc) {
        this.due = due;
        this.title = title;
        this.importance = importance;
        this.completion = completion;
        this.desc = desc;
        this.create = new Date().toISOString().substring(0, 10);
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
        return database_connection_1.dataBase.selectAllTodos(orderBy, showFinished);
    }
    async update(id, due, title, importance, completion, desc) {
        return database_connection_1.dataBase.updateTodo(id, due, title, importance, completion, desc);
    }
}
exports.ToDoStore = ToDoStore;
exports.toDoStore = new ToDoStore();
//# sourceMappingURL=todo-store.js.map