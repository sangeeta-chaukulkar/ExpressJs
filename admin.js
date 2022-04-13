const express=require('express');
const router=express.Router();
const path=require('path');
const routeDir=require('../util/path');

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','add-product.html'));
 })

// router.post('/product',(req,res,next)=>{
//    console.log(req.body);
//    res.redirect('/shop');
// })

module.exports=router;