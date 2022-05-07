import express from 'express';

const router = express.Router();
import {indexController} from '../controller/index-controller';

router.get("/", indexController.index.bind(indexController));
router.get("/switchTheme", indexController.switchTheme);
router.get("/createtodo", indexController.createToDo);
router.get("/createtodo/:id/", indexController.editEntry);
router.post("/newtodo", indexController.createEntry);
router.post("/newtodo/:id/", indexController.updateEntry);

export const indexRoutes = router;
