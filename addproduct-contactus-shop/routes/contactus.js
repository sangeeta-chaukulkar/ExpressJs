const express=require('express');
const router=express.Router();
const path=require('path');
const routeDir=require('../util/path');

 router.get('/',(req,res,next)=>{
   res.sendFile(path.join(routeDir,'views','contactus.html'));
})


module.exports=router;