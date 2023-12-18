import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    status:{
        type:Boolean,
        default:false
    }
},{
    timestamps: true
})

export const Task = mongoose.model("task", Schema)

//  export default TaskModel