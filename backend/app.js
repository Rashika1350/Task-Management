// const express = require("express");
import express from "express";
import morgan from "morgan";
import cors from "cors";
import Routes from "./routes/index.js";
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(cors()) 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/v1",Routes);

//error 404 page
app.use((req,res)=>{
    res.send({
        code:404,
        msg:"Page not found",
        success: false
    })
    return
})

export default app;

