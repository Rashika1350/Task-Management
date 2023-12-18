import express from "express";
const router = express.Router();
import {TaskController} from "./../controllers/index.js"
import {TaskValidation} from "./../validations/index.js"
import {validation} from "./../middlewares/validate.js"
// import { GetAllTask } from "../services/Task.service.js";

router.route("/")
.get(TaskController.GetAllTask)
.post(TaskValidation.AddTask,validation, TaskController.AddTask)


router.route("/:id")
.put(TaskValidation.UpdateTask,validation,TaskController.UpdateTask)
.delete(TaskValidation.DeleteTask,validation,TaskController.DeleteTask)

export default router