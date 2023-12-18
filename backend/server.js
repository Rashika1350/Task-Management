import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import {ConnectDB} from "./config/db.config.js";

const port = process.env.PORT || 8000 ;

//db connect
ConnectDB()

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})