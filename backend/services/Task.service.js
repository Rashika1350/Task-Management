import httpStatus from "http-status"
import {TaskModel} from "../models/index.js"

 export const AddTask = async(body)=>{
   try{
        const {title, description} = body
        await TaskModel.Task.create({
            title: title,
            description: description,
        })
        return{
            code: httpStatus.CREATED,
            success: true,
            msg: "Task created"
        }
   }catch(err){
    return{
        code: httpStatus.INTERNAL_SERVER_ERROR,
        success: false,
        msg: error.message
    }
   }
}


export const GetAllTask = async()=>{
    try{
        const tasks = await TaskModel.Task.find({})
         return{
             code: httpStatus.OK,
             success: true,
             msg: "Task fetched",
             AllTask: tasks,
             total: tasks.length
         }
    }catch(err){
     return{
         code: httpStatus.INTERNAL_SERVER_ERROR,
         success: false,
         msg: err.message,
         AllTask: [],
         total: 0
     }
    }
 }
 
 export const UpdateTask = async(id)=>{
    try{
        const tasks = await TaskModel.Task.findByIdAndUpdate(id,{
            $set:{
                status:true
            }
        })
        if(!tasks){
            return{
                code: httpStatus.NOT_FOUND,
                success: false,
                msg: "Task not found",
            }
        }
        if(tasks.status){
            return{
                code: httpStatus.BAD_REQUEST,
                success: false,
                msg: "Task already completed",
            }
        }
         return{
             code: httpStatus.OK,
             success: true,
             msg: "Task updated",
         }
    }catch(err){
     return{
         code: httpStatus.INTERNAL_SERVER_ERROR,
         success: false,
         msg: err.message,
     }
    }
 }
 
 export const DeleteTask = async(id)=>{
    try{
        const tasks = await TaskModel.Task.findByIdAndDelete(id)
        if(!tasks){
            return{
                code: httpStatus.NOT_FOUND,
                success: false,
                msg: "Task not found",
            }
        }
         return{
             code: httpStatus.OK,
             success: true,
             msg: "Task deleted",
         }
    }catch(err){
     return{
         code: httpStatus.INTERNAL_SERVER_ERROR,
         success: false,
         msg: err.message,
     }
    }
 }