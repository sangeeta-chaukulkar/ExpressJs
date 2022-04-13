const express=require('express');
const fs=require('fs');
const router=express.Router();
if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

router.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="GET"> Enter Username: <input type="text" id="username" name="username"> <button type="submit">Login</button></form>');  
})

module.exports=router;
