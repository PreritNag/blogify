const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName){
    return (req,res,next)=>{
        const tokens=req.cookies[cookieName]
        if(!tokens){
        next();
    }
    try{
    const userpayload=validateToken(tokens);
    req.user=userpayload;
    }
    catch(error){}
    next();
}
}

module.exports={checkForAuthenticationCookie};