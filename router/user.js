const User=require('../models/user');
const {Router}=require("express");
const router=Router();
router.get('/signin',(req,res)=>{
    return res.render('signin')
});
router.get('/signup',(req,res)=>{
    return res.render('signup')
});
router.post('/signin',async(req,res)=>{
    const {email,password}=req.body;
    try{
   const user=await User.matchPasswordandGenerateToken(email,password);
   console.log('User',user);
   return res.cookie('token',user).redirect('/')}
   catch(error){
    return res.render('signin',{error:"Incorrect Password or Email"})
   }
});
router.post('/signup',(req,res)=>{
    const {name,email,password}=req.body;
    User.create({name,email,password});
    return res.redirect('/');})
module.exports=router;