import { dataBase } from "./database-connection";

export class ToDo {
  constructor(
      public id: number,
      public due: Date,
      public created: Date,
      public title: string,
      public importance: number,
      public completion: boolean,
      public desc: string
  ) {}
}

export class ToDoStore {

  async add(
    due: Date,
    title: string,
    importance: number,
    completion: boolean,
    desc: string
  ) {
    return dataBase.insertTodo(due, title, importance, completion, desc);
  }
    async get(id: number) {
      return await dataBase.selectTodoById(id)
    }
    async all(showFinished: boolean) {
      let todoArray : ToDo[] = []
      const todos = await dataBase.selectAllTodos(showFinished);
      for(let todo of todos) {
        const id = todo[0] as number
        const due = todo[1] as Date
        const created = todo[2] as Date
        const title = todo[3] as string
        const importance = todo[4] as number
        const completion = todo[5] as boolean
        const description = todo[6] as string

        todoArray.push(new ToDo(id, due, created, title, importance, completion, description))
      }
      return todoArray
    }
    async update(id: number, due: Date, title: string, importance: number, completion: boolean, desc: string) {
      return dataBase.updateTodo(id, due, title, importance, completion, desc);
    }
}

export const toDoStore = new ToDoStore();
