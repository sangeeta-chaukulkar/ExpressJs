const express=require('express');
const router=express.Router();


router.get('/add-product',(req,res,next)=>{
    console.log("In another middleware");
    res.send('<form action="/admin/product" method="POST"><input type="text"  name="title"> <input type="text" name="product_size"> <button type="submit">Add product</button></form>');
 })

router.post('/product',(req,res,next)=>{
   console.log(req.body);
   res.redirect('/shop');
})

module.exports=router;