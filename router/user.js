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
   const user=await User.matchPassword(email,password);
   console.log('User',user);
   return res.redirect('/')
});
router.post('/signup',(req,res)=>{
    const {name,email,password}=req.body;
    User.create({name,email,password});
    return res.redirect('/');})
module.exports=router;