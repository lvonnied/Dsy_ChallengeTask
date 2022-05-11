"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataBase = exports.DataBase = void 0;
const ts_postgres_1 = require("ts-postgres");
const process_1 = __importDefault(require("process"));
["exit", "SIGINT", "SIGUSR1", "SIGUSR2", "uncaughtException", "SIGTERM"].forEach((eventType) => {
    process_1.default.on(eventType, exitHandler.bind(null, eventType));
});
async function exitHandler(codeString, codeValue) {
    await exports.dataBase.closeConnection();
    console.log("reason: " + codeString);
    process_1.default.exit(codeValue);
}
class DataBase {
    constructor() {
        const database = "todos";
        const host = "postgres";
        const user = "postgres"; //process.env.POSTGRES_USER?.toString()
        const password = "postgres"; //process.env.POSTGRES_PASS?.toString()
        this.client = new ts_postgres_1.Client({ "host": host, "database": database, "user": user, "password": password });
        // TODO: find a way to eliminate this Race condition
        this.client.connect().then(() => console.log("connected to DB")).catch(() => {
            console.log("couldn't connect to DB: shutting down");
            process_1.default.exit(1);
        });
    }
    async closeConnection() {
        await this.client.end();
        console.log("closed DB connection");
    }
    async execute(query) {
        return this.client.execute(query);
    }
    async executeAndReturnFirstRow(query) {
        const result = await this.client.execute(query);
        return result.rows[0];
    }
    async selectTodoById(id) {
        const selectTodo = new ts_postgres_1.Query("SELECT * FROM todo WHERE id = $1", [id]);
        return this.executeAndReturnFirstRow(selectTodo);
    }
    async insertTodo(due, title, importance, completion, desc) {
        console.log("INSERT TODO: " + due, title, importance, completion, desc);
        const insertTodo = new ts_postgres_1.Query("INSERT INTO todo VALUES (DEFAULT, to_timestamp($1), to_timestamp($2), $3, $4, $5, $6)", [due, Date.now() / 1000, title, importance, completion, desc]);
        return this.execute(insertTodo);
    }
    async selectAllTodos(showFinished) {
        let result;
        if (showFinished) {
            const selectTodos = new ts_postgres_1.Query("SELECT * FROM todo");
            result = await this.execute(selectTodos);
        }
        else {
            const selectTodos = new ts_postgres_1.Query("SELECT * FROM todo WHERE completion = false");
            result = await this.execute(selectTodos);
        }
        return result.rows;
    }
    async updateTodo(id, due, title, importance, completion, desc) {
        const updateTodo = new ts_postgres_1.Query("UPDATE todo SET due = $1, title = $2, importance = $3, completion = $4, desc = $5 WHERE id = $6", [due, title, importance, completion, desc, id]);
        return this.execute(updateTodo);
    }
}
exports.DataBase = DataBase;
exports.dataBase = new DataBase();
//# sourceMappingURL=database-connection.js.map