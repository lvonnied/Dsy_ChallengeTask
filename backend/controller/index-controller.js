"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = exports.IndexController = void 0;
const todo_store_1 = require("../services/todo-store");
class IndexController {
    constructor() {
        this.index = async (req, res) => {
            // TODO change to true
            let todos = await todo_store_1.toDoStore.all(false);
            res.json({ todos: todos });
        };
        this.createToDo = (req, res) => {
            res.json(req.userSettings.theme);
        };
        this.createEntry = async (req, res) => {
            console.log("title: " + req.body.title);
            let entry = await todo_store_1.toDoStore.add(new Date(req.body.due), req.body.title, req.body.importance, req.body.finished, req.body.desc).catch((err) => {
                res.sendStatus(500).json({ error: "save failed", err: err });
            });
            res.sendStatus(200);
        };
        this.editEntry = async (req, res) => {
            let entry = await todo_store_1.toDoStore.get(req.params.id);
            res.json(entry);
        };
        this.updateEntry = async (req, res) => {
            let entry = await todo_store_1.toDoStore.update(req.params.id, new Date(req.body.due), req.body.title, req.body.importance, req.body.finished, req.body.desc);
            if ("return" in req.body) {
                res.send("Back to the homepage");
            }
            else {
                res.json(entry);
            }
        };
        this.switchTheme = async (req, res) => {
            req.userSettings.theme = !req.userSettings.theme;
            res.send("Switched Theme!");
            //res.render("index",)
        };
    }
}
exports.IndexController = IndexController;
exports.indexController = new IndexController();
//# sourceMappingURL=index-controller.js.map