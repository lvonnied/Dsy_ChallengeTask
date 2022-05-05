import { dataBase } from "./database-connection";

export class ToDo {
  public create: string;
  constructor(
    public due: Date,
    public title: string,
    public importance: number,
    public completion: boolean,
    public desc: string
  ) {
    this.create = new Date().toISOString().substring(0, 10);
  }
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
    async all(orderBy: object, showFinished?: boolean) {
      return dataBase.selectAllTodos(orderBy, showFinished);
    }
    async update(id: number, due: Date, title: string, importance: number, completion: boolean, desc: string) {
      return dataBase.updateTodo(id, due, title, importance, completion, desc);
    }
}

export const toDoStore = new ToDoStore();
