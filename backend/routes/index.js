import express from "express";
const router = express.Router();
import TaskRoute from "./Task.routes.js"

const routes =[
    {
    path : "/task",
    route: TaskRoute
    }
]

routes.forEach((curr) => {
    router.use(curr.path, curr.route);
})

export default router