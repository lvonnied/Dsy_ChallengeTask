import {Response} from "express";
import {toDoStore} from "../services/todo-store";

export class IndexController {
    async index(req:any, res:Response) {
        let todos = await toDoStore.all({[req.userSettings.orderBy]: req.userSettings.orderDirection}, req.userSettings.showFinished);
        res.render("index", {orderBy: req.userSettings.orderBy, orderDirection: req.userSettings.orderDirection, todos: todos, dark: req.userSettings.theme, showFinished: req.userSettings.showFinished});
    };

    createToDo = (req: any, res:Response) => {
        res.render("createtodo", {dark: req.userSettings.theme});
    };

    createEntry = async (req: any, res:Response) => {
        let entry = await toDoStore.add(new Date(req.body.due), req.body.title, req.body.importance, req.body.finished, req.body.desc);
        if("return" in req.body) {
            res.redirect("/");
        } else {
            res.render("createtodo", {entry: entry, dark: req.userSettings.theme});
        }
    };

    editEntry = async (req: any, res:Response) => {
        let entry = await toDoStore.get(req.params.id);
        res.render("createtodo", {entry: entry, dark: req.userSettings.theme});
    };

    updateEntry = async (req: any, res:Response) => {
        let entry = await toDoStore.update(req.params.id, new Date(req.body.due), req.body.title, req.body.importance, req.body.finished, req.body.desc);
        if("return" in req.body) {
            res.redirect("/");
        } else {
            res.render("createtodo", {entry: entry});
        }
    };

    switchTheme = async (req: any, res: Response) => {
        req.userSettings.theme = !req.userSettings.theme;
        res.redirect("/");
        //res.render("index",)
    };
}

export const indexController = new IndexController();
