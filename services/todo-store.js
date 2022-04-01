"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoStore = exports.ToDoStore = exports.ToDo = void 0;
const nedb_promises_1 = __importDefault(require("nedb-promises"));
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
    constructor(db) {
        this.db = db;
        this.db =
            db || new nedb_promises_1.default({ filename: "data/todo-database.db", autoload: true });
    }
    async add(due, title, importance, completion, desc) {
        let todo = new ToDo(due, title, importance, completion, desc);
        return await this.db.insert(todo);
    }
    async get(id) {
        return await this.db.findOne({ _id: id });
    }
    async all(orderBy, showFinished) {
        if (showFinished === "false") {
            return this.db.find({ "completion": { $exists: false } }).sort(orderBy);
        }
        else {
            return this.db.find({}).sort(orderBy);
        }
    }
    async update(id, due, title, importance, completion, desc) {
        let todoupdate = new ToDo(due, title, importance, completion, desc);
        await this.db.update({ _id: id }, { $set: todoupdate });
        return await this.get(id);
    }
}
exports.ToDoStore = ToDoStore;
exports.toDoStore = new ToDoStore();
//# sourceMappingURL=todo-store.js.map