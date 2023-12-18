import mongoose from "mongoose";

export const ConnectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://2021uee1350:4H8PzenzLlonbwDg@cluster0.zcsb3b0.mongodb.net/?retryWrites=true&w=majority")
        console.log("Databse connected");
        
    }catch(error){
        await mongoose.disconnect();
        process.exit(1);
    }
}
// 4H8PzenzLlonbwDg