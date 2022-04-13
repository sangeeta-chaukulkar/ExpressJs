const express=require('express');
// const fs=require('fs');
const data=[];
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.send('<form action="/" onsubmit="document.getElementById(`username`).value=localStorage.getItem(`username`)" method="POST"> <input type="text" id="msg" name="message" placeholder="message"> <input type="hidden" name="username" id="username"><button type="submit">Send</button></form>');  
})

router.post('/',(req,res,next)=>{
    data.push(`{${req.body.username}:${req.body.message}}`);
    console.log(data);
    console.log(`{${req.body.username}:${req.body.message}}`);
    res.redirect('/');
});

module.exports=router;