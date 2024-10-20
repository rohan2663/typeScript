const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;

app.use(express.static("."));
app.use(express.json());

app.post("/Login",(req,res)=>{
    console.log(req.body);
    if(req.body.username=='admin' && req.body.password=='abc'){
        res.json({mssg:true});
    }
    else{
        res.json({mssg:false});
    }
});

app.listen(port,()=>{
    console.log(`Server started at PORT ${port}`);
});