// const {body, param} = require("express-validator")
import {body, param} from "express-validator"

export const AddTask = [
    body("title").isString().withMessage("Title must be string").notEmpty().withMessage("Title is required"),
    body("description").isString().withMessage("Description must be string").notEmpty().withMessage("Description is required")
]

export const UpdateTask = [
    param("id").isString().withMessage("Id must be string").isMongoId().withMessage("Id must be a mongodb id")
]

export const DeleteTask = [
    param("id").isString().withMessage("Id must be string").isMongoId().withMessage("Id must be a mongodb id")
]
