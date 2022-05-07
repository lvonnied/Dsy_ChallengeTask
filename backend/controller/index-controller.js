"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = exports.IndexController = void 0;
const todo_store_1 = require("../services/todo-store");
class IndexController {
    constructor() {
        this.createToDo = (req, res) => {
            res.json(req.userSettings.theme);
        };
        this.createEntry = async (req, res) => {
            let entry = await todo_store_1.toDoStore.add(new Date(req.body.due), req.body.title, req.body.importance, req.body.finished, req.body.desc);
            res.json(entry);
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
    async index(req, res) {
        let todos = await todo_store_1.toDoStore.all({ [req.userSettings.orderBy]: req.userSettings.orderDirection }, req.userSettings.showFinished);
        res.json(todos);
    }
    ;
}
exports.IndexController = IndexController;
exports.indexController = new IndexController();
//# sourceMappingURL=index-controller.js.map