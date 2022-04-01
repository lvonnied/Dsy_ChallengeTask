import Datastore from "nedb-promises";

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
  constructor(public db?: Datastore) {
    this.db =
      db || new Datastore({ filename: "data/todo-database.db", autoload: true });
  }

  async add(
    due: Date,
    title: string,
    importance: number,
    completion: boolean,
    desc: string
  ) {
    let todo = new ToDo(due, title, importance, completion, desc);
    return await this.db!.insert(todo);
  }
    async get(id: any){
      return await this.db!.findOne({_id: id});
    }
    async all(orderBy: object, showFinished?: string) {
      if (showFinished === "false") {
        return this.db!.find({"completion": {$exists: false}}).sort(orderBy);
      } else {
        return this.db!.find({}).sort(orderBy);
      }
    }
    async update(id: any, due: Date, title: string, importance: number, completion: boolean, desc: string) {
      let todoupdate = new ToDo(due, title, importance, completion, desc);
      await this.db!.update({_id: id}, {$set: todoupdate});
      return await this.get(id);
    }
}

export const toDoStore = new ToDoStore();
