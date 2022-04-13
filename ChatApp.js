const express=require('express');

const loginRoutes=require('./routes/login');
const messageRoute=require('./routes/message');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRoutes);
app.use(messageRoute);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
 });

app.listen(3000);