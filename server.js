// const express =require ('express');
// const cors=require('cors');

// const app=express();
// app.use(cors('*'));

// app.get('/',(request,response)=>{
//     response.send("hiii from sarvesh");
// })

// app.listen(4000,'0.0.0.0',()=>{
//     console.log("server started");
// });

const express=require('express');
const cors=require('cors');

const app=express();

app.use(cors('*'));

app.get('/',(request,response)=>{
    response.send("hii form sarvesh");
});
app.listen(4000,'0.0.0.0',()=>{
    console.log("server started");
});
