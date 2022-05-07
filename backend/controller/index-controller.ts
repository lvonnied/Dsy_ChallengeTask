import {Response} from "express";
import {toDoStore} from "../services/todo-store";

export class IndexController {
    async index(req:any, res:Response) {
        let todos = await toDoStore.all({[req.userSettings.orderBy]: req.userSettings.orderDirection}, req.userSettings.showFinished);
        res.json(todos)
    };

    createToDo = (req: any, res:Response) => {
        res.json(req.userSettings.theme);
    };

    createEntry = async (req: any, res:Response) => {
        let entry = await toDoStore.add(new Date(req.body.due), req.body.title, req.body.importance, req.body.finished, req.body.desc);
        res.json(entry)
    };

    editEntry = async (req: any, res:Response) => {
        let entry = await toDoStore.get(req.params.id);
        res.json(entry)
    };

    updateEntry = async (req: any, res:Response) => {
        let entry = await toDoStore.update(req.params.id, new Date(req.body.due), req.body.title, req.body.importance, req.body.finished, req.body.desc);
        if("return" in req.body) {
            res.send("Back to the homepage");
        } else {
            res.json(entry)
        }
    };

    switchTheme = async (req: any, res: Response) => {
        req.userSettings.theme = !req.userSettings.theme;
        res.send("Switched Theme!")
        //res.render("index",)
    };
}

export const indexController = new IndexController();
