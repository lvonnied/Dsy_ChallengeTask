import {Client, Query} from "ts-postgres"
import process from "process"

["exit", "SIGINT", "SIGUSR1", "SIGUSR2", "uncaughtException", "SIGTERM"].forEach((eventType) => {
    process.on(eventType, exitHandler.bind(null, eventType))
})

async function exitHandler(codeString: string, codeValue: number) {
    await dataBase.closeConnection()
    console.log("reason: " + codeString)
    process.exit(codeValue)
}

export class DataBase {
    private client: Client

    constructor() {
        const database = "todos"
        const user = process.env.POSTGRES_USER?.toString()
        const password = process.env.POSTGRES_PASS?.toString()

        this.client = new Client({"database": database, "user": user, "password": password})

        // TODO: find a way to eliminate this Race condition
        this.client.connect().then(_ => console.log("connected to DB"))
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
        const insertTodo = new Query(
            "INSERT INTO todo VALUES (DEFAULT, to_timestampt($1), to_timestamp($2), $3, $4, $5, $6)",
            [due, Date.now() / 1000, title, importance, completion, desc]
        )
        return this.execute(insertTodo)
    }

    async selectAllTodos(orderBy: object, showFinished?: boolean) {
        if(showFinished) {
            const selectTodos = new Query(
                "SELECT * FROM todo WHERE completion = false"
            )
            return this.execute(selectTodos)
        } else {
            const selectTodos = new Query(
                "SELECT * FROM todo"
            )
            return this.execute(selectTodos)

        }
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
