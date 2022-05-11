import {Client, Query} from "ts-postgres"
import process from "process"
import dotenv from "dotenv"

["exit", "SIGINT", "SIGUSR1", "SIGUSR2", "uncaughtException", "SIGTERM"].forEach((eventType) => {
    process.on(eventType, exitHandler.bind(null, eventType))
})

dotenv.config()

async function exitHandler(codeString: string, codeValue: number) {
    await dataBase.closeConnection()
    console.log("reason: " + codeString)
    process.exit(codeValue)
}

export class DataBase {
    private client: Client

    constructor() {
        const database = process.env.POSTGRES_DB?.toString()
        const host = process.env.POSTGRES_HOST?.toString()
        const user = process.env.POSTGRES_USER?.toString()
        const password = process.env.POSTGRES_PASS?.toString()

        this.client = new Client({"host": host, "database": database, "user": user, "password": password})

        // TODO: find a way to eliminate this Race condition
        this.client.connect().then(() => console.log("connected to DB")).catch(() => {
            console.log("couldn't connect to DB: shutting down")
            process.exit(1)
        })
    }

    async closeConnection() {
        await this.client.end()
        console.log("closed DB connection")
    }

    async execute(query: Query){
        return this.client.execute(query)
    }

    async executeAndReturnFirstRow(query: Query) {
        const result = await this.client.execute(query)
        return result.rows[0]
    }

    async selectTodoById(id: number) {
        const selectTodo = new Query (
            "SELECT * FROM todo WHERE id = $1",
            [id]
        )
        return this.executeAndReturnFirstRow(selectTodo)
    }

    async insertTodo(due: Date, title: string, importance: number, completion: boolean, desc: string) {
        console.log("INSERT TODO: " + due, title, importance, completion, desc)
        const insertTodo = new Query(
            "INSERT INTO todo VALUES (DEFAULT, to_timestamp($1), to_timestamp($2), $3, $4, $5, $6)",
            [due, Date.now() / 1000, title, importance, completion, desc]
        )
        return this.execute(insertTodo)
    }

    async selectAllTodos(showFinished: boolean) {
        let result;
        if(showFinished) {
            const selectTodos = new Query(
                "SELECT * FROM todo"
            )
            result = await this.execute(selectTodos)
        } else {
            const selectTodos = new Query(
                "SELECT * FROM todo WHERE completion = false"
            )
            result = await this.execute(selectTodos)
        }
        return result.rows;
    }

    async updateTodo(id: number, due: Date, title: string, importance: number, completion: boolean, desc: string) {
        const updateTodo = new Query(
            "UPDATE todo SET due = $1, title = $2, importance = $3, completion = $4, desc = $5 WHERE id = $6",
            [due, title, importance, completion, desc, id]
        )

        return this.execute(updateTodo)
    }
}

export const dataBase = new DataBase()
