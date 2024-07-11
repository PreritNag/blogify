const path=require("path");
const express=require("express");
const userroutes=require("./router/user");
const mongoose=require("mongoose");
const app=express();
const PORT=5000;

mongoose.connect("mongodb://localhost:27017/Blogify").then((e)=>{
    console.log("database connected");
});
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.get("/",(req,res)=>{
    res.render("home")
});
app.use(express.urlencoded({extended:false}));
app.use("/user",userroutes);
app.listen(PORT,()=>{console.log("server is running")});
